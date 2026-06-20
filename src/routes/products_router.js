import {Router} from "express";
const router = Router();
import {getProducts, getProductById, createProduct,deleteProduct} from "../controllers/products.controllers.js";

    //le digo que funcion debe ejecutar ej: getProduct, asignar y ejecutar la funcion getProduct()
router.get("/",getProducts);
//Prefijo :/api/products

router.get("/:id",getProductById);
router.post("/",createProduct);
router.get('/new',(req,res) =>{
    res.send('Fomrulario para crear un ')
})
router.delete("/:id",deleteProduct);
router.get('/search/:q', (req, res) => {
    const { q } = req.params;
    res.send(`Buscando: ${q}`);
})
export default router;// cuando lo importe se puede llamar como quiera