const products = [
    {id:1, name: "Poducto 1", price: 10},
    {id:2, name: "Poducto 2", price: 20},
    {id:3, name: "Poducto 3", price: 30},
];

export const getProducts = (req,res) => {
    res.json(products);
};
export const getProductById = async (req,res) => {
    const id = Number(req.params.id);
    console.log(req.query); 
    const product = products.find((product) => product.id === id);
    if (!product){
        return res.status(404).json({message: "Producto no encontrado"});
    }
    res.json(product);
};

export const createProduct = (req,res) => {
    const {name, price,stock} = req.body;
    if (!name || !price || !stock){
        return res.status(400).json({message: "Faltan datos obligatorios"});
    }
    //const newProduct1 = {};
    const newProduct = {
        id : products.length + 1,
        name,
        price,
        stock,
    }
    products.push(newProduct);
    res.status(201).json(newProduct);
};
export const deleteProduct = (req,res) => {
    const id = Number(req.params.id);
    //const productId
    const productsIndex = products.findIndex((product) => product.id === id);
    if (productsIndex === -1){
        return res.status(404).json({message: "Producto no encontrado"});
    }
    const deleteProduct = products.splice(productsIndex,1);
    res.json({
        message: "Producto eliminado",
        product: deleteProduct[0],
    })
};


//tambien puedo poner un export al final y colocar llaves y poner los nombres del 
//export
//export{...,...,..}

