
const express = require("express")

const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send("This is Home")
})

app.get('/about', (req, res) => {
    res.status(200).send("This is About")
})

app.post('/about', (req, res) => {
    res.send("This is post from About")
})

app.listen(port, () => {
    console.log("Server Running ...")
})