import { Router } from "express";
import {authRequired} from '../middleware/tokenResponse.js'
import { login,register,logout,verityToken,updatePassword,deleteUser } from "../controllers/user.controller.js";
import {validateSchema} from '../middleware/data.validator.js'
import { userRegisterSchema,userLoginSchema,changePassworSchema,} from "../Schema/user.schema.js";
const router = Router();

// ? Registrar usuario
router.post('/register',validateSchema(userRegisterSchema),register);

// ? iniciar seccion
router.post('/login',validateSchema(userLoginSchema),login)

// ? Salir de seccion
router.post('/logout',logout)

// ? cambiar contraseña
router.post('/change/password',validateSchema(changePassworSchema),updatePassword)//authRequired,

// ? Eliminar usuario
router.delete('/user/:id',deleteUser)

// ? Verificar el token de la cookies
router.get('/verify',verityToken)

export default router;