import { Router } from "express";
import { login,register,logout, registerCompany } from "../controllers/user.controller.js";


const router = Router();

// ? Registrar usuario
router.post('/register',register);
// ? Registrar company
router.post('/register/company/:id', registerCompany);
// ? iniciar seccion
router.post('/login',login)
// ? Salir de seccion
router.post('/logout',logout)

export default router;