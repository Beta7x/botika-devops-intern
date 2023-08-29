const http = require('http');
const os = require('os');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    const response = JSON.stringify({
        hostname: os.hostname(),
        time: new Date().toLocaleString()
    });
    res.end(response);
});

server.listen(PORT, () => {
    console.log(`Server is runnning on ${PORT}`);
})