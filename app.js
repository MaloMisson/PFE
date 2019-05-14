// app.js

const http = require('http');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {  
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Hello World!\n');
});

// Start the server on port 3000
let port = 8080;
app.listen(port);  
console.log('Node server running on port '+port);  