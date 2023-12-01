import Sale from "../models/sale.model.js"
import Company from "../models/company.model.js"


// ? Generar una venta 
export const createSale = async (req,res)=>{
    const sale = req.body
    try {
            const company = await Company.findById(req.body.company)
            if (!company) return res.status(404).json({message:"La compañia no existe"})

            const newSale = new Sale(sale);
            await newSale.save(sale)
            res.status(201).json({message:"Venta registrada"})

    } catch (error) {
        console.error(error)
        res.status(500).send('Error interno')
    }
}

// ? Octener una venta por el id
export const getSale = async (req,res)=>{
    const user = req.user
    const {id} = req.params
    try {
        const company = await Company.findOne({user:user.id})
        if(!company) return res.status(404).json({message:"No hay compañia asociada a tu usuario"})
        
        const sale = await Sale.findById(id)
        if(!sale) return res.status(404).json({message:"La venta no existe"})

        res.status(200).json(sale)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error interno')
    }
}

// ? Octener todas las ventas de una compañia
export const getSales = async (req,res)=>{
    const user = req.user
    try {
        const company = await Company.findOne({user:user.id})
        if(!company) return res.status(404).json({message:"No hay compañia asociada a tu usuario"})

        const sales = await Sale.find({company:company._id})
        res.status(200).json(sales)
    } catch (error) {
        console.error(error)
        res.status(500).send('Error interno')
    }
}