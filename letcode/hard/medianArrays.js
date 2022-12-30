const a = [1,2,3,4,5]
//console.log(a[2.5-0.5])
//console.log(a[(a.length/2)-1],a[a.length/2])
const func = (n,b)=>{
    const v = [...n,...b].sort((z,w)=>z-w)
    
   
    if((v.length%2) === 0){
        const median1 = v[(v.length/2)-1]
        const median2 = v[v.length/2]
      
        return (median1+median2)/2
    }
    return v[v.length/2-0.5]
}
console.log(func([3],[-1,-2]))