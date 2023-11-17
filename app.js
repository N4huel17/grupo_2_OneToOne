const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/productDetail',(req,res) => res.sendFile(path.join(__dirname,'views','productDetail.html')))
app.get('/footer',(req,res) => res.sendFile(path.join(__dirname,'views','partials','footer.html')))
app.get('/productCart',(req,res) => res.sendFile(path.join(__dirname,'views','productCart.html')))
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))


app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))