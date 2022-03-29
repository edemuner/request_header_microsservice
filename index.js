const express = require('express')
const controller = require('./controller')

const app = express()

var cors = require('cors')
app.use(cors({optionsSuccessStatus: 200}))

controller(app)

app.use('/', (req, res) => {
    res.status(200).send('You reached your destination')
})


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`app listening to port ${port}`))