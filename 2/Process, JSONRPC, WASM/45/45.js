//Вып-ние js-скриптов в отдельном процессе (fork, send, worker)

const child =  require('child_process');
const fp = child.fork('45-02.js');

const f = ()=>{console.log('hello 1');}
setInterval(f, 3000);

let x = 0;
const s = ()=>{fp.send(`hello 1-1: ' ${++x}`)};
setInterval(s, 6000);
