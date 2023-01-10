var persons = [
    {name: 'Peter', profession: 'teacher', age: 20, maritalStatus: 'married'},
    {name: 'Michael', profession: 'teacher', age: 50, maritalStatus: 'single'},
    {name: 'Peter', profession: 'teacher', age: 20, maritalStatus: 'married'},
    {name: 'Anna', profession: 'scientific', age: 20, maritalStatus: 'married'},
    {name: 'Rose', profession: 'scientific', age: 50, maritalStatus: 'married'},
    {name: 'Anna', profession: 'scientific', age: 20, maritalStatus: 'single'},
    {name: 'Anna', profession: 'politician', age: 50, maritalStatus: 'married'}
  ];
  

class Sql {
    constructor(){
       this.selectValue = null
       this.fromValue = []
       this.final =[]
    }
    select(cond){
        this.selectValue = cond
        return this
    }
    from(value){
        this.fromValue.push(...value)
        return this
    }
    where(cond){
       const value =  this.datas.filter((val)=>{
            if(val[cond] === cond)return val
        })
        this.final.push(value)
    }
    execute(){
       const keys =  Object.keys(this.fromValue[0])
        
     const d =  this.fromValue.map((val)=>{
            console.log(val[this.selectValue])
       })
    
    }
}
const name = (p)=>p.profession  
const s = new Sql().select(name).from(persons).execute()

