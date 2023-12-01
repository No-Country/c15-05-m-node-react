import { Router } from "express";
import {validateSchema} from '../middleware/data.validator.js'
import {companySchema} from '../Schema/company.schema.js'
import { registerCompany,getCompany,updateCompany } from "../controllers/company.controller.js";
import {authRequired} from '../middleware/tokenResponse.js'
const router = Router()

// ? Registrar company
router.post('/register/company/:id',authRequired,validateSchema(companySchema),registerCompany);

// ? Octener datos de una empresa
router.get('/company/:id',authRequired,getCompany)

// ? Actualizar los datos de la compañia
router.put('/company/:id',authRequired,updateCompany)

export default router