// 42. Пакет Express. Основные принципы работы. 
// Основные принципы работы. Переадресация. Пример(POSTMAN).

const app = require('express')();

app.get('/A', (req,res,next)=>{
    console.log('GET /A');
    res.redirect('/B');
})

app.get('/B', (req,res,next)=>{
    console.log('GET /B');
    res.type('html').send('GET /B');
})

app.post('/A', (req,res,next)=>{
    console.log('POST /A');
    res.redirect('/B');
})

app.post('/B', (req,res,next)=>
{
    console.log('POST /B');
    res.type('html').send('POST /B');
})

app.post('/C', (req,res,next)=>{
    console.log('POST /C');
    res.redirect(308, '/B');
});

app.listen(3000)