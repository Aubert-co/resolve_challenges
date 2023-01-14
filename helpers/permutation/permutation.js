/*let v = []

const func = (arr,k)=>{
    var len = arr.length
    
    if(k===len){
       
       return 
    }
    for(let i=k;i<len;i++){
        
        arr = TrocaCaractere(arr,k,i)
        func(arr,k+1)
        v.push(arr)
    }
 
}
function TrocaCaractere(str, p1, p2) //ela recebe três parâmetros
{ //str: o vetor de dados; p1: indice do dado1; p2: indice do dado2
    var tmp = str[p1];
    str[p1] = str[p2];
    str[p2] = tmp;

    return str;
}
func([4,1,4,2],0)*/
function permutator(inputArr) {
    var results = [];
    const ma = new Map()
   const string = inputArr.split('')
    function permute(arr, memo) {
      
      var cur, memo = memo || [];
  
      for (var i = 0; i < arr.length; i++) {
        
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur).join(''));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
     
      }
  
      return results
    }
  
 return   permute(string)
   /* .map((val)=>{
        ma.set(val)
    })
    return [...ma.keys()]*/
  }
console.log(permutator('123'))