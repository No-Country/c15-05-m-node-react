import { Router } from "express";
import { login,register,logout, registerCompany,verityToken } from "../controllers/user.controller.js";
import {validateSchema} from '../middleware/data.validator.js'
import { userRegisterSchema,userLoginSchema } from "../Schema/user.schema.js";
import {companySchema} from '../Schema/company.schema.js'
const router = Router();

// ? Registrar usuario
router.post('/register',validateSchema(userRegisterSchema),register);

// ? Registrar compañia
router.post('/register/company/:id',validateSchema(companySchema),registerCompany);

// ? iniciar seccion
router.post('/login',validateSchema(userLoginSchema),login)

// ? Salir de seccion
router.post('/logout',logout)

router.get('/verify',verityToken)

export default router;