const a = [1,2,3,4,5,6,7,8,9,10,11,12]

let page = 3
let m = 0

//const s = a.splice(0,3)
let z =  []
while(a.length >0){
  const s =   a.splice(0,11)

  z.push(s)

}
console.log(z)