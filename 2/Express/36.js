// 36. Пакет Express. Основные принципы работы. 
// Обработка json-данных POST-запроса. Пример (POSTMAN).

const app = require('express')();
const bodyparser = require('body-parser');

app.use(bodyparser.json())

app.post('/json', (req, res, next)=>{
    if(req.body) {
        if (req.accepts('json')) 
            res.type('json').send(JSON.stringify(Object.assign({src:'server'}, req.body)));
        else  res.type('txt').send('server')
    }

    else res.status(400).type('txt').send('no bodyparser');
})

app.listen(3000);


/*
{
	"jsonrpc": "2.0",
	"method": "sum",
	"id": 1,
	"params": [36,4,7,8,19,-3]
}
*/