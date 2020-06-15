//23. Разработка приложения, выполняющего запрос к SQL-базе данных: 
// выполнение динамического SELECT-запроса.  

const sql = require('mssql')
let config = {user:'julia', password:'12345678',server:'USER-PK',database:'univer'}


let delAuditorium = (a, _cb)=>{
    const cb = _cb?_cb:(err,result)=>{console.log('default cb')};
    const ps = new sql.PreparedStatement();
    ps.input('a', sql.NChar(10));

    ps.prepare('delete AUDITORIUM where auditorium=@a', err=>{
        if (err) cb(err, null);
        else ps.execute({a:a}, (err, result)=>{
            if(err) cb(err, null);
            else cb(null, result);
        })
    })
}


let processing_result = (err, result)=>{
    if (err) console.log('err: ', err.code);
    else console.log('Успешное завершение: ', result.rowsAffected[0]);
}

sql.connect(config, err=>{
    if (err) console.log('Ошибка соединения с БД: ', err.code);
    else {
        console.log('Соединение с БД установлено');

        delAuditorium('322-1', processing_result);
    }
})