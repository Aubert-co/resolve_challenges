const v = [[2,3,4,5],[2,1,3,4,5],[2,3,4,5]]
var value =0
for(let i =0;i<v.length;i++){

    v[i].map((val,ind)=>{
        if(v.indexOf(val) !== i)value =val
    })
}
console.log(value)