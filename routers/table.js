const express = require('express');
const router = express.Router();

const db = require('../mysql');

router.post('/createTable', (req, res) => {
    try {
        // let sql = req.body.sql
        // db.query(sql, (err, result) => {
        //     if (err) res.send(err)
        //     console.log(result)
        //     res.send(result)
        // })
        let commandSQL = req.body.sql
        let stack = []
        console.log(commandSQL.slice(-1))
        let commandSQL_array = commandSQL.slice(-1) !== ';' ? commandSQL.split(';') : commandSQL.substring(0,commandSQL.length-1).split(';')
        commandSQL_array.forEach((sql,index) => {
            console.log(index)
            if(sql) {
                db.query(sql, (err, result) => {
                    if (err) res.send(err)
                    stack.push(result)
                    if (index === commandSQL_array.length-1) { //ถ้าถึงคำสั่งสุดท้ายถึงจะ res
                        res.send(stack)
                    }
                })
            }
        })
        //res.send('pass')


    } catch (err) {
        console.log(err)
        res.send("err")
    }

})
module.exports = router;