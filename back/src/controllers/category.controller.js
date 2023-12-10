import Category from "../models/category.model.js";

// ? Crear categoria
export const createCategory = (req,res)=>{
    try {
        res.send("creada").status(200)
    } catch (error) {
        console.loge(error)
        res.status(500).send("error interno")
    }
}

// ? Octener categoria
export const getCategories = (req,res)=>{
    try {
        res.send("Octenida").status(200)
    } catch (error) {
        console.loge(error)
        res.status(500).send("error interno")
    }
}

// ? Eliminar categoria
export const deleteCategory = (req,res)=>{
    try {
        res.send("Eliminada").status(200)
    } catch (error) {
        console.loge(error)
        res.status(500).send("error interno")
    }
}