const pri = (p)=>{
    const a = []
    for(let i =0;i<p;i++){
        let m = 0
        if(i>2 && i%2 ===0  ){

        }else{
 
            while(i>m ){
                if(i%m !==0 && a.indexOf(i) === -1) a.push(i)
              
                m++
            }
        }
    }
    console.log(a)
   
}
pri(100000)