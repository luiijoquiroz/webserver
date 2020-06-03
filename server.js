const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
    res.render('home',{
       nombre: 'luis quiroz', 
    });
});

app.get('/about', (req,res) =>{
    res.render('about');
})
// app.get('/data', (req,res)=>{
//      res.send('Hola data');
// });

app.listen(port, ()=>{
    console.log(`Listening in the port ${port}`)
});