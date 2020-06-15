//23. Разработка приложения, выполняющего запрос к SQL-базе данных: 
// выполнение динамического SELECT-запроса.  

const sql = require('mssql')
let config = {user:'julia', password:'12345678',server:'USER-PK',database:'univer'}


let dbreq04 = (mincap, maxcap, cb)=>{
    const ps = new sql.PreparedStatement();
    ps.input('mincap', sql.Int);
    ps.input('maxcap', sql.Int);
    ps.prepare('select auditorium_name, auditorium_capacity '
        + 'from AUDITORIUM where auditorium_capacity between @mincap AND @maxcap',
        err=>{
            if (err) cb(err,null);
            else ps.execute({mincap: mincap, maxcap: maxcap}, cb);
        })
}

let processing_result = (err, result)=>{
    if (err) console.log('err: ', err.code);
    else {
        console.log('Количество строк: ', result.rowsAffected[0]);
        for (let i=0; i<result.rowsAffected[0]; i++){
            let str = '--';
            for (key in result.recordset[i]){
                str += `${key} = ${result.recordset[i][key]}  `;
            }
            console.log(str);
        }
    }
}

sql.connect(config, err=>{
    if (err) console.log('Ошибка соединения с БД: ', err.code);
    else {
        console.log('Соединение с БД установлено');

        dbreq04(40,70, (err, result)=>processing_result(err, result));
        dbreq04(10,40, (err, result)=>processing_result(err, result));
        dbreq04(70,100, (err, result)=>processing_result(err, result));
    }
})