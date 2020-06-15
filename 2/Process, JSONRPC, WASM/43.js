//Выполнение shell-команд (spawn, pipe)

// подразумевает, что необх вызыв оболочку, кот будет исполнятся
const spawn = require('child_process').spawn;
const dir = spawn('cmd.exe', [ '/Unicode', '/C', 'dir']);
//findstr - отыскивает строки во вх.потоке, кот соотв.нек.шаблону
// /с - ключ, все что сод. 43 - все такие строки надо показать
const findstr = spawn('findstr', ['/c:43']);

dir.stdout.setEncoding('utf16le');

//вых.поток dir поступит на вх.поток findstr
dir.stdout.pipe(findstr.stdin);

findstr.stdout.on('data', (data)=>{
    console.log('findstr stdout:\n', data.toString());
})
findstr.on('close', (code)=>{
    console.log('findstr close code: ', code);
})

// 2 out - можно вывести промежуточный результат
// посылаем в 2 источника (в конвейер и на вывод)
// получим 2 вывода как в этом примере