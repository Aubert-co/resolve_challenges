const string = 'a-c*=b'



const f = (v)=>{
    const b = []
    v = v.reverse()
   for(let i =0;i<v.length;i++){
        if(v[i].match(/[a-zA-Z]/i)){
            b.push(v[i])
           
        }else{
            b.push('')
        }
   }
    const s = v.toString().replace(/[a-zA-Z]/gi,' ')
    
    const fv = s.split(',').filter((val)=>val!==' ')
   
   const bs = b.map((val)=>{
    if(val === ''){
           console.log(fv)
        val =fv[0]
        fv.shift()
     
    }
    return val
   })
   console.log(bs)
   
   
}
f(string.split(''))