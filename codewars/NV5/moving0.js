const arr = [0,0,'a',0,1,2,3,4,5,'7',7]

const mov = (a)=>{
    const copy = [...a]
    var count  = 0
    const zeros = arr.map((val)=>{
        if(val === 0){
            count++
            return ''
        }
        return val
    }).filter((val)=>val!=='')
    zeros.fill(0,zeros.length+1,count)
    console.log(zeros)
}

mov(arr)