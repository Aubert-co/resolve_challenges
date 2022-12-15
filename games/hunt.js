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
    {day:'14/12',baus:51-20,ganho:13035-4880,gasto:6210,sparks:1}
]

/**
 * after
 * Tier: queens,  TotalChests: 27,  TotalUPX: 6480.00,  Spark: 0.02 (~$12.00),  SparkChests: 1,  Profit: 2665.00,  TotalFees: 3815.00,  SparkPerTreasureRatio: 0.04,  SendsPerTreasureRatio: 2.00,  SendsUsed: 54,  AvgSendFee: 35.46
 */
/**before
 * Tier: queens,  TotalChests: 44,  TotalUPX: 11460.00,  Spark: 0.02 (~$12.00),  SparkChests: 1,  Profit: 7645.00,  TotalFees: 3815.00,  SparkPerTreasureRatio: 0.02,  SendsPerTreasureRatio: 1.23,  SendsUsed: 54,  AvgSendFee: 35.46
 */
const investimentos = [
8000,6510,11000,11000,7864,6814,10800,7200,7200,6613,8500,10500
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
return {
    daylyValue,generalValue,
    fund:generalValue.profit-spendValue,median
}
}
const {daylyValue,generalValue,fund,median} = Values()
console.log(generalValue)