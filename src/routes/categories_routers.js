//CRUD -Created , Read, Update, Delete
import { Router } from "express";
const router = Router();
import { getCategories,getCategoryById ,createCategory, updateCategory,deleteCategory} from "../controllers/categories_controllers.js";
//Defino del router la ruta principal
//CRUD -create,Read, Update, Delete 
router.post("/",createCategory);//el created obtiene datos del request body
router.get("/", getCategories);

router.get("/:id",getCategoryById);
router.put("/:id",updateCategory);
router.delete("/:id",deleteCategory);
export default router;
//En el patch solo puedo mandar la foto de la categoria 
// update: patch, put (en patch se tiene que validadr lo que me manda por ejemplo titulo, foto)
