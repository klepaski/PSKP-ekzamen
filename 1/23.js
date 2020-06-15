//23.	Применение функции pipe для обработки данных (файла)
//  файловой системы  и записи в http-ответ. Пример.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if(req.method == 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        let rs = fs.createReadStream('./22.txt');
        rs.pipe(res);
    }
}).listen(3000);