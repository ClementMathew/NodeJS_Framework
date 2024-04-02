
// Synchronous or Blocking = line by line execution

const fs = require("fs");

let text = fs.readFileSync("FileSystem/file.txt", "utf-8")
console.log(text)
console.log("Hello")