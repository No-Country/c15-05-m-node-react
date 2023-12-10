import { Router } from "express"
import { categorySchema } from "../Schema/category.schema.js"
import { validateSchema } from "../middleware/data.validator.js"
import {authRequired} from '../middleware/tokenResponse.js'
import {createCategory,deleteCategory,getCategories} from '../controllers/category.controller.js'

const router = Router()

router.post('/category/:companyID',authRequired,validateSchema(categorySchema),createCategory)

router.get('/category',authRequired,getCategories)

router.delete('/category/:companyID/:id',authRequired,deleteCategory)

export default router