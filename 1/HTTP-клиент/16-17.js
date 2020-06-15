var http = require('http');
var url = require('url');


let http_handler=(req,res)=>
{
    if(req.method=='POST')
    {
		if(url.parse(req.url).pathname=== '/JSON')
		{
			let result='';
			let body='';
			req.on('data',chunk=>{body+=chunk.toString();});
			req.on('end',()=>{
				let os = JSON.parse(body);
				console.log(os);
				result={
					__comment:"Ответ.Лабораторная работа 8/10",
					x_plus_y:os.x+os.y,
					Concatination_s_o:os.s+'.'+os.o.surname+","+os.o.name,
					Length_m:os.m.length
				};
				res.writeHead(200,{'Content-Type': 'application/json'});
				console.log(result);
				res.end(JSON.stringify(result));
			});
			}
    }
}
http.createServer(function (req, res){http_handler(req,res);
}).listen(5000);