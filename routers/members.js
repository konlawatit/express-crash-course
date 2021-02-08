const express = require('express');
const router = express.Router();

const db = require('../mysql');

router.get('/', async (req, res) => {
    let sql = 'SELECT * FROM member.user_member'
    let query = await db.query(sql,(err,results) => {
        if(err) throw err  // ดัก error
        console.log(results);
        res.send(results)
    })
})


module.exports = router;