const string = 'o-ecv'

Array.map = (val)=>{
    return val*2
}
Array.prototype.map = (val)=>console.log(val)
const v = [1,2,3].map((a)=>{
    return a
})

console.log(v)