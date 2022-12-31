const string = 'adbec'


const val = (v,t)=>{
   const vs = v.split('')
   const ts = t.split('')
   const b = []
    
   for(let i =0;i<vs.length;i++){
       const s =  ts.filter((c)=>vs[i] === c)

       b.push(...s)
   }
   if(b.join('')=== v)return true

   return false
}

val('abc',string)