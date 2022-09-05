const ar = [ ]
const ff = (arr,len)=>{
    let as = []
 
    arr.map((val,ind,arr)=>{
        as.push(val)
     
        if(as.length === len){
          ar.push(as)
          as = []
        }
        if(ind === arr.length-1)ar.push(as)
        })
        return ar
}