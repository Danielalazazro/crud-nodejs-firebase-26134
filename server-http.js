const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url,request.method);
    response.end('Hello World');
});
//todos los servidores tienen que responder a un puerto determinado, el puerto es
//como la oficina donde se atiende en este caso 3000
server.listen(3000,() => console.log("http://localhost:3000"));//si esta libre esta disponible y se la van a dar , escuchan el localhost

//se utiliza para saber que el servidor empieza a escuchar


