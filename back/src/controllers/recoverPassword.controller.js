import path from 'path'

// ? Recuperar Password
export const recoverPassword = (req,res) =>{
    try {

        res.send("recuperando").status(200)
    } catch (error) {
        console.log(error)
    }
}

// ? Octener pagina de recuperar comtraseña
export const getPagesRecoverPasswor = (req,res) =>{
    try {
        res.send("recuperando").status(200)
    } catch (error) {
        console.log(error)
    }
}

// ? Octener Pagina de enviar pagina
export const getPageSendEmail = (req,res) =>{
    try {
        res.send("recuperando").status(200)
    } catch (error) {
        console.log(error)
    }
}