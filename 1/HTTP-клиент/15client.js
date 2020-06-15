var http =require('http');
var query= require('querystring');

let parms=query.stringify({x:3,y:4, s:"fff"});

let options= {
    host: 'localhost',
    path: `/threepar`,
    port: 5000,
    method:'POST'
}
const req = http.request(options,(res)=> {
    res.on('data',(data) => {console.log(data.toString('utf-8'))});
    res.on('end',()=>{ console.log('end')}); 
});
req.on('error', (e)=> {console.log('error:', e.message);});
req.write(parms);
req.end();