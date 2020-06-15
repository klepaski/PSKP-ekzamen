const child =  require('child_process');

const f = ()=>{console.log('hello 2');}
setInterval(f, 6000);

process.on('message', (msg)=>{
    console.log(msg);
})