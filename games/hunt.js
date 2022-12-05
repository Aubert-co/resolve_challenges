const datas = [
    {day:'2/12',gasto:5040,ganho:6055,baus:25,sparks:0},
    {day:'3/12',gasto:5510,baus:24,sparks:3,ganho:8685},
    {day:'4/12',sparks:1,baus:27,gasto:5855,ganho:(6660)},
    {baus:1,ganho:230}
]

const m = datas.map((val)=>{
    const {ganho,baus,sparks,gasto} = val
    return {profit:(ganho-gasto),baus:baus+sparks}
})
const total = datas.reduce((vl,tr)=>{
   return {
    ganho:vl.ganho+tr.ganho,
    baus:vl.baus+tr.baus,
    gasto:vl.gasto+tr.gasto,
    profi:(vl.ganho+tr.ganho)-(vl.gasto+tr.gasto)
   }
})
console.log(total)