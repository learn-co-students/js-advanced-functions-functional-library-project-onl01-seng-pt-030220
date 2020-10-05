const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++){
        callback(newCollection[i])
      }

      return collection;
    },

    map: function(collection, callback) {
      let newArr = []
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++){
        newArr.push(callback(newCollection[i]))
      }
  
      return newArr;
    },

    reduce: function(collection, callback, acc) {
      let newCollection = collection
      if (!acc){
        acc = collection[0]
        newCollection = collection.slice(1)
      }

      for (let i = 0; i < newCollection.length; i++){
        acc = callback(acc,newCollection[i], newCollection)
      }

      return acc
    },

    find: function(collection, predicate)  {
      let answer;
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          answer = collection[i]
          break
        } else {
          answer = undefined
        }
      }

      return answer
    },

    filter: function(collection, predicate)  {
      let newCollection = []
      for (const number of collection){
        if (predicate(number)){
          newCollection.push(number)
        }
      }

      return newCollection
    },

    size: function(collection)  {
      return Object.values(collection).length
    },

    first: function(array, n) {
      let newArr = (n > 0) ? array.slice(0, n) : array[0]
      return newArr
    },

    last: function(array, n) {
      let newArr = (n > 1) ? array.slice(-n) : array[array.length -1]
      return newArr
    },

    compact: function(array) {
      let arrCopy = []
      for (let i = 0; i < array.length; i++)  {
        if (!!array[i] !== false) {
          arrCopy.push(array[i])
        }
      }

      return arrCopy
    },

    sortBy: function(array, callback) {
      let sortArr = [...array]
      sortArr.sort((a, b)=>{
        return callback(a) - callback(b)
      })

      return sortArr
    },

    flatten: function(array, shallow = false) {
      let newArr = []
      for (let i = 0; i < array.length; i++){
        let arr;
        if (typeof(array[i]) !== 'number' && !shallow){
          arr = this.flatten(array[i])
        } else {
          arr = array[i]
        }
        newArr = newArr.concat(arr)
      }
      
      return newArr
    },

    uniq: function(array, isSorted = false, callback = false) {
      if (isSorted) {
        // grab first element of array 
        let newArr = [array[0]]
        for (let i = 1; i < array.length; i++){
          // if current newArr elemenet is NOT EQUAL to current array element then push to newArr
          if (newArr[i - 1] !== array[i]){
            newArr.push(array[i])
          }
        }
        
        return newArr

      } else if (!callback) {
        return Array.from(new Set(array))

      } else {
        let editedArr = []
        let newArr = []
        for (const element of array){
          // run each array element through callback
          let callbackVal = callback(element)
          // if editedArr DOES NOT include that callback value then push those elements to new arr
          if (!(editedArr.includes(callbackVal))){
            editedArr.push(callbackVal)
            newArr.push(element)
          }
        }

        return newArr
      }
    },

    keys: function(obj){
      const objKeys = []
      for (const key in obj){
        objKeys.push(key)
      }
      return objKeys
    },

    values: function(obj){
      const objValues = []
      for (const val in obj){
        objValues.push(obj[val])
      }
      return objValues
    },

    functions: function(object) {
      let functionsArr = []
      for (const key in object){
        if (typeof(object[key]) === 'function'){
          functionsArr.push(key)
        }
      }
      return functionsArr.sort()
    },

  }
})()

fi.libraryMethod()
