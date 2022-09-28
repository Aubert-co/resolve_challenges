const a = [1,2,2]

 Array.prototype.Tst = (val,cb)=>{
    return cb(val*val)
}

console.log(a.Tst(2,(value)=>{
    return value
}))