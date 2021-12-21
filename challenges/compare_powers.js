function comparePowers(n1,n2){
    const valueOne = n1.reduce((tr,vr)=>tr**vr)
    const valueTwo = n2.reduce((tr,vr)=>tr**vr)
    if(valueOne > valueTwo)return -1
    if(valueTwo > valueOne)return 1
    return 0
}
console.log(comparePowers([2,10],[2,10]))