import {Router} from "express"
import {recoverPassword,getPagesRecoverPasswor,getPageSendEmail} from '../controllers/recoverPassword.controller.js'

const router = Router()

router.get('/recover/password/:id',getPagesRecoverPasswor)

router.get('/recover/password/',getPageSendEmail)

router.post('/recover/password',recoverPassword)

export default router