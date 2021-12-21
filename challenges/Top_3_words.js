const string = "b b g g g g g g g m m m m e e e e b c c c v a a a a"

const returnValuesInObject = (text)=>{
    const ma = text.replace(/[$%¨&*()/!"`{}?<>.,;-=+@#\/ ]/gi," ")
    const a = ma.split(' ')
 
    const m = a.reduce((count,val)=>{
        if(count[val]){
            count[val]++
            return count
        }
        count[val] = 1
        return count
    },{})
   
    const keys = Object.keys(m)
    const values = Object.values(m)
    const array  =  []

    const ss = keys.map((val,ind)=>{
        if(val === '')return 
        const obj = {keys:val,values:values[ind]}
        array.push(obj)
    })
    return array
}
function topThreeWords(text) {  

    const array = returnValuesInObject(text)
    const sortHightvalues = array.sort((a,b)=>{
        if(a.values > b.values){
            return -1
        }
        if(a.values < b.values){
            return 1
        }
        return 0
    })
    
   return sortHightvalues.splice(0,3)
   .map((val)=>{
       return val.keys
   }).filter((val)=>val!=='')
   
}
console.log(topThreeWords('\ e e E E a a A A AA '))
//const ss =  ", e m & % $ . \ A won't"

//const a = ss.replace(/[$%¨&*()/!"`{}?<>., ]/gi," ")
