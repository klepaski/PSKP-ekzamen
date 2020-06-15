// 37. Пакет Express. Основные принципы работы. 
// Обработка xml-данных POST-запроса. Пример (POSTMAN).

const app = require('express')();
const xmlparser = require('express-xml-bodyparser');
const xmlbuilder = require('xmlbuilder');

app.use(xmlparser());

app.post('/xml', (req, res, next)=>{
    
    console.log('req.body = ', req.body);

    let x = req.body.calculate.x[0].$.value;
    let y = req.body.calculate.y[0].$.value;

    let result = xmlbuilder.create('result').att('server', '26-09');
        result.ele('sum', {value:x+y});

    console.log('result = \n', result.toString({pretty:true}));
    res.send(result.toString({pretty:true}))
})

app.listen(3000);

/*
<?xml version="1.0"?>
	<calculate>
		<x value="23"></x>
		<y value="54"></y>
	</calculate>

*/