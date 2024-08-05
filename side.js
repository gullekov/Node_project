const http = require('http')
const fs = require('fs');
const path = require('path')


const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'});

    let url = req.url;

    if(url === '/'){
      
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data)=>{
            if(err) throw err;
            res.end(data);
        });
    }else if(url === '/services'){

        fs.readFile(path.join(__dirname, 'services.html'), 'utf-8', (err, data)=>{
            if(err) throw err;
            res.end(data);
        });

    }else if(url === '/contact'){
        res.writeHead(200, {'Content-type': 'text/html'})
        fs.readFile(path.join(__dirname, 'contact.html'), 'utf-8', (err, data)=>{
            if(err) throw err;
            res.end(data);
        });
    }else{
        
        res.end();
    }


});


server.listen(2000, '127.0.0.1', ()=>{
    console.log("2000 port running")
})