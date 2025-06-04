// server/server.js

const http = require('http');
const fs = require('fs');
const port = 3035;
const dataPath = '../src/data/';

const server = http.createServer((req, res) => {
    if (req.url === '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const data = {
            temperature: Math.floor(Math.random() * 100),
            humidity: Math.floor(Math.random() * 100)
        };
        const dataStr = JSON.stringify(data);
        res.end(dataStr);

        // Log data to file
        const fileName = `${dataPath}${Date.now()}.json`;
        fs.writeFile(fileName, dataStr, err => {
            if (err) console.error('Error writing data to file:', err);
        });
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});