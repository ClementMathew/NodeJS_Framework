const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()
const port = 80

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/params', (req, res) => {
    const con = "This is content"
    const params = { 'title': "This is title", 'content': con }
    res.status(200).render('index.pug', params)
})

app.get('/', (req, res) => {
    res.status(200)
    res.render('gym.pug')
})

app.post('/', (req, res) => {
    
    console.log(req.body)

    let name = req.body.name
    let age = req.body.age
    let gender = req.body.gender
    let address = req.body.address
    let more = req.body.more

    let outputToWrite  = `The guy called ${name}, ${age} years old (${gender}) residing at ${address} has ${more}`

    fs.writeFileSync('output.txt',outputToWrite)

    const params = { 'message': "Your form submitted successfully" }
    res.status(200).render('gym.pug', params)
})

app.listen(port, () => {
    console.log("Server Running ....")
})