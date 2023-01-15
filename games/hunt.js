const  datas  = require("./datas")

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
        const split = datas.splice((datas.length-day),day)
        const days = split.map((val)=>val.day)
        const converted = split.reduce((vl,tr)=>{
            return {
                last:`nos ultimos ${day} dias voce teve o retorno de `,
                baus:vl.baus+tr.baus,
                sparks:vl.sparks+tr.sparks,
                ganho:vl.ganho+tr.ganho,
                gasto:vl.gasto+tr.gasto,
                days:[...days]
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
console.log(fund)