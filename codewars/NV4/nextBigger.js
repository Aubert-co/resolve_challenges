/*function permutator(inputArr) {
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
  
    permute(string)
    .map((val)=>{
        ma.set(val)
    })
    return [...ma.keys()]
  }

console.log(permutator('trebua'))*/

/*const fns = (t)=>{
  const array = []

  for(let i =1;i<t.length;i++){
    var m = t
    const ant = m[i-1]
    const is = m[i]
  
    if(ant < is  ){
      const tmp  = m[i-1]
      m[i-1] = m[i]
      m[i] = tmp
      array.push(m)
      m = t
    }
    
  }
  console.log(array)
}
fns([2,0,1,7])*/
const ab  = [5,1,3]

/*const func = (b)=>{
  const a = b.toString().split('')
  const array = [...a].sort()
  var maior = array[array.length-1]
  var index = a.indexOf(maior)
  if(index === 0){
    maior = array[array.length-2]
    index = a.lastIndexOf(maior)  
    console.log('here')
  }
  const ant = a[index-1]
  a[index-1] = a[index]
  a[index] = ant
  return Number(a.join(''))
}
console.log(func(8277))*/

const bb =(bs)=>{
  const a =bs.toString().split('')
  const num = Number(bs)
  let arr =num
  const values =[]
  for(let i=1;i<a.length;i++){
    const b = [...a]

    const tmp =b[i-1]
    b[i-1] =b[i]
    b[i] =tmp

    const num2 =Number(b.join(''))
   
    if(num2 > num){
      arr = num2
      values.push([num2-num,num2])
    }
  }

  const sorts=values.sort()
  console.log(values)
  if(num === arr)return -1
  return sorts[0][1]
}
console.log(bb( 8472911))
