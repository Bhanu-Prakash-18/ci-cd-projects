const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
  res.end('Hello from Bhanu’s CI/CD Node App!');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

