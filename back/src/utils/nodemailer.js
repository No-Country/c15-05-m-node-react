import nodemailer from 'nodemailer'
import {email_of_apk,google_key_apk} from '../config.js'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.con",
    port: 465,
    secure: true,
    auth: {
      user: email_of_apk,
      pass: google_key_apk,
    },
  });


  export const sendEmail = async (userEmail,html,subject) =>{

    await transporter.sendMail({
        from:email_of_apk,
        to:userEmail,
        subject:subject,
        text:"Recupera la comtraseña de Ipunto",
        html:html
    })
  }


 export const emailTemplate = (data)=>{
    const {userEmail,token} = data
    const url = 'http://localhost:3000/'

    return `
    <form>
        <div>
            <label> hola ${userEmail}</label>
            <br>
            <a href="${ url }?token=${ token }" target="_blank">Recuperar contraseña</a>
        </div>
    </from>`
  }