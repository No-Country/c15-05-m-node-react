import Sale from "../models/sale.model.js"
export const createSale = (req,res)=>{
    try {
        res.send('creada')
    } catch (error) {
        console.error(error)
        res.status(500).send('Error interno')
    }
}

export const getSale = (req,res)=>{
    try {
        res.send('Octenida')
    } catch (error) {
        console.error(error)
        res.status(500).send('Error interno')
    }
}
export const getSales = (req,res)=>{
    try {
        res.send('Octenidas')
    } catch (error) {
        console.error(error)
        res.status(500).send('Error interno')
    }
}