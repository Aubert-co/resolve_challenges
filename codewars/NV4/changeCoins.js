/*function countWaysToMakeChange(amount, coinDenominations) {
    // Initialize an array to store the number of ways to make change
    // for each value from 0 to the given amount
    let ways = new Array(amount + 1).fill(0);
    // There is 1 way to make change for 0, using no coins
    ways[0] = 1;
    // Iterate through each coin denomination
    for (let coin of coinDenominations) {
        // Iterate through each value from the coin denomination to the given amount
        for (let i = coin; i <= amount; i++) {
            // The number of ways to make change for the current value is
            // the sum of the number of ways to make change for the current value
            // using the current coin denomination and the number of ways to make change
            // for the remaining value after using the current coin denomination
            ways[i] += ways[i - coin];
        }
    }
    // Return the number of ways to make change for the given amount
    return ways[amount];
}
console.log(countWaysToMakeChange(11,[5,7]))*/

const bb = (s)=>{
    const b = s.split('')
    const v = []
    const ot = {}
    const obj = {}
    for(let i =0;i<b.length;i++){
        if(b[i].match(/[a-zA-Z]/i)){
            v.push(b[i])
        }else{
            const ss  ={key:i,le:b[i]}
            obj[i] = b[i]
        }
    }
    const m  =v.reverse()




 /*   const asv = []
    const ks = Object.keys(obj).length
    var count = m.length + ks
    for(let i =0;i<count;i++){
        if(obj[i]){
            const value = obj[i]
            asv[i] = value
            asv[i+1] = m[i]
        }else{
            asv[i] = m[i]
        }
    }
    console.log(asv)*/
}
bb('a-b-d-f')

