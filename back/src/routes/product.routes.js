import { Router } from "express";
import { 
    createProduct,
    deleteProduct,
    updateProduct,
    getProduct,
    getProducts 
} from "../controllers/product.controller.js";
import {authRequired} from '../middleware/tokenResponse.js'


const routes = Router()

// ? Octener todos los productos de un usuario
routes.get('/product',authRequired,getProducts)

//? Crear Producto
routes.post('/product',authRequired,createProduct)

// ? Actualizar un producto
routes.put('/product/:id',authRequired,updateProduct)

// ? Octoner un producto
routes.get('/product/:id',authRequired,getProduct)

//? eliminar una producto
routes.delete('/product/:id',authRequired,deleteProduct)

export default routes