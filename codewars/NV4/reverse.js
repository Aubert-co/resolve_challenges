const value = 'v-a=e-p*m&'



const c = (s)=>{
  const lett =  s.split('')
  const ss = lett.toString().replace(/[a-zA-Z]/gi,' ')
    
    const fv = ss.split(',').filter((val)=>val!==' ')
    const rev = value.match(/[a-zA-Z]/gi).reverse()
    const obj = {}
  
    for(let i =0;i<s.length;i++){
        if(!s[i].match(/[a-zA-Z]/i)){
            obj[i] = s[i]
        }
    }
    const ar = new Array(rev.length+Object.keys(obj).length)
    let vi = 0
    for(let i =0 ;i<ar.length;i++ ,vi++){
        
        if(obj[i]){
        
            ar[i] = obj[i]
           
            if(rev[vi])ar[i+1] = rev[vi]
            i+=1
        }
            if(rev[vi]){
                ar[i] = rev[vi]
            }
        
  
    }
    const compare = ar.join('')

    console.log(rev.join(''))
}
console.log(c(value))