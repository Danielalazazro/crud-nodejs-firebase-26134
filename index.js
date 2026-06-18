import express from 'express';
//creo un listado de productos
const products = [
    {id:1, name: "Poducto 1", price: 10},
    {id:2, name: "Poducto 2", price: 20},
    {id:3, name: "Poducto 3", price: 30},
];

//Creamos 1 servidor que envia respuestas a las peticiones
console.log('Proximamente express')
const app = express();
app.get("/",(req,res) => {
    res.send("Hello world!!");

});
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
