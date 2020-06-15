//24. Разработка приложения, выполняющего запрос к SQL-базе данных:
//  выполнение динамического INSERT-запроса. Пример.  

const sql = require('mssql')
let config = {user:'julia', password:'12345678',server:'USER-PK',database:'univer',
              pool: {max: 10, min: 0, softIdleTimeoutMillis:5000, idleTimeoutMillis:10000}};

let insAuditorium = (a, an, ac, at, _cb)=>{
    const cb = _cb?_cb:(err,result)=>{console.log('default cb')};
    const ps = new sql.PreparedStatement();
    ps.input('a', sql.NChar(10));
    ps.input('an', sql.NVarChar);
    ps.input('ac', sql.Int);
    ps.input('at', sql.NChar(10));

    ps.prepare('insert into AUDITORIUM values (@a, @an, @ac, @at)', err=>{
        if (err) cb(err, null);
        else ps.execute({a:a, an:an, ac:ac, at:at}, (err, result)=>{
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

        insAuditorium('322-1', '322-1 LeverX', 24, 'ЛБ-СК', (err, result)=>{});
    }
})