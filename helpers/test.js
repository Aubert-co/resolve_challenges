const arry =[]
let fls =true
let t =[]
for(let i =1;i<560;i++){
    t.push(i)

    if(t.length >=4 ){
        if(fls=== false){
            let sorts =t.sort((a,b)=>-1)
            arry.push(sorts)
            t=[]
            fls = true
            
        }else{
        arry.push(t)
        t=[]
        fls =false
        }
    }
    /*if(t.length >=3  && i%2 ===1){
        let sorts =t.sort((a,b)=>-1)
        arry.push(sorts)
        t=[]
  
    }*/
    
}
arry.map((val,ind)=>{
    if(val.indexOf(542)!==-1){
        console.log(val , ind)
    }

})