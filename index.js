const express = require('express')

const app = express()

app.use('/', (req, res) => {
    res.status(200).send('You reached your destination')
})

const port = 3000

app.listen(port, () => console.log(`app listening to port ${port}`))