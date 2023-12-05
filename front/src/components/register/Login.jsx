import React from 'react'
import logo from '../../assets/Imagenes/imgEmpresa.jpg'

const Login = () => {
  return (
    <div className='w-full h-screen pt-11 bg-slate-200 '>
         <div className='flex place-content-around mt-28'>
            <div className=''>
            <div className=' h-[300px] border border-black flex place-content-center  rounded-xl overflow-hidden'>
                       <img src={logo} alt="Logo Empresa" className='border rounded-lg ' />
                    </div>
                 
             </div>

             <div className='w-[500px]'>
                <h1 className='text-4xl text-center p-5'>Acceso de Usuario</h1>
                      <form className= 'flex flex-col place-content-around gap-6 '>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Usuario'
                              className={`border border-black p-2 rounded-lg `}
                              id='name'
                            />
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Password'
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

export default Login
