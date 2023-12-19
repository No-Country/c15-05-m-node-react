import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../libs/jwt.js";
import { token_secret } from "../config.js";



// ? Registrar usuario
export const register = async (req, res) => {
    const { name, email, password, companyID } = req.body;
    try {
      const emailLow = email.toLowerCase();
      const userFound = await User.findOne({ email: emailLow });
      if (userFound) {
        // return res.status(400).json({ success: false, message: 'El Correo ya está en uso' });
        const errorObject = { success: false, message: 'El Correo ya está en uso' };
        const errorString = JSON.stringify(errorObject);
        throw new Error(errorString);
        res.redirect("/register-user");
      }
  
      const passwordaHash = await bcrypt.hash(password, 10);
  
      var newUser;
      if (companyID) {
        newUser = new User({
          name,
          email,
          password: passwordaHash,
          companyID,
          EUA: true,
        });
      } else {
        newUser = new User({
          name,
          email,
          password: passwordaHash,
        });
      }
  
      const userSaved = await newUser.save();
  
      const token = await createAccessToken({ id: userSaved._id });
      res.cookie('token', token);
  
      res.status(200).json({
        success: true,
        message: 'Usuario registrado exitosamente',
        user: {
          id: userSaved._id,
          name: userSaved.name,
          email: userSaved.email,
          createdAt: userSaved.createdAt,
          updatedAt: userSaved.updatedAt,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'Hubo un error al registrar el usuario. Verifique el correo electrónico.',
      });
    }
  };
  

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
        return res.status(200);
    } catch (error) {
        console.log(error);
        return res.status(500)
    }
}

// ? Cambiar contraseña
export const updatePassword = async (req,res)=>{
    const user = req.user
    const {password,newPassword,matchPassword} = req.body
    try {
        const userFound = await User.findById(user.id)
        if (!userFound) return res.status(404).json({ message: "Usuarios no encontrado" });

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });
        
        if(newPassword !== matchPassword)
        return res.status(400).json({ message: "Las contraseñas no coinciden" });

        const hashedPassword = await bcrypt.hash(newPassword,10); 

        await User.findByIdAndUpdate(user.id, { password: hashedPassword });

         res.status(201).json({message:"contraseña actualizada"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error interno del servidor" });
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
  
