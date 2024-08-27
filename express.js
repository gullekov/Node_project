const { renderFile } = require('ejs');
const express = require('express');
const app = express();

app.set('view engine', 'ejs')


app.listen(2001, ()=>{
    console.log('port ilsedi')
})
app.get('/', (req,res)=>{
    // res.send("hi everyboldy")
    // res.sendFile('./views/index.html', {root:__dirname})
    res.render('index', {title: 'Home'});
})
app.get('/about', (req, res)=>{
    // res.send("<h1>HELLOO ABOUT PAGEEE</h1>")
    // res.sendFile('./views/about.html', {root:__dirname})
    res.render('about', {title: 'About'})
   
})

app.get('/blogs/create', (req, res)=>{
    res.render('create', {title: 'Create'})
    res.status(200)
    
})

app.get('/404', (req, res)=>{
    res.render('404', {title: '404'})
    res.status(200)
    
})


app.use((req, res)=>{
    res.status(404).render('404', {title: '404'})
})

