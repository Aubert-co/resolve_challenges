function missingNumbers(arr, brr) {
    const b = []
    brr.map((val)=>{
        const ind = arr.indexOf(val)
        if(ind === -1)b.push(val)
    })
    return b
}
const arr = [,7,2,5,3,5,3]
const brr =[7,2,5,4,6,3,5,3]
console.log(missingNumbers(arr,brr))