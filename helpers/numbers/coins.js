const a = []
const f = (money,coins)=>{
    coins.sort()
    
    const v =  coins.filter((val)=>money%val ===0)    
    const moneys = money
   // a.push(...v)

    for(let i =0;i<coins.length;i++){
        money = moneys
        var rest = 0
        while(money > 0){
            rest+=1
        
            const valueToFind=   money- coins[i]
            
           /* const m = coins.filter((val)=>{
                if(valueToFind===val && val !== coins[i])return val
            })
            
            if(m.length >0 )a.push([coins[i],m])
*/          
            const findValues = coins.filter((val)=>{
                const f = coins.filter((s)=>s===rest)
                if((rest + val) === moneys && f.length >0)a.push([val,rest])
            })
          
            money-=coins[i]
         
        }
            coins[i] = ''
          
        money = moneys
    }
    console.log(a)
  
}
f(4,[2,1].sort())