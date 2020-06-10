const router = require('express').Router();
const db = require("../../database/db_connection")


//default route
router.post('/', async (req, res) => {
    console.log('endpoint hit with uer id', req.user.id)

    const email = await db.query(
        "SELECT email FROM users WHERE user_id = $1",
        [req.user.id]
    )
    console.log(email.rows[0].email)
    res.json(email.rows[0].email);
})


//User Data Requests 

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.send(`<h1>sending user data on ${name}.....</h1>`)
})

router.post('/:name', (req, res) => {
    const { name } = req.params;
    res.send("<h1>adding user data.....</h1>")
})

module.exports = router
