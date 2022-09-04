const a = [1,5,3,4,2,10,10,101,101]

const vls = (a,n)=>{
    const b = []

    /*a.map((val)=>{
        const sum = val -n
        const ind = a.indexOf(sum)
        if(ind !== -1)b.push([val,a[ind]])
    })
    return b*/
    const aa = a.map((val)=>{
        const sum = val -n
        const ind = a.find((vals)=>vals === sum)
        if(ind)b.push([val,ind])
    })
    
    return b
}
console.log(vls(a,2))