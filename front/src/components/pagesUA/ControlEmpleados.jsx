import DashboardPage from "../dashboard/global/DashboardPage";
import { userLoginSchema } from "../../Schemas/loginSchema";
import { sweetAlertsError,sweetAlertsSuccessfully } from "../Utils/alerts/sweetAlerts";
import { registerEUA } from "../../redux/actionsUser";
import { useSelector } from "react-redux";
import { ZodError } from "zod";
import { useRef } from 'react';


const ControlEmpleados = () => {
  const formRef = useRef(null);
  const company = useSelector(state => state.company.company)

  const handlerSubmitEmployes = async (event)=>{
    event.preventDefault()

    if(!company._id){
      return sweetAlertsError("No has iniciado sección")
    }
   
   const {name,email,password} = event.target.elements
   const data = {
    name:name.value,
    email:email.value,
    password:password.value,
    companyID:company._id
   }
   try {
     userLoginSchema.parse(data)
     const res = await registerEUA(data)
     formRef.current.reset()
     sweetAlertsSuccessfully(res.data.message)  
   } catch (error) {
    if (error instanceof ZodError){
      sweetAlertsError(
        "Error al validar datos",
        error.errors[0].message,
        "Ok")
    }
   }
  }
  
  return (
    <DashboardPage>
      <section>
        <form 
        ref={formRef}
        onSubmit={handlerSubmitEmployes}>
          <div>
            <input type="text" name="name"/>
            <label htmlFor="">Nombre</label>
          </div>
          <div>
            <input type="email" name="email" />
            <label htmlFor="">Correo</label>
          </div>
          <div>
            <input type="password" name="password"/>
            <label htmlFor="">Contraseña</label>
          </div>
          <button type="submit">Crear Usuario</button>
        </form>
      </section>
    </DashboardPage>
  );
};

export default ControlEmpleados;