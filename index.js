const express=require('express');
const api = require('novelcovid');
const {engine} = require('express-handlebars');

//api.all().then(console.log)
api.countries().then(console.log);
const app=express();

app.set('view engine', 'hbs');
app.engine('hbs', engine({ 
    extname: 'hbs',
     defaultLayout: "home", 
     layoutsDir: __dirname+'/views/'
}));



app.get('/countries',(req,res)=>{
    api.countries().then((response)=>{
        res.render('home',{info:response});
    })    
})
app.listen(4000,()=>{
    console.log("App is listening");
})