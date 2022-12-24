const array = []
for(let i= 0;i< 20;i++){
    const reverse = i.toString().split('').reverse().join('')

    if(Number(reverse) === i)array.push(i)
}

console.log(array)