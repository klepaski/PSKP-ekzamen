//23. Разработка приложения, выполняющего запрос к SQL-базе данных: 
// выполнение динамического SELECT-запроса.  

const sql = require('mssql')
let config = {user:'julia', password:'12345678',server:'USER-PK',database:'univer',
              pool: {max: 10, min: 0, softIdleTimeoutMillis:5000, idleTimeoutMillis:10000}};


let updAuditorium = (a, an, _cb)=>{
    const cb = _cb?_cb:(err,result)=>{console.log('default cb')};
    const ps = new sql.PreparedStatement();
    ps.input('a', sql.NChar(10));
    ps.input('an', sql.NVarChar);

    ps.prepare('update AUDITORIUM set auditorium_name=@an '
    + 'where auditorium=@a', err=>{
        if (err) cb(err, null);
        else ps.execute({a:a, an:an}, (err, result)=>{
            if(err) cb(err, null);
            else cb(null, result);
        })
    })
}

let processing_result = (err, result)=>{
    if (err) console.log('err: ', err);
    else console.log('Успешное завершение: ', result.rowsAffected[0]);
    process.exit(0)
}

sql.connect(config, err=>{
    if (err) console.log('Ошибка соединения с БД: ', err.code);
    else {
        console.log('Соединение с БД установлено');

        updAuditorium('313-1','iTechArt', processing_result)
    }
})