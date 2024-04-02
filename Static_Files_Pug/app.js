const express = require("express");
const path = require("path");

const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hey Clement', message: 'Hello there, you are using pug !' })
});

app.get("/", (req, res) => {
    res.status(200).send("This is homepage of my first express app");
});

app.get("/error", (req, res) => {
    res.status(404).send("This page is not found on my website");
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
