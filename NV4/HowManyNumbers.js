const arr = ['123','456','555','12','1','222']

//console.log(arr[0].toString().length)
/*const findAll = (sum,leng)=>{
    const vvv = []
    arr.map((val)=>{
        const len = val.toString().length
        if(len === leng){
            const value = val.split('').reduce((v,t)=>{
                const vs = Number(v)
                const ts = Number(t)
                return vs+ts
            })
            if(value === sum)vvv.push(val)
        }
    })
    return vvv
}
console.log(count(6,3))
*/
let v = 6
const len =3
const a = []
const cccc = (vs,mem)=>{
    const m = []
    while(vs > 0){
        if(vs + mem === len)m.push(vs,mem)
        vs-=1
   
    }
    return m
}
for(let i=1;i<10;i++){
    a.push(cccc(10,i))
}
console.log(a)