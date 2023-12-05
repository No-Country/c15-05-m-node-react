import logo from '../../assets/Imagenes/imgEmpresa.jpg'

import React from "react"
const RegisterUser = () => {

  return (
        <div className='w-full h-screen pt-11 bg-slate-200 '>
            <h1 className='text-4xl text-center font-semibold'> Registro de Usuario</h1>
              <div className='flex place-content-around mt-28'>
                   
                   <div className=' h-[300px] border border-black flex place-content-center  rounded-xl overflow-hidden'>
                       <img src={logo} alt="Logo Empresa" className='border rounded-lg ' />
                    </div>
                    
                    <div className='w-[500px]'>
                      <form  className= 'flex flex-col place-content-around gap-6 '>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Usuario'
                              className={`border border-black p-2 rounded-lg `}
                              id='user'
                             
                            />
                           
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Nombre Completo'
                              className={`border border-black p-2 rounded-lg  `}
                              id='name'
                             
                            />
                            
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Email'
                              className={`border border-black p-2 rounded-lg  `}
                              id='email'

                            />
                            
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Numero de Identificacion'
                              className={`border border-black p-2 rounded-lg  `}
                              id='number'
                             
                            />
                           
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Direccion de Residencia'
                              className={`border border-black p-2 rounded-lg `}
                              id='name'
                            />
                          </div>
                       </form>
                      <div className='w-full flex place-content-center mt-10 '>
                          <button
                              type="submit"
                              className="w-[150px] h-[50px]  bg-[#4DD0E1] hover:bg-gray-400 text-black font-bold text-sm p-4 rounded"
                            >
                            Enviar
                          </button>
                        </div>  
                </div> 
                   

        
               </div>
          </div>
    
  )
}

export default RegisterUser
