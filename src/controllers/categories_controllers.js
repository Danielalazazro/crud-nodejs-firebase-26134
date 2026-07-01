export const getCategories = (req,res) => {
    res.json({
        message:"Listado de categorias",
    });
};
export const getCategoryById = (req,res) =>{
    const {id} = req.params;
    res.json({
        message:`Categoria con ID ${id}`,
    });
};
export const createCategory = (req,res) => {
    const {title} = req.body;
    
    res.status(201).json({
        message: `Categoria creada ${title}`
    });
};
export const updateCategory = (req,res) =>{
    const {id} = req.params;
    const {title} = req.body;
    if(id !=1){
        //por que la categoria no exite puede ser 400 o 404
        return res.status(404).json({error:"Categoria no encontrada"});
    }
    if(!title){
        return res.status(422).json({error:"EL titulo es requerido"});
    }

    res.json({
        message:`Se actualizo el ${title} del ID ${id}`
    });
};
//createdAt, updateAt, deletedAt = null -> fecha de eliminacion
export const deleteCategory = (req,res) => {
    const {id} = req.params;
    res.json({
        message:`Category ID ${id} borrada`
    });
};
//controladores tendremos toda la logica para armar el usario