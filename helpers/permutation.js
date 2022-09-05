
const func = (arr,k)=>{
    var len = arr.length
    const v = []
    if(k===len){
       v.push(arr)
        console.log(v)
       return
    }
    for(let i=k;i<len;i++){
        arr = TrocaCaractere(arr,k,i)
        func(arr,k+1)
      
    }
    return v
}
function TrocaCaractere(str, p1, p2) //ela recebe três parâmetros
{ //str: o vetor de dados; p1: indice do dado1; p2: indice do dado2
    var tmp = str[p1];
    str[p1] = str[p2];
    str[p2] = tmp;

    return str;
}
console.log(func([1,2,3,4],0))

