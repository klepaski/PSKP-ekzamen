// Пакет Express. Основные принципы работы. Статические файлы. Пример.

const express = require('express');
const app = express();

app.use('/static', express.static(__dirname+'/public/'));

app.use((req, res, next)=>{console.log('handler02'); next();});

app.listen(3000);

//запрос - http://localhost:3000/static/DKnuth.jpg