//открыть fetch.html + xmlhttprequest.html + браузер
//С: извлеч д-х из запроса + формир ответа
//тестир с пом AJAX

const http = require('http');
const fs   = require('fs').promises;

const requestHandler = async (req, res) => {
	if (req.url === '/xmlhttprequest') {
		let html = await fs.readFile('xmlhttprequest.html');
		res.end(html);
	}

	else if (req.url === '/fetch') {
		let html = await fs.readFile('fetch.html');
		res.end(html);
    }

    else if (req.url === '/api/fac') {
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.end('Faculty of Information Technology');
    }
};

http.createServer(requestHandler).listen(3000);