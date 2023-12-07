import { Router } from "express";
import { 
    createProduct,
    deleteProduct,
    updateProduct,
    getProduct,
    getProducts 
} from "../controllers/product.controller.js";
import {authRequired} from '../middleware/tokenResponse.js'
import {validateSchema} from '../middleware/data.validator.js'
import { productSchema } from "../Schema/product.shema.js";


const routes = Router()

//? Octener todos los productos de un usuario
routes.get('/products/:id',authRequired,getProducts)

//? Octoner un producto
routes.get('/product/:id/:companyId',authRequired,getProduct)

//? Crear Producto
routes.post('/product',authRequired,validateSchema(productSchema),createProduct)

// ? Actualizar un producto
routes.put('/product/:id',authRequired,validateSchema(productSchema),updateProduct)


//? eliminar una producto
routes.delete('/product/:id',authRequired,deleteProduct)

export default routes