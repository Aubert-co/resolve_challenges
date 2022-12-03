const v = []
const bb =(bs)=>{
    const a =bs.toString().split('')
 
    for(let i=1;i<a.length;i++){
      const b = [...a]
  
      const tmp =b[i-1]
      b[i-1] =b[i]
      b[i] =tmp
  
      v.push(b)
      console.log('here')
    }
}
//bb('bc',2)

const l = []
const fun = ()=>{console.count('here')}
const test = (array,k)=>{

  for(let i =k;i<array.length;i++){
    fun()
    
  }
}
test([1,2],0)
