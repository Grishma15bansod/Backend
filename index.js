const http = require('http')

const server=
http.createServer(function(req,res){
    res.write("<h1>this is first asse1 of nodejs</h1>")
    res.write(JSON.stringify({NAME:"grishma"}))
    const jsonData={name:'grishu',age:'23'}
    res.write(JSON.stringify(jsonData))
    res.end();
})


server.listen(5000)


