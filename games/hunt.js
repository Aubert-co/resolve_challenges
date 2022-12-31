const datas = [
    {day:'2/12',gasto:5040,ganho:6055,baus:25,sparks:0},
    {day:'3/12',gasto:5510,baus:24,sparks:3,ganho:8685},
    {day:'4/12',sparks:1,baus:27,gasto:5855,ganho:(6660)},
    {day:'5/12',baus:30,ganho:230+11960,sparks:2,gasto:5135},
    {day:'6/12',baus:32,ganho:230+8635,sparks:0,gasto:5975},
    {day:'7/12',baus:22,sparks:2,gasto:4625,send:67,ganho:5380},
    {day:'8/12',sparks:1,gasto:5995,baus:28,ganho:265+7810},
    {day:'9/12',sparks:3,gasto:6175.00,ganho:330+7900,baus:31},
    {day:'10/12',sparks:4,gasto:6695,ganho:230+15815.00,baus:33},
    {day:'11/12',sparks:0,gasto:5525.00,ganho:(3*230)+6020,baus:27},
    {day:'12/12',baus:(44-27)+(4+7),ganho:(11460-6480)+(460+460+1880),sparks:1,gasto:5645},
    {day:'13/12',baus:20,sparks:2,ganho:4880,gasto:3000},
    {day:'14/12',baus:51-20,ganho:13035-4880,gasto:6210,sparks:1},
    {day:'15/12',baus:37,ganho:10410,sparks:2,gasto:6830},
    {day:'16/12',baus:35,sparks:1,gasto:6030,ganho:10980},
    {day:'17/12',baus:41,ganho:13600,gasto:7145,sparks:2},
    {day:'18/12',baus:25,ganho:19075,gasto:6025,sparks:1},
    {day:'19/12',baus:44,ganho:16895,gasto:7165,sparks:2},
    {day:'20/12',baus:35,sparks:2,ganho:38925,gasto:6380},
    {day:'21/12',baus:9+19,ganho:3510+5640,gasto:5635,sparks:0},
    {day:'22/12',baus:38-9,ganho:13300.00-4150,gasto:6025,sparks:2},
    {day:'23/12',baus:20,ganho:4900,gasto:4825,sparks:1},
    {day:'24/12',baus:37,ganho:11930,sparks:2,gasto:6885},
    {day:'25/12',baus:37,sparks:2,ganho:9960,gasto:6680},
    {day:'26/12',baus:25,ganho:7970,sparks:2,gasto:4875},
    {day:'27/12',baus:34,ganho:10970,gasto:5435,sparks:2},
    {day:'28/12',baus:32,sparks:1,ganho:9040,gasto:5860},
    {day:'29/12',baus:30,ganho:9165,sparks:2,gasto:5575},
    {day:'30/12',baus:45,ganho:14865,sparks:0,gasto:7100}
]

/*const datasProfit = datas.map((val)=>{
    const {gasto,ganho} = val
    val.sparks = (val.sparks*2)/100 
    return{...val,profit:ganho-gasto}
})*/

const investimentos = [
8000,6510,11000,11000,7864,6814,10800,7200,7200,6613,8500,10500,7000,7000,47000,40000,50000
]

function Values (){

const daylyValue = datas.map(( {ganho,baus,sparks,gasto,day} )=>{
return {day,profit:(ganho-gasto),baus:baus+sparks,sparks:(sparks/100)*2}
})
const spendValue = investimentos.reduce((vl,tr)=>vl+tr)
const generalValue = datas.reduce((vl,tr)=>{
   return {
    ganho:vl.ganho+tr.ganho,
    baus:vl.baus+tr.baus,
    gasto:vl.gasto+tr.gasto,
    profit:(vl.ganho+tr.ganho)-(vl.gasto+tr.gasto),
    sparks:vl.sparks+(tr.sparks*2)/100,
    totalDays:datas.length
   }
})
const median = (days)=>{
    const profit = generalValue.profit/datas.length
    const sparks = generalValue.sparks/datas.length
    const em_days_baus  =  `em ${days} dias vc tera um lucro de ${profit*days}`
    const em_days_sparks = `em ${days} dias vc tera um lucro de ${sparks*days}`
    return {day_median:profit,dayprofy:em_days_baus,em_days_sparks,sparks_median:sparks}
}
const lastDays= (day)=>{
    const split = datas.splice((datas.length-day)-1,day)
   
    const converted = split.reduce((vl,tr)=>{
        return {
            days:`nos ultimos ${day} dias voce teve o retorno de `,
            baus:vl.baus+tr.baus,
            sparks:vl.sparks+tr.sparks,
            ganho:vl.ganho+tr.ganho,
            gasto:vl.gasto+tr.gasto
        }
    })
    return {
        datas_cont:split.length,
        ...converted,
        sparks:converted.sparks*0.02,
        profit:converted.ganho - converted.gasto
    }
}
return {
    daylyValue,generalValue,lastDays,
    fund:generalValue.profit-spendValue,median
}
}
const {daylyValue,generalValue,fund,median,lastDays} = Values()

//const sparks= datasProfit.filter(({profit})=>profit>5000)
console.log(lastDays(3))