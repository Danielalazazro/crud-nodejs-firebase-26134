import express from 'express';
import productsRouter from "./src/routes/products_router.js";
import usersRouters from "./src/routes/users_router.js";
//creo un listado de productos


//Creamos 1 servidor que envia respuestas a las peticiones
console.log('Proximamente express')
const app = express();
const PORT= 3000;
app.use(express.json()) ;
app.use(usersRouters);

app.get("/",(req,res) => {
    res.send("Hello world!!");

});

app.get("/",(req,res) => {
    res.send(
        `<h1> API de productso </h1>
        <p> Servidor funcionando correctamente <p>`
    )
});
app.use('/api/products',productsRouter);
//creo un midle word si nadie responde, 
app.use((req,res,next) => {
    console.log(req.method,req.url);
    next() //sigo con mi ruta
});
//creo la ruta para productos
app.get("/products",(req,res) => {
    res.send(products);
});
//creo la ruta para el producto 5
app.get("/products/5",(req,res) => {
    res.send("Producto 5");
});
//creo la ruta para 1 producto en particular
app.get("/products/:id",(req,res) => {
    res.send(`Producto ${req.params.id}`);
})
app.use((req,res,next) => {
    res.send("Not found");
})
app.listen(3000,() => console.log("http://localhost:3000"));
