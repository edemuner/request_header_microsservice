const { json } = require("express/lib/response")

module.exports = app => {

    app.get('/api/whoami', (req, res) => {

        const ip = (req.ip).split(':')
        const ipv4 = ip[ip.length - 1]

        res.status(200).json(
            {
                ipadress:ipv4,
                language:req.get('accept-language'),
                software:req.get('User-Agent')
            }
        )
    })
}