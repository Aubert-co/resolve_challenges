const arr = ['a',1,2,3,'0',4,5,'7',7]

const moveZeros = (a)=>{
    var count  = 0
    const zeros = a.filter((val)=>{
        if(val === 0)count++
        return val!==0
    })
    const asv = new Array(count).fill(0)
    zeros.push(...asv)
    return zeros
}
console.log(moveZeros(arr))
/**
 * var moveZeros = function (a) {
  return  a.sort((v,b)=>{
    if(v===0){
        return  v =1
     }
     if(b>0){
         return !b
     }
     if(typeof v === 'string' ){
       
         return v= a.sort()
     }
     return 
     })  

    
}
 */