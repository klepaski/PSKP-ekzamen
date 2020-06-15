// 40. Пакет Express. Основные принципы работы. 
// Применение объекта Session для сохранение состояния. Пример (POSTMAN).

const app = require('express')();
const cookiesecret = '1234567890';
const session = require('express-session')(
    {
        resave: false,              //сохр, даже если нет изм
        saveUninitialized: false,   //сохр, даже если нет изм
        secret: cookiesecret        //если шифровать
    }
);

app.use(session);

app.get('/',(req,res,next)=> {

    if (!isFinite(req.session.mysesval)) req.session.mysesval = 0;
    else req.session.mysesval++;
    console.log('mysesval = ', req.session.mysesval);
    res.send(`mysesval = ${req.session.mysesval}`);
})

app.listen(3000)