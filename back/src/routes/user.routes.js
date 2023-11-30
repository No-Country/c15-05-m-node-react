import { Router } from "express";
import { login,register,logout,verityToken } from "../controllers/user.controller.js";
import {validateSchema} from '../middleware/data.validator.js'
import { userRegisterSchema,userLoginSchema } from "../Schema/user.schema.js";
const router = Router();

// ? Registrar usuario
router.post('/register',validateSchema(userRegisterSchema),register);

// ? iniciar seccion
router.post('/login',validateSchema(userLoginSchema),login)

// ? Salir de seccion
router.post('/logout',logout)

router.get('/verify',verityToken)

export default router;