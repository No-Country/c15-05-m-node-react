import User from '../models/user.model.js'
import { __dirname } from '../app.js'
import {join } from "path";
import { emailTemplate,sendEmail } from '../utils/nodemailer.js';
import crypto from 'crypto'

function generarToken() {
    return crypto.randomBytes(12).toString('hex');
}

// ? Recuperar Password
export const recoverPassword = (req,res) =>{
    try {

        res.send("recuperando").status(200)
    } catch (error) {
        console.log(error)
    }
}

// ? Octener pagina de recuperar comtraseña
export const getPagesRecoverPasswor = async (req,res) =>{
    const {id,token} = req.params
    try {
        const userFound = await User.findById(id)
        if(!userFound || userFound.token.used ||userFound.token.token !== token  ) return res.sendFile(join(__dirname, 'page', 'invalid.html'))
        
        res.sendFile(join(__dirname, 'page', 'changePassword.html'))
    } catch (error) {
        console.log(error)
    }
}

// ? Octener Pagina de enviar correo
export const getPageSendEmail = (req,res) =>{
    try {
        res.sendFile(join(__dirname, 'page', 'sendEmail.html'))
        
    } catch (error) {
        console.log(error)
    }
}

export const manegesSendEmail = async (req,res) => {
    const {email} = req.body
    try {
        const userFound = await User.findOne({email:email})
        if(!userFound) return res.status(404).json({message:"Correo incorrecto"});
        const token = generarToken()

        sendRecoverPassword(email,token,userFound._id,userFound.name)

        await User.findByIdAndUpdate(
            userFound._id,
            { 
                $set: { 
                    'token.token': token,
                    'token.used': false
                }
            },
            { new: true }
        );

        res.json({message:"Correo enviado"}).status(200)
    } catch (error) {
        
    }
}

const sendRecoverPassword = (email,token,userId,userName) =>{
    const subject ="🔒Recupera tu contraseña"

    const html = emailTemplate(email,token,userId,userName)

    sendEmail(email,html,subject)

}