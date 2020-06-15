// 35. Пакет Express. Основные принципы работы. 
// Обработка body-параметров POST-запроса. Пример (POSTMAN).

const app = require('express')();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}))

app.post('/form', (req, res, next)=>{
    if(req.body) {
        console.log('req.body.name = ', req.body.name || 'нет параметров');
        console.log('req.body.bday = ', req.body.bday || 'нет параметров');
        console.log('req.body.press = ', req.body.press || 'нет параметров');
    
        res.send('post body params');
    }

    else res.status(400).send('no bodyparser');
})

app.listen(3000);