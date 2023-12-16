import { createContext, useState, useEffect } from 'react'
import {categoryData } from '../components/data'
import { convert } from '../utils/utils'
import {
    sweetAlertsSuccessfully,
    sweetAlertsError,
  } from "../../../components/Utils/alerts/sweetAlerts";


export const EuaContext = createContext()

export default function EuaProvider({ children }){
    const [productsTable, setProductsTable] = useState([])
    const [productsFilter,setProductsFilter] = useState([])
    const [products,setProducts]= useState([])
    const [localCurrency ,setLocalCurrency ] = useState("VES")
    const [divisaValue, setDivisaValue] = useState(null)
    const [totalToPay,setTotalToPay] = useState('0')
    const categories = categoryData
    

    useEffect(()=>{
        totalFunction()
    },[productsTable])

    useEffect(()=>{
    const getExchangeRate = async ()=>{
        const newValue = await convert(localCurrency,"USD")
        return setDivisaValue(newValue.result)
        }
        getExchangeRate()
    },[])

    const totalFunction = () => {
        let total = 0
      
        if (productsTable.length > 0) {
            productsTable.forEach(item => {
            total += item.price * item.quantity
          });
          setTotalToPay(total.toFixed(2))
        }else{
            return setTotalToPay(total)
        }
    }

    const upadteQuantity = (id, operation) => {
        setProductsTable((prevProducts) => {
          return prevProducts.map((product) => {
            if (product.id === id) {
              const newQuantity = operation === "plus" ? product.quantity + 1 : Math.max(product.quantity - 1, 1)
              return { ...product, quantity: newQuantity }
            }
            return product
          })
        })
    }
      
    const addToTable = (data) => {
        const { id } = data
        const productInTableIndex = productsTable.findIndex(item => item.id === id)

        if (productInTableIndex >= 0) {
            const newproductsTable = structuredClone(productsTable)
            newproductsTable[productInTableIndex].quantity += 1
            return setProductsTable(newproductsTable)
          }

        const newTable = [
            ...productsTable,
            {
                ...data
            }
        ] 
        return setProductsTable(newTable)
    }

    const removeToTable = (id)=>{
        const newTable = productsTable.filter(item => item.id !== id)
        return setProductsTable(newTable)
    }

    const clearTable = ()=>{
        setProductsTable([])
    }

    const generateSale = ()=>{
        if(totalToPay < 1)
            return sweetAlertsError("Factura vacia","No puedes generar facturas vacias","OK")
        const data  = generateDataSale()
        console.log(data)
        return sweetAlertsSuccessfully("Factura generada")
    }

    const generateDataSale = () =>{
        const sold_Products = [
            productsTable.map(item =>{
                return {
                    product:item.id,
                    quantity:item.quantity,
                    totalPriceProduct:(item.quantity * item.price).toFixed(2)
                }
            })
        ]
        const data = {
            total:totalToPay,
            company:company,
            sold_Products

        }
        return data
    }

   
    

    return(
        <EuaContext.Provider value={{
            products,
            productsFilter,
            setProductsFilter,
            categories,
            setProductsTable,
            productsTable,
            addToTable,
            removeToTable,
            upadteQuantity,
            clearTable,
            totalToPay,
            localCurrency,
            divisaValue,
            generateSale,
            setProducts
            }}>
            { children }
        </EuaContext.Provider>
    )
}