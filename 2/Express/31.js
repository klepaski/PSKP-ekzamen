// Пакет Express. Основные принципы работы. Маршрутизация. Пример

const app = require("express")();     //npm install express
const router01 = require('express').Router();
const router02 = require('express').Router();
//https://expressjs.com/ru/guide/routing.html

router01.get('/1', (req,res)=>{res.send('/1');})
router01.get('/2', (req,res)=>{res.send('/2');})
router01.post('/3', (req,res)=>{res.send('/3');})

app.use('/X', router01);    // монтировать маршрут

router02.get('/a', (req,res)=>{res.send('/a');})
router02.get('/b', (req,res)=>{res.send('/b');})
router02.put('/b', (req,res)=>{res.send('/b');})

app.use('/Y', router02); // монтировать маршрут
app.use('/X', router02); // монтировать маршрут

app.listen(3000)

//запрос -   http://localhost:3000/X/1

