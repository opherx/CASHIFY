 const express = require ('express');


 const app = express();

 app.set('view engine', 'ejs');
 app.use(express.static('public'));

 app.get('/', (req,res)=>{
   res.render('home');
 })

 app.get('/Contact', (req,res)=>{
   res.render('contact');
 })

 app.get('/signin', (req,res)=>{
   res.render('signin');
 })

 app.get('/signup', (req,res)=>{
   res.render('signup');
 })

 app.get('/about', (req,res)=>{
   res.render('about');
 })

 app.get('/tutorial', (req,res)=>{
   res.render('tutorial');
 })

 app.listen(process.env.PORT || 3000, ()=>{
   console.log("server is running on port 3000");
 })
