const vls = [1,1,2,4,4,4,5,5,5,3]

const b = []
const a = vls.map((vals)=>{
    const ss =vls.filter((val)=>val===vals)
    if(ss.length >1)return
    b.push(vals)
})

console.log(b)