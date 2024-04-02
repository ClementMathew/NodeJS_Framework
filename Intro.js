
//loading http module
const http = require('node:http');

//hosting ip and port
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.end(`<!DOCTYPE html>  
<html>  
<head>  
<style>  
body {  
    background-color: linen;  
}  
h1 {  
    color: red;  
    margin-left: 80px;  
}   
</style>  
</head>  
<body>  
<h1>The internal style sheet is applied on this heading.</h1>  
<p>This paragraph will not be affected.</p>  
</body>  
</html>  `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});