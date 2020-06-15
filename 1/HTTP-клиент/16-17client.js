//отправка POST-запроса с json-сообщением


var http =require('http');
let parms=JSON.stringify(
    {
        "__comment": "Запрос.Лабораторная работа 8/10",
        "x": 1,
        "y": 2,
        "s": "Сообщение",
        "m": ["a","b","c","d"],
        "o": {"surname":"Чистякова","name":"Юлия"}
    }
);

let options= {
    host: 'localhost',
    path: `/JSON`,
    port: 5000,
    method:'POST',
    headers:{'content-type':'application/json', 'accept':'application/json'}
}
const req = http.request(options,(res)=> {
    console.log('statusCode: ',res.statusCode);
    let data = '';
    res.on('data',(chunk) => { data+=chunk.toString('utf-8') });
    res.on('end',()=>{console.log(JSON.parse(data))}); 
});
req.on('error', (e)=> {console.log('http.request: error:', e.message);});
req.write(parms);
req.end();