const a  = [1, 2, 3, 4, 1, 2, 1,5,5,5,5,1]

let v = [0,0]
a.map((val)=>{

    let ms =  a.filter((vale)=>val === vale)

    if( v[0] < ms.length ){
        v[0] = ms.length
        v[1] = val    
    }   
})
