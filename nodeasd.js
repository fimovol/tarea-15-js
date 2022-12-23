const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((request, response) => {
response.statusCode = 200
response.setHeader('Content-Type', 'text/plain')
let nombre = "javier francsico sanchez chavez "
response.end(`mi nombre es :${nombre}`)
})

server.listen(port, hostname, () => {
console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
})