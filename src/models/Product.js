export const getProducts = async() => {
    snapshot.forEach((doc) => {

    });
    return products;
}
export const getProductById = async(id) => {
    const productRef = doc(productCOllection, id);
    console.log(productRef);
    const snapshot = await getDoc( productRef);
    if (!snapshot.exists()){
        return null;
    }
    return{
        id: snapshot.id,

    }
};
export const createProduct = async (product) => {
    const productRef = await addDoc(productsCollection,product)
    return{
        id: productRef.id,
        ...product,
    }
};

export const deleteProduct = async (id) => {
    const productRef = doc(productCollection,id);
    const snapshot = await getDoc(productRef);
    if (!snapshot.exists()){
        return null;
    }
    const deletedProduct = {
        id: snapshot.id,
        ...snapshot.data(),
    }
    
};