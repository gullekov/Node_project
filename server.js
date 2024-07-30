const http = require('http');
const fs = require('fs');
const url = require('url');

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data);




const server = http.createServer((req, res)=>{
    const pathName = req.url;
    if( pathName === '/' || pathName === '/overview'){
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end(tempOverview);
    }else if(pathName === '/product'){
        res.end("this is product")
    }else if(pathName === '/api'){
        // res.end("API")
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data)=>{
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(`${data}`)
        });
    }
    else{
        res.writeHead(404, {'Content-type': 'text/html', 'my-own-header': 'hello-world'})
        res.end("Page not found")
    }
})

server.listen(8000, ()=>{
    console.log("start 8000 port")
})


