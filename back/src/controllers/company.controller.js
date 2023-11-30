import User from "../models/user.model.js";
import Company from "../models/company.model.js";



// ? Registro empresa
export const registerCompany = async (req, res) => {
    const { name, sector, country } = req.body;
    const { id } = req.params;
    try {
        const user = User.findById({id})
        if(!user) return res.status(404).json({ message: "Usuario no encontrado" });
        
        const newCompany = new Company({
            name,
            sector,
            country,
            user: id
        })
       await newCompany.save();
       console.log(newCompany._id)
       const updatedUser = await User.findByIdAndUpdate(id,{UA:true,companyID:newCompany._id}, { new: true } );
       return res.status(201).json({
        dataUser:{
            name:updatedUser.name,
            email:updatedUser.email,
            UA:updatedUser.UA,
        },
        newCompany
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

// ? Octener datos de una empresa por id 
export const getCompany = async (req,res)=>{
    const {id} = req.params
    try {
         const company = await Company.findById(id)
         if(!company)return res.send("No se a encontrado la compañia").status(404)
         
        res.send(company).status(200)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:"Error interno"})      
    }
}