//пересылка файла на сервер в POST-запроса (upload)

var http =require('http');
var fs= require('fs');

let bound='CJA-CJA' //инкапсуляция всех частей составной сущности
let body=`--${bound}\r\n`;
body+='Content-Disposition:form-data; name="file"; Filename="MyFile.txt"\r\n';
body+='Content-Type:text/plain\r\n\r\n';
body+=fs.readFileSync('MyFile.txt');    //данные из файла
body+=`\r\n--${bound}--\r\n`;


let options= {
    host: 'localhost',
    path: '/UploadFile',
    port: 5000,
    method:'POST',
    headers: {'Content-Type':'multipart/form-data; boundary='+bound}
}

const req = http.request(options,(res)=> {
    let data = '';
    res.on('data',(chunk) => { data+=chunk.toString('utf-8')} );
    res.on('end',()=>{ console.log(data);}); 
});
req.on('error', (e)=> {console.log('error:', e.message);});
req.end(body);