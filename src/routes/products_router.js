import {Router} from "express";
const router = Router();
import {getProducts, getProductById, createProduct,deleteProduct} from "../controllers/products.controllers.js";

    //le digo que funcion debe ejecutar ej: getProduct, asignar y ejecutar la funcion getProduct()
router.get("/",getProducts);


router.get("/:id",getProductById);
router.post("/",createProduct);

router.delete("/:id",deleteProduct);
export default router;// cuando lo importe se puede llamar como quiera