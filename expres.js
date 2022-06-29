const express= require('express')
const expres=express();
expres.get('/getUsers', function(req,res){
res.send('<h1>hello world</h1>')
})
expres.listen(7000)