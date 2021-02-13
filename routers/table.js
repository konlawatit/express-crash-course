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
        console.log(commandSQL)
        let stack = []
        let commandSQL_array = commandSQL.slice(-1) !== ';' ? commandSQL.split(';') : commandSQL.substring(0, commandSQL.length - 1).split(';')
        commandSQL_array.forEach((sql, index) => {
            console.log("index: " + index)
            if (sql) {
                db.query(sql, (err, result) => {
                    if (err) {
                        res.status(400).json({
                            status: 'error',
                            error: err,
                        });
                    } else {
                        stack.push(result)
                        if (index === commandSQL_array.length - 1) { //ถ้าถึงคำสั่งสุดท้ายถึงจะ res
                            if (stack) {
                                res.status(200).json(stack)
                            } else {
                                return res.status(400).json({
                                    status: 'error',
                                    error: 'stack cannot be empty',
                                });
                            }
                        }
                    }
                })
            }
        })
    } catch (err) {
        // /console.log(err)
        res.status(404).send(err)
    }

})
module.exports = router;