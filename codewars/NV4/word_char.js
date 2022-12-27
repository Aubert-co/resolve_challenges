const s = "You can try, but you'll never catch me.\nBazinga!"

const rep = s.replace('\n','*')

const datas = s.split('').filter((val)=>val === '\n')

//console.log(datas.length)
//console.log(rep.split('*').join('').split(' '))

const v =s.replace(/[.*+?^${}()|[\]\\!,\n]/g,' ')
var count = 0
v.split(' ').map((val)=>{
    count+=val.length
})
console.log(v.split(' ').filter((val)=>val!=='').length)