
// ? Octoner un producto
export const getProduct = (req,res)=>{
    const {id} = req.params.id
    try {
        res.status(200).send('Producto')
    } catch (error) {
        console.error(error)
        res.send().status(500)
    }
}

// ? Octener todos los productos de un usuario
export const getProducts = (req,res)=>{
    try {
        res.status(200).send('Productos')
    } catch (error) {
        console.error(error)
        res.send().status(500)
    }
}

//? Crear Producto
export const createProduct = (req,res)=>{
    const {} = req.body
    try {
        res.status(200).send('Producto Creado')
    } catch (error) {
        console.error(error)
        res.send().status(500)
    }
}

//? eliminar una producto
export const deleteProduct = (req,res)=>{
    const {id} = req.params.id
    try {
        res.status(200).send('Producto Eliminado')
    } catch (error) {
        console.error(error)
        res.send().status(500)
    }
}

// ? Actualizar un producto
export const updateProduct = (req,res)=>{
    const {id} = req.params.id
    try {
        res.status(200).send('Producto actualizado')
    } catch (error) {
        console.error(error)
        res.send().status(500)
    }
}



