//const pair = a => b => c => c(a)(b)
const obj = {one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9}
const pair = a =>b=>b[a]

console.log(pair('one')(obj))
/*const a = b=>v=>(n=>n*n)|1

console.log(a(3)(3)(false))*/