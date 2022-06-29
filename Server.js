console.log('Hello Students🎉')
const { error } = require('console');
const fs=require('fs')

fs.writeFileSync('data.txt' ,' hey mates ,nodejs is awesome');
console.log('fs');
const data= fs.readFileSync('data.txt','utf-8')
console.log('data');

fs.appendFileSync('data.txt','Author is NODEjs' )



//fs.unlinkSync('data.txt')

fs.writeFile('datas.txt', 'hey mates its a error',(error)=>{
   console.log(error)
})


fs.readFile('datas.txt', 'utf-8',(err,data)=>{
    console.log(data,err);
})




fs.unlink('datas.txt',()=>{

})