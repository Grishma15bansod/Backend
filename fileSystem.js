console.log('Hello Students 🎉'); 
// REPL--> read, eval, print, loop
// Data type: Buffer
// loop, conditions, functions, objects ✅
// document or window ❌

// file system
// CRUD (sync, async)

// #include stdio.h c
// #include iostream.h c++
// import map as mp python

const fs= require('fs');  //include module in node js file system 
// CRUD  (data(english) encode (UTF-8) <--- decode (buffer))

// Sync 
// create file
// fs.writeFileSync( 'data.txt', 'Hey Mates, Node js is awesome 🔥' );
// // reading a file
// const data= fs.readFileSync('data.txt','utf8');
// console.log(data);
// // updating
// fs.appendFileSync('data.txt','Author is Node js');
// // deleting
// fs.unlinkSync('data.txt');

// Async
fs.writeFile( 'datas.txt','Hey mates, its Async here' ,(error)=>{
    console.log(error)
} )

fs.readFile('datas.txt','utf-8',(err,data)=>{
    console.log(data)
})
fs.appendFile('datas.txt','\n Machine-learning is also awesome',()=>{

}) 
// fs.unlink('datas.txt',()=>{

// })
// 1. Awesome 2.Okay 3.Needs to be good

