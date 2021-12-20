const string = "b b g g g g g g g m m m m e e e e b c c c v a a a a"
function topThreeWords(text) {  
    const ma = text.replace(/[$%¨&*()/!"`{}?<>.,;-=+@#\/ ]/gi," ")
    const a = ma.split(' ')
    const v = []
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
    
    const sortHightvalues = array.sort((a,b)=>{
        if(a.values > b.values){
            return -1
        }
        if(a.values < b.values){
            return 1
        }
        return 0
    })
    console.log(sortHightvalues)
   return sortHightvalues.splice(0,3)
   .map((val)=>{
       return val.keys
   }).filter((val)=>val!=='')
   
}
console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`))
//const ss =  ", e m & % $ . \ A won't"

//const a = ss.replace(/[$%¨&*()/!"`{}?<>., ]/gi," ")
