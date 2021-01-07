const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading the article!";
    },
 
    each: function(collection, callback) {
    
        if(Array.isArray(collection)){
    
            for(let i = 0 ; i < collection.length ; i++ ){
                   callback(i,collection[i],collection)
            }       
          }
          
          else{
             for(const el in collection){
                  callback(collection[el],el,collection)
              }    

           
          }
          return collection;
    },

         
        map: function(collection,callback) {
        
          
            if(!Array.isArray(collection))
            {    
                collection = Object.values(collection)
            }
              let newArray=[]
              for(let i= 0 ; i< collection.length;i++){
                    newArray.push(callback(collection[i]))
              }
          
          return newArray
            
        },

        reduce: function(collection,callback,acc){
          
             if(! acc){
               acc=collection[0]
               collection=collection.slice(1)
             }
             
             for(let i= 0 ;i< collection.length;i++)
             {
                acc=callback(acc,collection[i],collection)
              }
             
             return acc   
        },

        find: function(collection,predicate){
         let  newarr=[]

            if( !Array.isArray(collection)){
                
                collection=Object.values(collection)
            }
        
            for(let i = 0 ;i < collection.length ;i++){
                if( predicate(collection[i])){
                  return (collection[i])
                }
                
            }   
        } ,
        filter: function(collection,predicate){

              if(! Array.isArray(collection)){
                collection=Object.values(collection)
              }
              let newArr=[]
              for(let i=0 ;i< collection.length;i++){
                      if(predicate(collection[i])){
                        newArr.push(collection[i])
                      }
              }
              return newArr

        },

        size: function(collection){
          if(! Array.isArray(collection)){
            collection=Object.values(collection)
          }
             return collection.length
        },
        first: function(collection,n){
              
            if(n){     
                return collection.slice(0,n)
             }else{
               return collection[0]
             }
             
        },
        last:function(array,n){
          if(n){
             return array.slice(-n)
          }else{
              return array[array.length-1]
          }

        },
        
        compact: function(array){
             let newArr=[]
              for(let i= 0;i<array.length ;i++){
                 if(array[i] == false  || array[i] == null || array[i] == undefined || array[i] == 0 || array[i] == "" ||  Number.isNaN( array[i])){
                    array[i]
                  }else{
                      newArr.push( array[i])
                  }

              }
              return newArr
        },

         sortBy: function(array,callback){
                  let newarry=[]
                  newarry=[...array]  
                  return  newarry.sort((a,b) => callback(a)-callback(b))
              
         },
         flatten: function(array,shallow){

           if(shallow){
             let arr=[]
                  return  arr =[].concat(...array)
              }else{
                return  array.join().split(',').map(e=>parseInt(e))
                //or using reduce and recursion
                /* function deep(array) { return array.reduce((acc,element)=>
                     Array.isArray(element)?  acc.concat(deep(element)):acc.concat(element)
                  ,[])}
                 return deep(array)
                    } */
            }

         },
         uniq:   function(array, isSorted, callback){
           let sorted=array.sort(function(a,b){return a-b})
         if (isSorted){
              let k=sorted.map(function(element,index,sorted){
              return element === sorted[index+1] ? delete sorted[index]:element
              }
            ).filter(el => typeof(el) == "number")
            return [... new Set(k)]
          }else if (callback) {
                 let newArray = array.map(el=> callback(el))
                  return   [... new Set(newArray)]
          }
             return [... new Set(array)]
         },
         keys: function(object){

             return Object.keys(object)
         },

        values: function(object){

             return Object.values(object)
         },
         functions: function(object) {
            let array=[]

            for(let i in object){

                if (typeof(object[i]) === "function")
                array.push(i)
            }
          return   array.sort()


        },
  };
})();
 
fi.libraryMethod();

