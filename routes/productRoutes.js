import express from "express";
import { 
    getAllProducts,
    getProductById,
    addNewProduct,
    updateProductById,
    deleteProductById,
    getProductOnSearch,
    getProductsOnPagination
} from "../controllers/productController.js";

const router = express.Router();

router.get('/' , getAllProducts);
router.get('/productonpage' , getProductsOnPagination)
router.get('/search' , getProductOnSearch)
router.get('/:id' , getProductById);
router.post('/' , addNewProduct);
router.put('/:id' , updateProductById);
router.delete('/:id' , deleteProductById);

export default router;