const ar = [1,2,3]

const coins=(n)=>{
  
    let array =[]
    ar.filter((val)=>{
        let img = []
        if(n % val === 0){
            let value = n/val
            let lenght = n/val
            if(val === 1 )value = 1
            img = new Array(lenght).fill(value)
            array.push(img)
        }
       
    })
    ar.map((val)=>{
        let count = n
        const img = []
        const modul = n%val
        const arIndex = ar.indexOf(modul)
        while(count > 0 ){
            if(arIndex !== -1)img.push(modul,val)
            count -=val
        }
        
        
        
        array.push(img)
    })
    console.log(array)
}
coins(4)