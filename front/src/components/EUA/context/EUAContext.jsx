import { createContext, useState, useEffect } from 'react'
import { productsData,categoryData } from '../components/data'

export const EuaContext = createContext()

export default function EuaProvider({ children }){
    const [productsTable, setProductsTable] = useState([])
    const [productsFilter,setProductsFilter] = useState(productsData)
    const [products,setProducts]= useState([])
    const categories = categoryData

    // const consultarProductos = async () => {
    //     const response = await fetch(`http://localhost:3000/api/products/65770eb94668468640ed2017`);
    //     const data = await response.json()
    //     console.log(data)
    // }
    

    {/* ? Octener Productos de redux por ahora prueba */}
    useEffect(()=>{
        setProducts(productsData)
    },[])
    

    return(
        <EuaContext.Provider value={{products,productsFilter,setProductsFilter,categories }}>
            { children }
        </EuaContext.Provider>
    )
}