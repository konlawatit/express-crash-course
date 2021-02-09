const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');

const db = require('../mysql');

router.get('/', async (req, res) => {
    let sql = 'SELECT * FROM member.user_member'
    let query = await db.query(sql, (err, results) => {
        if (err) throw err // ดัก error
        console.log(results);
        res.send(results)
    })
})

router.post('/login', async (req, res) => {
    //console.log(req.body.idtoken)
    // res.sendStatus(204)
    let CLIENT_ID = '869793669585-thq4uiq4ir7cqqsdg0p90cafo28hu61d.apps.googleusercontent.com'
    let token = req.body.idtoken
    const client = new OAuth2Client(CLIENT_ID);
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log(payload)
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
    }
    verify().catch(console.error);
})


module.exports = router;