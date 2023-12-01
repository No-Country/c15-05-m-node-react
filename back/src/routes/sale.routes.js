import { Router } from "express";
import { getSales,getSale,createSale } from "../controllers/sale.controller.js";
import {validateSchema} from '../middleware/data.validator.js'
import { saleSchema } from "../Schema/sale.schema.js";
import {authRequired} from '../middleware/tokenResponse.js'

const router = Router()

// ? Octener las ventas 
router.get('/sale',authRequired,getSales)

// ? Octener una venta por el id
router.get('/sale/:id',authRequired,getSale)

// ? generar venta 
router.post('/sale',authRequired,validateSchema(saleSchema),createSale)

export default router