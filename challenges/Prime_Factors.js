/*Write a function that generates factors for a given number.

The function takes an integer on the standard input and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.

Examples
1  ==>  []
3  ==>  [3]
8  ==>  [2, 2, 2]
9  ==>  [3, 3]
12 ==>  [2, 2, 3]*/

const Prime_Factors = (n)=>{
    const array = []
    
    for(let i = 1 ;i <n+1;i++){
        if(n%i === 0  && i !== 1){
            array.push(i)
            n = n/i
            i =1
        }
    }
    return array
}
Prime_Factors(36)

//done