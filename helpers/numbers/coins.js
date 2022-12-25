const a = []
const f = (money,coins)=>{
    coins.sort()
    
    const v =  coins.filter((val)=>money%val ===0)    
    const moneys = money
   // a.push(...v)

    for(let i =0;i<coins.length;i++){
        money = moneys
        while(money > 0){
            const valueToFind=   money- coins[i]
            
            const m = coins.filter((val)=>{
                if(valueToFind===val && val !== coins[i])return val
            })
            
            if(m.length >0 )a.push([coins[i],m])

            money-=i[coins]
        }
        coins[i] = ''
    }
    console.log(a)
}
f(10,[2,5,3].sort())