const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback){
    let newCollection=(collection instanceof Array)? collection: (Object.values(collection))
    for(let i = 0; i < newCollection.length; i++){
      callback(newCollection[i])
    }
    return collection
    },

    map: function(collection, callback) {
    const modArray = []
    let  newArray = (collection instanceof Array)? collection: (Object.values(collection))
    for (let i = 0; i < newArray.length; i++){
    modArray.push(callback(newArray[i]))
    }
    return modArray
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection;
      if (!acc){
        acc = collection[0]
        newCollection = collection.slice(1)
      }
      for (let i = 0; i < newCollection.length; i++){
        acc = callback(acc, newCollection[i], newCollection)
      }
      return acc
    },

    find: function(collection, predicate){
      let value;
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          value = collection[i]
          break
        } else {
          value = undefined
        }
      }
      return value
    },

    filter: function(collection, predicate){
      let values = [];
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i])){
          values.push(collection[i])
        }     
      }
      return values
    },

    size: function(collection){
      let newCollection = (collection instanceof Array) ? collection : Object.values(collection)
      return newCollection.length
    },
  
    first: function(array, n) {
      const returnValue = (n > 1) ? array.slice(0,n) : array[0]
      return returnValue
    }, 

    last :function(array, n){
      let returnValue = (n > 1) ? array.slice(-n) : array[array.length - 1];
    return returnValue
    }, 

    compact: function(array){
      const newArray = []
      array.forEach(element => {
      if (!!element === true){
        newArray.push(element)
      }
    })
    return newArray
    }, 

    sortBy: function(array,callback){
      let newArray = [...array]
      newArray.sort((a,b)=> callback(a) - callback(b)) 
      return newArray
    }, 
  
    flatten: function(array,shallow){
      // console.log(array)

    }, 

    values: function(object){
    const newValue = Object.values(object) 
    return newValue
    }, 

    keys: function(object){
      const newValue = Object.keys(object) 
      return newValue
    }

  }
})()

fi.libraryMethod()
