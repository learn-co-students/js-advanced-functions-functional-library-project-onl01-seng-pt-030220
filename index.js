const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'

    },

    each: function(collection, callback) {
            if (Array.isArray(collection))
             {
               for (let i=0;i<collection.length;i++)
               {
                  callback(collection[i],i,collection)
                }

             }
             else
             {
                for(const property in collection){
                  callback(property,collection[property],collection)
                }

            }

       return collection
    },

    map: function(collection,callback) {
        let newArray=[]
          for(let property in collection){
            if(Array.isArray(collection))
            {

                   newArray.push(callback(collection[property],property,collection))
            }
            else
            {
                    newArray.push(callback(collection[property],property,collection))

            }
        }

        return newArray
    },

  reduce: function(collection, callback, acc) {
        if (acc)
        {
            return collection.reduce((acc,el) => {
              return callback(acc,el,collection)
            },acc)

        }
      else{

            return  collection.reduce((acc,el) => {
                return callback(acc,el,collection)
            })

      }


  },

  //fi.find

  find: function(collection, predicate){

     return collection.find(element =>   predicate(element))
  },

  filter: function(collection,predicate){

    return collection.filter(element => predicate(element))
  },

  size: function(collection){
   if(Array.isArray(collection)){
     return   collection.length
   }

   else {
     return  Object.keys(collection).length
   }
  },

  first: function(collection,n){
    if (n){
      return collection.slice(0,n)
    }else{

      return parseInt(collection.slice(0,1))

    }

},



last: function(collection,n){
   if(n){
     return collection.slice(-n,collection.length)
   }else{

       return parseInt(collection.slice(-1))
   }


},

compact: function(collection){
 return collection.filter(function(e){ return (e !== false && e !== null
 && !Number.isNaN(e) && e !== "" && e !== 0 && e !== undefined)})
},

sortBy: function(array, callback){
  let newArray=Array.from(array)
  return newArray.sort(function(a,b){return callback(a)-callback(b)})


},

flatten: function(array, shallow=false){
//array.flat() not working

shallow =true
///one level flat
 let single =[].concat(...array)
if (shallow == true){
    return  single
}
else
{

return  function deep(array) { return array.reduce((accum,element)=>
 Array.isArray(element)?  accum.concat(deep(element)):accum.concat(element)
,[])}

}

},

uniq: function(array, isSorted=false, callback){

  ///first way

  return [... new Set(array)]
  //second way
  //arr.filter((element,index)=> arr.indexOf(element) === index)
   //third way

//when applied %3
return [... new Set(array.filter(el => el%3).sort(function(a,b){return a-b}))]

},

keys: function(object){

  return Object.keys(object)
},

values: function(object){

  return Object.values(object)
},




functions: function(object) {


},



  }
})()

fi.libraryMethod()
