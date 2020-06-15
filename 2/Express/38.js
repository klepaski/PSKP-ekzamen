// 38. Пакет Express. Основные принципы работы. 
// download/attachment файлы GET-запроса. Пример (браузер).

const fs = require('fs');
const app = require('express')();

app.get('/download', (req,res,next)=>{
    console.log('download');
    res.download('./DKnuth.jpg', 'DKnuth.jpg');
})

app.get('/attachment', (req, res, next)=>{
    console.log('attachment');
    res.attachment('./DKnuth.jpg');             //добавить заголовок
    let rs = fs.ReadStream('./DKnuth.jpg');
    rs.pipe(res)
})

app.listen(3000)