const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const bodyparser = require("body-parser")

const app = express()
const port = 8000

mongoose.connect('mongodb://localhost/DanceContact')

var contactSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
})

var contact = mongoose.model('data', contactSchema)

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    const params = {}
    res.status = 200
    res.render('index.pug', params)
})

app.get('/home', (req, res) => {
    const params = {}
    res.status = 200
    res.render('home.pug', params)
})

app.get('/contact', (req, res) => {
    const params = {}
    res.status = 200
    res.render('contact.pug', params)
})

app.post('/contact', (req, res) => {

    var myData = new contact(req.body)
    myData.save().then(() => {
        res.send("Done")
    }).catch(() => {
        res.status(400).send("Nope")
    })
})

app.listen(port, () => {
    console.log("Server Running ...")
})