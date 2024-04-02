
// Asynchronous or Non-Blocking = line by line execution is not guarenteed and callback will fire

const fs = require("fs");

let text = fs.readFile("FileSystem/file.txt", "utf-8", (err, data) => {
    console.log(err, data)
})
console.log(text)
console.log("Hello")