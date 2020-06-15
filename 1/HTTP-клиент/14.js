//сервер для клиента
//GET запрос с query-параметрами


var http = require('http');
var url = require('url');

let http_handler=(req,res)=>
{
	if(req.method=='GET'){
		
		if(url.parse(req.url).pathname === '/twopar'){

            let q = url.parse(req.url,true).query;
            res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
            
            let result = `x+y=${+q['x']+(+q['y'])}`
			console.log(result);
    		res.end(result);
        }
        else console.log('error!');
    }
}
var server=http.createServer(function (req, res){
    http_handler(req,res);
}).listen(5000);