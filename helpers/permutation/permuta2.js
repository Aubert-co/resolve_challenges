const bb =(bs)=>{
    const a =bs.toString().split('')
 
    for(let i=1;i<a.length;i++){
      const b = [...a]
  
      const tmp =b[i-1]
      b[i-1] =b[i]
      b[i] =tmp
  
      console.log(b)
    }
}
  console.log(bb(431))
  