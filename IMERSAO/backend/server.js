const { createServer } = require('node:http')

const server = createServer((request, response) => {


    const url = request.url

    if(url == '/produtos') {
        const produtos = [
            { id: '1', nome: 'Mouse', valor: 15.99 },
            { id: '2', nome: 'Teclado', valor: 15.99 },
            { id: '3', nome: 'Monitor', valor: 15.99 },
        ]
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(produtos));
    }

     if(url == '/usuarios') {
        const produtos = [
            { id: '1', nome: 'Mouse', valor: 15.99 },
            { id: '2', nome: 'Teclado', valor: 15.99 },
            { id: '3', nome: 'Monitor', valor: 15.99 },
        ]
        response.writeHead(200, { 'Content-Type': 'application/json' });
        return response.end(JSON.stringify(produtos));
    }


    response.writeHead(200, { 'Content-Type': 'application/pdf' });
    response.end('Hello World!\n');


})
// localhost:3000
server.listen(3000, 'localhost', () => {
    console.log("Backend Executando...")
})