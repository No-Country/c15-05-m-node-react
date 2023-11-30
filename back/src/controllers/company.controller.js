import User from "../models/user.model.js";
import Company from "../models/company.model.js";
import {uploadImage} from "../utils/cloudinary.js"



// ? Registro empresa
export const registerCompany = async (req, res) => {
    const { name, sector, country, image } = req.body;
    const { id } = req.params;
    try {
        if(!id) return res.status(404).json({ message: "Usuario no encontrado" });
        const imageClodinary = await uploadImage(image);
        const newCompany = new Company({
            name,
            sector,
            country,
            user: id,
            image: {
                url: imageClodinary.url,
                public_id: imageClodinary.public_id,
              },
        })
       await newCompany.save();
       const updatedUser = await User.findByIdAndUpdate(id,{UA:true,companyID:newCompany._id}, { new: true } );
       return res.status(201).json({
        userData:{
            name:updatedUser.name,
            email:updatedUser.email,
            UA:updatedUser.UA,
        },
        newCompany,
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