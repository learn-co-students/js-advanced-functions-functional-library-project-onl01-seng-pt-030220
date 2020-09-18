const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let [key, value] of Object.entries(collection)) {
        callback(value, key, collection)
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      for (let [key, value] of Object.entries(collection)) {
        newCollection.push(callback(value, key, collection))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let memo = (acc ? acc : collection[0])
      let i = (acc ? 0 : 1)
      for (; i < collection.length; i++) {
        memo = callback(memo, collection[i], collection)
      }
      return memo
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
           newArray.push(collection[i])
        }
      }
      return newArray
    },

    size: function(collection) {
      let acc = 0
      for (let [key, value] of Object.entries(collection)) {
        acc++
      }
      return acc
    },

    first: function(array, n = 0) {
      if (n) {
        let limit = n
        let newArray = []
        for (let i = 0; i < limit; i++) {
          newArray.push(array[i])
        }
        return newArray
      } else {
        return array[0]
      }
    },

    last: function(array, n = 0) {
      if (n) {
        let newArray = []
        for (let i = (array.length - n); i < array.length; i++) {
          newArray.push(array[i])
        }
        return newArray
      } else {
        return array[array.length-1]
      }
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let modArray = []
      let resultArray = []
      for (let i = 0; i < array.length; i++) {
        resultArray.push(array[i])
      }
      for (let i = 0; i < array.length; i++) {
        modArray.push(callback(array[i]))
      }
      let swapped;
      do {
        swapped = false;
        for(let i = 0; i < modArray.length; i++) {
          if(modArray[i] && modArray[i + 1] && modArray[i] > modArray[i + 1]) {
            let temp = modArray[i];
            modArray[i] = modArray[i+1];
            modArray[i+1] = temp;

            let resultTemp = resultArray[i]
            resultArray[i] = resultArray[i+1];
            resultArray[i+1] = resultTemp;
            swapped = true;
          }
        }
      } while(swapped);
      return resultArray
    },

    flatten: function(array, shallow = false) {
      if (shallow) {
        return array.reduce((acc, val) => acc.concat(val), []);
      } else {
        const stack = [...array];
        const res = [];
        while(stack.length) {
          const next = stack.pop();
          if(Array.isArray(next)) {
            stack.push(...next);
          } else {
            res.push(next);
          }
        }
        return res.reverse();
      }
    },

    uniq: function(array, isSorted = false, callback = 0) {
      if (callback) {
        let newArray = []
        let resultArray = []
        for (let i = 0; i < array.length; i++) {
          if (i === 0) {
            newArray.push(array[i])
            resultArray.push(callback(array[i]))
          } else {
            if (!resultArray.includes(callback(array[i]))) {
              newArray.push(array[i])
              resultArray.push(callback(array[i]))
            }
          }
        }
        return newArray
      } else {
        let newArray = []
        for (let i = 0; i < array.length; i++) {
          if (i === 0) {
            newArray.push(array[i])
          } else {
            if (!newArray.includes(array[i])) {
              newArray.push(array[i])
            }
          }
        }
        return newArray
      }
    },

    keys: function(object) {
      let array = []
      for (let key in object) {
        array.push(key)
      }
      return array
    },

    values: function(object) {
      let array = []
      for (let key in object) {
        array.push(object[`${key}`])
      }
      return array
    },

    functions: function(object) {
      let array = []
      for (let key in object) {
        if (typeof object[key] === 'function') {
          array.push(key)
        }
      }
      return array
    },


  }
})()

fi.libraryMethod()
