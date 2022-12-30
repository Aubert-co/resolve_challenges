const a = [3,1,2,10,1]

for(let i = 0;i<a.length;i++){

    if(i ===0){
        a[i] = a[i]
    }else{
        a[i] =a[i]+ a[i-1]
    }
}
console.log(a)