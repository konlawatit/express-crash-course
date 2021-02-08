const mysql = require('mysql');
const db = mysql.createConnection({   // config ค่าการเชื่อมต่อฐานข้อมูล
    host     : '127.0.0.1', 
    user     : 'root',
    password : '1234',
    database : 'member'
})
db.connect() // เชื่อมต่อฐานข้อมูล

module.exports = db;
