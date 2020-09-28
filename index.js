const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      for (let [key, value] of Object.entries(collection)) {
        cb(value, key, collection)
      }
      return collection

    },

    map: function(collection, cb) {
      let newArr = [];
      for (let [key, value] of Object.entries(collection)) {
        newArr.push(cb(value, key, collection))
      }
      return newArr;

    },

    reduce: function(collection, cb, acc) {
      let newArr = collection;
      if (!acc){
        acc = collection[0]
        newArr = collection.slice(1)
      }
      for (let i = 0; i < newArr.length; i++){
        acc = cb(acc, newArr[i], newArr)
      }
      return acc

    },

    find: function(collection, predicate){
      return collection.find(ele => predicate(ele))
    },

    filter: function(collection, predicate) {
      return collection.filter(ele => predicate(ele))
    },

    size: function(collection){
      return Object.values(collection).length
    },

    first: function(array, num){

      if (num) {
        return array.slice(0, num)
      } else {
        return array[0]
      }
      
    },

    last: function(array, num){
      if (num) {
        return array.slice(-num) 
      } else {
        return array[array.length - 1]
      }
      
    },

    compact: function(array) {
      let newArr = [];

      for (let i = 0; i < array.length; i++){
        if (!!array[i] === true){
          newArr.push(array[i])
        }
      }
      return newArr;
    },

    sortBy: function(array, callback){
      let newArray = Array.from(array);
      return newArray.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function(array, shallow=false){
      let newArr = [];
        for (let i = 0; i < array.length; i++){
          let ele
          if (typeof array[i] !== "number" && !shallow){
            ele = this.flatten(array[i])
          } else {
            ele = array[i]
          }
          newArr = newArr.concat(ele)
        }
      return newArr;
    },

    uniq: function(array, isSorted=false, cb=false){
      let newArr = [];
      let resultsArr = [];

      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      
      if (!!cb){  
        array.forEach(ele => resultsArr.push(cb(ele)))
        newArr = resultsArr.filter(onlyUnique)
      } else {
        newArr = array.filter(onlyUnique);
      }
      return newArr;
    },

    keys: function(object){

      return Object.keys(object)
    },
    
    values: function(object){
    
      return Object.values(object)
    },    


    functions: function(object) {
      let newArr = [];
      for (const key in object){
        if (typeof object[key] === "function") {
          newArr.push(key)
        }
      }
      return newArr
    },
    


  }
})()

fi.libraryMethod()
