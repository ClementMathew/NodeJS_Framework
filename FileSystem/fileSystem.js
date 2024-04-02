const fs = require("fs");

let text = fs.readFileSync("FileSystem/file.txt", "utf-8")
console.log(text)

text = text.replace("Clement", "Sheba")
console.log(text)

fs.writeFileSync("FileSystem/newFile.txt", text)