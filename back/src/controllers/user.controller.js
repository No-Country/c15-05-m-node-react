import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../libs/jwt.js";
import Company from "../models/company.model.js";
import { token_secret } from "../config.js";


const  DataUser =()=>{}

// ? Registrar usuario
export const register = async (req,res)=>{
    const {name,email,password,companyID} = req.body
    try {
        const emailLow = email.toLowerCase();
        const userFound = await User.findOne({email:emailLow})
        if (userFound) return res.status(400).json({ error: 'El Correo ya está en uso' });

        const passwordaHash = await bcrypt.hash(password,10); 

        var newUser;
        if(companyID){
            newUser = new User({
                name,
                email,
                password:passwordaHash,
                companyID,
                EUA:true
            })
        }else{
            newUser = new User({
                name,
                email,
                password:passwordaHash,
            })
        }

        const userSaved = await newUser.save();

        const token = await createAccessToken({ id: userSaved._id });
        res.cookie("token", token);

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
    const { name, sector, country, image } = req.body;
    const { id } = req.params;
    try {
        console.log("USER", id);
        if(!id) return res.status(404).json({ message: "Usuario no encontrado" });
        const imageClodinary = await uploadImage(image);
        const newCompany = new Company({
            name,
            creatorUser: id,
            sector,
            country,
            user: id,
            image: {
                url: imageClodinary.url,
                public_id: imageClodinary.public_id,
              },
        })
        console.log("newCompany", newCompany);
       await newCompany.save();
       const updatedUser = await User.findByIdAndUpdate(id,{UA:true}, { new: true } );
       return res.status(201).json({
        data:{
            newCompany,
            name:updatedUser.name,
            email:updatedUser.email,
            UA:updatedUser.UA,
        },
        
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

// ? iniciar seccion
export const login = async (req,res)=>{
    try {
        const { email, password } = req.body;
        const emailLow = email.toLowerCase();

        const user = await User.findOne({ email:emailLow });
        if (!user) return res.status(404).json({ message: "Usuarios no encontrado" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });
      
          const token = await createAccessToken({ id: user._id });

          res.cookie("token", token);
          res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            UA: user.UA,
            EUA:user.EUA,
            companyID: user.companyID ? user.companyID : ""
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      }
}

// ? Salir
export const logout = async (req,res)=>{
    try {
        res.cookie("token", "", {
          expires: new Date(0),
        });
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
}

//? Verifica el token en la cookies
export const verityToken = async (req, res) => {
    try {
      const { token } = req.cookies;
      if (!token) return res.status(401).json(["No autorizado"]);

      jwt.verify(token, token_secret, async (err, user) => {
        if (err) return res.status(401).json(["No autorizado"]);
  
        const userFound = await User.findById(user.id);
  
        if (!userFound) return res.status(401).json(["No autorizado"]);
  
        return res.json({
          id: userFound._id,
          name: userFound.name,
          email: userFound.email,
          UA:userFound.UA,
          EUA:userFound.EUA,
          companyID: userFound.companyID ? userFound.companyID : ""
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
  