const { json } = require("express/lib/response")

module.exports = app => {

    app.get('/api/whoami', (req, res) => {

        res.status(200).json(
            {
                ipadress:req.ip,
                language:req.get('accept-language'),
                software: req.get('User-Agent')
            }
        )
    })
}