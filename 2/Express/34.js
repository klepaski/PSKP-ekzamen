// 34. Пакет Express. Основные принципы работы. 
// Обработка uri-параметров запроса. Пример (POSTMAN).

const app = require('express')();

//обработка uri-параметров get-запросов

app.get('/api/:x/:y', (req, res, next) => {

    console.log('uri params = ', req.params);
    console.log('uri params, x = ', req.params.x);
    console.log('uri params, y = ', req.params.y);

    res.send('get uri params')
})

app.listen(3000);