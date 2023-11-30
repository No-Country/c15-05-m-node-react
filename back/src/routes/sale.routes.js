import { Router } from "express";
import { getSales,getSale,createSale } from "../controllers/sale.controller.js";

const router = Router()

// ? Octener las ventas 
router.get('/sale',getSales)

// ? Octener una venta por el id
router.get('/sale/:id',getSale)

// ? generar venta 
router.post('/sale/:id',createSale)

export default router