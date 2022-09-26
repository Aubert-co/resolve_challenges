const Notarray =[1,1,1,1,1,2,3,4,5,2,2,2,2]
const TrueArray = ['1','3','4','5','5']
const obj = []

 /***
  * const falseArray =v.map((val)=>{
    obj[val] =  obj[val]+1 || 1
})
const trueArray = c.map((val)=>{
    obj[val] = obj[val]+1 || 1
})
  
let temp =0

Notarray.map((val)=>{
    if(obj.indexOf(val) !== -1)return obj.push(val)
    obj.push([val,temp+=1])
})
console.log(obj)*/

const s= TrueArray.reduce((vr,tr)=>{
  vr[tr] =vr[tr]+1 || 1
  return vr
},{})
console.log(s)
