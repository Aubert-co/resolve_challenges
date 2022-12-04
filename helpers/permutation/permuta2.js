const v = []
const bb =(bs)=>{
    const a =bs.toString().split('')
 
    for(let i=1;i<a.length;i++){
      const b = [...a]
  
      const tmp =b[i-1]
      b[i-1] =b[i]
      b[i] =tmp
  
      v.push(b)
      console.log(v)
    }
}

const ddd= (a,k)=>{
  for(let i=1;i<a.length;i++){
   
    const tmp= a[k]
    a[i] = a[i+1]
    a[i+1] = tmp
    return a    
  }
}
const test = (value)=>{

  const permu =(a,k)=>{
    for(let i =0;i<6;i++){
        k = i
        if(k >= a.length)k=0
        a= ddd(a,k)
        console.log(a[k])
    }
  }
  permu([1,2,3])
}
test([123])

