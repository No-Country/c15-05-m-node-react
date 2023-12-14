import { createContext, useState, useEffect } from 'react'
import { productsData } from '../components/data'

export const EuaContext = createContext()

export default function EuaProvider({ children }){
    const [productsTable, setProductsTable] = useState([])
    const [products,setProducts]= useState([])


    {/* ? Octener Productos de redux por ahora prueba */}
    useEffect(()=>{
        setProducts(productsData)
    },[])

    return(
        <EuaContext.Provider value={{products}}>
            { children }
        </EuaContext.Provider>
    )
}