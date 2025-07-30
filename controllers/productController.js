import productData from "../data.js"

const getAllProducts = (req , res) => {
    res.send(productData);
}

const getProductById = (req , res) => {
    const  {id} = req.params;
    const product = productData.find((product) => product.id == id);
    if (!product) {
        return res.status(404).send({ error: "Product not found" });
    }
    res.send(product);
}

const addNewProduct = (req , res) => {
    const newProduct = req.body;
    const {id , name , price , description} = newProduct;
    if(!id) {
        return res.status(400).send({error : "product id is required"});
    }
    else if(!name || name === "") {
        return res.status(400).send({error : "product name is required"});
    }
    else if(!price || typeof price !== "number") {
        return res.status(400).send({error : "price is required as a number"});
    }
    else if(!description || description === "") {
        return res.status(400).send({error : "Description is required"});
    }
    else productData.push(newProduct);

    res.send(productData);
}

const updateProductById = (req , res) => {
    const  { id } = req.params;
    const  { newName , newPrice , newDescription } = req.body;
    let product = productData.find((product) => product.id == id);
    if (!product) {
        return res.status(404).send({ error: "Product not found" });
    }
    if(newName){
        product.name = newName;
    }
    if(newPrice){
        product.price = newPrice;
    }
    if(newDescription){
        product.description = newDescription;
    }
    res.send(productData);
}

const deleteProductById = (req, res) => {
    const id = req.params.id;
    const index = productData.findIndex((product) => product.id == id);
    if (index === -1) {
        return res.status(404).send({ error: "Product not found" });
    }
    const deletedProduct = productData.filter((product) => product.id != id);
    res.send(deletedProduct);
}

const getProductOnSearch = (req, res) => {
    const {q} = req.query;
    if (!q) {
        return res.status(400).send({ error: "Query parameter 'q' is required" });
    }
    const results = productData.filter(product =>
        product.name.toLowerCase().includes(q.toLowerCase())
    );
    res.send(results);
}

const getProductsOnPagination = (req , res) => {
    const { page , limit } = req.query;

    const productOnPage = productData.filter((product) => product.page == page);

    res.send(productOnPage.slice(0 , limit));
}



export {
    getAllProducts,
    getProductById,
    getProductOnSearch,
    getProductsOnPagination,
    addNewProduct,
    updateProductById,
    deleteProductById,
}