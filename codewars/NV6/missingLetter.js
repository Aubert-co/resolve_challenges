var alf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLocaleLowerCase().split('')


const arr = ["O","Q","R","S"] 

const findL = (a)=>{
const start = a[0].toLocaleLowerCase()

const findValue =alf.indexOf(start)

const newArray = alf.slice(findValue,a.length+findValue+1)
return newArray
}

findL(arr)
/**
 * 
 * 7 
 * 8
 * 9    
 */