import express from 'express';
import cors from "cors";
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

app.get("/prueba/:uid/category/:catId",(req,res) => {
    console.log(req.params);
    const {uid} = req.params;
    res.send("Prueba" + uid + " " + catId);
});
app.get('/query/params',(req,res) => {
    console.log(req.query);
    const  {limit} = req.query;
    res.send(`Query params: ${limit}`);
}); 
app.get('/api/products/search/:q',(req,res) => {
    console.log(req.params);
    const {q} = req.params;
    res.send(`Search query: ${q}`);
});
app.use('/api/products',productsRouter);
//creo un midle word si nadie responde, 
app.use((req,res,next) => {
    console.log(req.method,req.url);
    next() //sigo con mi ruta
});

app.get("/up" , (req,res) => {
    res.json({
        status:"ok",
        message:"Servidor activo",
    });
});

//Antes de que llegue al 404 le mando un mensaje de error
app.use((req,res) => {
    res.send({
        error: 'Ruta no encontraada',//tiene que transformarlo en json y enviarlo
    })
})
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
