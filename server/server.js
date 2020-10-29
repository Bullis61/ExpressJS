const express = require ('express')
const path = require('path')
let app = express()

app.use(express.static(path.join(__dirname, '../public')))

app.use('/order/:name', (req, res) => {
    let name = req.params.name;
    let email = req.query.email
    res.send()
})

app.use('/order/url', (req, res) => {
    let url = req.params.url
    res.send(console.log(req.url))
})

app.listen(3000)