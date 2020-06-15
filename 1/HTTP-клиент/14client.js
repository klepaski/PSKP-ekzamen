var http =require('http');
var query= require('querystring');

//let parms=query.stringify({x:3,y:4});
let parms=query.stringify({x:parseInt(process.argv[2]),
                            y:parseInt(process.argv[3])});


let options= {
    host: 'localhost',
    path: `/twopar?${parms}`,
    port: 5000,
    method:'GET'
}

const req = http.request(options,(res)=> {
    res.on('data',(data) => {console.log(data.toString())});
    res.on('end',()=>{ console.log('end')}); 
});
req.on('error', (e)=> {console.log('http.request: error:', e.message);});
req.end();