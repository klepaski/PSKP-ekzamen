// 33. Пакет Express. Основные принципы работы. 
// Обработка query-параметров GET-запроса. Пример (POSTMAN).

const app = require('express')();

//обработка query-параметров get-запросов

app.get('/', (req, res, next) => {

    console.log('get query params = ', req.query);

    if(req.query.x) console.log('x = ', req.query.x);
    else            console.log('x не задан');

    if(req.query.y) console.log('y = ', req.query.y);
    else            console.log('y не задан');

    res.send('get query params')
})

app.listen(3000);