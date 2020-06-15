//Запуск процесса ОС(exec), работа со стандарт.потоками ввода/вывода

const exec = require('child_process').exec;
//exec - делает тож самое что spawn, но не надо указывать оболочку
// запись получается покороче (записана колбэк ф-ция)
//cmd работает в 16битной кодировке, а utf8 в 8битной
//есть русский язык - не все хрошо...

/*
const dir = exec('dir', {encoding:'utf8'}, (error, stdout, stderr)=>{
    console.log(stdout);
})*/


//--------вывод + ввод ----------
const fromnode = exec('fromnod.exe', {cwd:'D:\\3\\ПСКП\\экзамен\\1_PSKP\\задачи\\fromnod\\fromnod\\bin\\Debug'}, (error, stdout, stderr)=>{
    if (stderr){
        console.log('stderr: ', stderr);
    }
    else{
        console.log('stdout: ', stdout);
    }
});
fromnode.stdin.write('hello hello hello from node');
fromnode.stdin.end();