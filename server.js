const http = require('http');
const fs = require('fs');
const url = require('url');


const replaceTemplate = (temp, product)=>{
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.producatName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.desctioption);
    output = output.replace(/{%ID%}/g, product.id);



    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, product.not_organic);
    return output;
}
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data);




const server = http.createServer((req, res)=>{
    const pathName = req.url;
    // OVERVIEW
    if( pathName === '/' || pathName === '/overview'){
        res.writeHead(200, {'Content-type': 'text/html'});
        
        const cardsHtml = dataObj.map(el=> replaceTemplate(tempCard, el)).join('')
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output)
 



        res.end(tempOverview);

        // PRODUCT
    }else if(pathName === '/product'){
        res.end("this is product")

        // API
    }else if(pathName === '/api'){
        // res.end("API")
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data)=>{
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(`${data}`)
        });
    } 
    // NOT FOUND
    else{
        res.writeHead(404, {'Content-type': 'text/html', 'my-own-header': 'hello-world'})
        res.end("Page not found")
    }
})

server.listen(8000, ()=>{
    console.log("start 8000 port")
})


