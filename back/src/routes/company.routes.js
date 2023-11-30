import { Router } from "express";
import {validateSchema} from '../middleware/data.validator.js'
import {companySchema} from '../Schema/company.schema.js'
import { registerCompany,getCompany } from "../controllers/company.controller.js";
const router = Router()

// ? Registrar company
router.post('/register/company/:id',validateSchema(companySchema),registerCompany);

// ? Octener datos de una empresa
router.get('/company/:id',getCompany)

export default router