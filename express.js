const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    // res.send("hi everyboldy")
    res.sendFile('./views/index.html', {root:__dirname})
})
app.get('/about', (req, res)=>{
    // res.send("<h1>HELLOO ABOUT PAGEEE</h1>")
    res.sendFile('./views/about.html', {root:__dirname})
})
// redirects
    app.get('/about-us', (req, res)=>{
        res.redirect('/about')
    })
app.listen(2001, ()=>{
    console.log('port ilsedi')
})