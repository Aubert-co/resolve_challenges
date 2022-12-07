const datas = [
    {day:'2/12',gasto:5040,ganho:6055,baus:25,sparks:0},
    {day:'3/12',gasto:5510,baus:24,sparks:3,ganho:8685},
    {day:'4/12',sparks:1,baus:27,gasto:5855,ganho:(6660)},
    {day:'5/12',baus:30,ganho:230+11960,sparks:2,gasto:5135},
    {day:'6/12',baus:32,ganho:230+8635,sparks:0,gasto:5975}
]
const investimentos = [
8000,6510
]

function Values (){

const daylyValue = datas.map(( {ganho,baus,sparks,gasto} )=>{
return {profit:(ganho-gasto),baus:baus+sparks}
})
const spendValue = investimentos.reduce((vl,tr)=>vl+tr)
const generalValue = datas.reduce((vl,tr)=>{
   return {
    ganho:vl.ganho+tr.ganho,
    baus:vl.baus+tr.baus,
    gasto:vl.gasto+tr.gasto,
    profit:(vl.ganho+tr.ganho)-(vl.gasto+tr.gasto),
    sparks:vl.sparks+tr.sparks,
    totalDays:datas.length
   }
})

return {
    daylyValue,generalValue,
    fund:generalValue.profit-spendValue
}
}
const {daylyValue,generalValue,fund} = Values()
console.log(fund)