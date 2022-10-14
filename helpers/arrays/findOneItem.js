/*const vls = [ [ 5,  3, 9, 4, 9,  3, 1 ],
[ 1, 2, 2, 4, 4, 1 ],
[ 1, 2, 3 ] ]
const v = 1
v.flat()
*/
/*const b = []
const a = vls.map((vals)=>{
    const ss =vls.filter((val)=>val===vals)
    if(ss.length >1)return
    b.push(vals)
})
console.log(b.length)
const max = b.reduce(function(a, b) {
    return Math.max(a, b);
  }, -Infinity);
  console.log(max)*/
  const vls = [1,2,2,3,4,5,56,3]
 
const findRepeatValues = (array)=>{
  const b = []
  const a = vls.map((vals)=>{
      const ss =vls.filter((val)=>val===vals)
      if(ss.length >1)b.push(vals)
      
})
return b
}
console.log(findRepeatValues(vls))