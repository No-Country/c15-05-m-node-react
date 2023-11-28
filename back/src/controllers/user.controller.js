import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import sendTokenResponse from "../middleware/tokenResponse.js";
import Company from "../models/company.model.js";


// ? Registrar usuario
export const register = async (req,res)=>{
    const {name,email,password} = req.body
    try {
        const userFound = await User.findOne({email})
        if (userFound) return res.send().json('El Correo ya esta en uso')

        const passwordaHash = await bcrypt.hash(password,10); 

        const newUser = new User({
            name,
            email,
            password:passwordaHash
        })
        console.log(newUser)
        const userSaved = await newUser.save();

        res.status(200).json({
            id: userSaved._id,
            name:userSaved.name,
            email:userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt:userSaved.updatedAt
        });

    } catch (error) {
        console.error(error)
        res.status(500)
    }
}
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
       await User.findByIdAndUpdate(id,{UA:true}, { new: true } );
       return res.status(201).json(newCompany);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

// ? iniciar seccion
export const login = async (req,res)=>{
    try {
        const { email, password } = req.body;
        const emailLow = await email.toLowerCase();

        const user = await User.findOne({ email: emailLow });
        if (!user) return res.status(404).json({ message: "Usuarios no encontrado" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({ message: "Contraseña incorrecta" });
      
        sendTokenResponse(user, 200, res);
      
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
}

// ? Salir de seccion
export const logout = async (req,res)=>{
    try {
         res.status(200).send('logout')
    } catch (error) {
        console.error(error)
        res.status(500)
}
}