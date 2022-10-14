const array = [1,2,3,4,10]

const biggestValue = (value)=>{
    return value.reduce((a,b)=> {
        return Math.max(a, b);
      }, -Infinity);
}
console.log(biggestValue(array))