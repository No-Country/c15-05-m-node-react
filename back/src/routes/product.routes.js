import { Router } from "express";
import { 
    createProduct,
    deleteProduct,
    updateProduct,
    getProduct,
    getProducts 
} from "../controllers/product.controller.js";


const routes = Router()

// ? Octener todos los productos de un usuario
routes.get('/product',getProducts)

//? Crear Producto
routes.post('/product',createProduct)

// ? Actualizar un producto
routes.put('/product/:id',updateProduct)

// ? Octoner un producto
routes.get('/product/:id',getProduct)

//? eliminar una producto
routes.delete('/product/:id',deleteProduct)

export default routes