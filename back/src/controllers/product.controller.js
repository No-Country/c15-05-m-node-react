import Product from '../models/product.model.js'


// ? Octoner un producto
export const getProduct = async (req,res)=>{
    const {id,companyId} = req.params
    if (!id || !companyId) 
    return res.status(400).json({message:"Petición Incorrecta"});
    try {
          const product = await Product.findById(id)
          if(!product) return res.status(400).json({message:"Producto no encontrado"});

           
          if(product.company.valueOf() !== companyId) 
          return res.status(400).json({message:"Producto no encontrado"});

         res.status(200).send(product)
    } catch (error) {
        console.error(error)
        res.send().status(500)
    }
}

// ? Octener todos los productos de un usuario
export const getProducts = async (req,res)=>{
    const {id}= req.params
    try {
        const products = await Product.find({company:id})
        
        res.status(200).send(products)
    } catch (error) {
        console.error(error)
        res.send().status(500)
    }
}

//? Crear Producto
export const createProduct = async (req,res)=>{
    const {
        name,
        price,
        quantity,
        description,
        category,
        currency,
        company} = req.body

        // !================ Solo hasta configurar Cloudinary ===============
    const image = {
        "url": "https://isorepublic.com/wp-content/uploads/2023/09/iso-republic-rainbow_birds-768x512.jpg",
        "public_id": "abcd1234"
      }
    try {
        const newProduct = new Product({
            name,
            price,
            quantity,
            category,
            description,
            currency,
            company,
            image
        })
        await newProduct.save()
        res.status(201).json({message:'Producto Creado Exitosamente'})
    } catch (error) {
        console.error(error)
        res.send().status(500)
    }
}

//? eliminar una producto
export const deleteProduct = (req,res)=>{
    const {id} = req.params
    try {
        Product.findByIdAndDelete(id)
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



