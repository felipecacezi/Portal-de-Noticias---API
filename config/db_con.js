const mysql = require('mysql')

const connMySQL = ()=>{
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'cursonode'
    })
}

module.exports = ()=>{
    return connMySQL;
}