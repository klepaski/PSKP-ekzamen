// Пакет Express. Основные принципы работы. Middleware-код. Пример.

const express = require("express");     //npm install express
const app = express();

app.use((req,res,next) => {             //middleware
    console.log('handler-01-forward');
    next();
    console.log('handler-01-back');
})

app.use((req,res,next) => {             //middleware
    console.log('handler-02-forward');
    next();
    console.log('handler-02-back');
})

app.use((req,res,next) => {             //middleware
    console.log('handler-03-forward');
    res.send("<h2> handler 03 </h2>");
    console.log('handler-03-back');
})

var server = app.listen(3000);

/* Middleware - пром. ПО;
для http-сервера - нек. конвейер обработки запроса
эти ф-и имеют доступ к req, res и к след. ф-и обработки в цикле "запрос-ответ"

Конвейер образ.петлю = движется пока не делаем некст, а потом разворачивается и идет обратно.
*/