import React from "react"
//import Header from '../shared/Header/Header'

const Register = () => {
  

  return (
        <div className='w-full h-screen pt-11 bg-slate-200 '>
           <h1 className='text-4xl text-center font-semibold'> Registro de Empresa</h1>
      
             <div className='flex place-content-around mt-28'>
                   <div className='w-[500px]'>
                      <form className= 'flex flex-col place-content-around gap-6 '>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Nombre de la empresa'
                              className={`border border-black p-2 rounded-lg `}
                              id='name'
                            />
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Numero de identificacion empresa'
                              className={`border border-black p-2 rounded-lg `}
                              id='name'
                            />
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Email'
                              className={`border border-black p-2 rounded-lg `}
                              id='name' 
                            />
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Rubro'
                              className={`border border-black p-2 rounded-lg `}
                              id='name'
                            />
                          </div>
                          <div className="flex flex-col">
                            <input
                              type="text"
                              placeholder='Direccion de la empresa'
                              className={`border border-black p-2 rounded-lg `}
                              id='name'
                            />
                          </div>
                      </form>
                   </div> 
                   <div>
                   <div className='w-[350px] h-[200px] flex place-content-center  border border-black rounded-xl overflow-hidden'>
                       <button
                          type="submit"
                          className=" h-[50px] self-end bg-[#4DD0E1] hover:bg-gray-400 text-black font-bold text-sm p-4 rounded"
                        >
                         Agregar Logo
                       </button>
                    </div>
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

export default Register