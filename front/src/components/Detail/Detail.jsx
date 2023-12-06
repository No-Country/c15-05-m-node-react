import React from "react";
//import {useSelector} from "react-redux";
import logoFlecha from "../../assets/Imagenes/logoFlecha.png"

const Detail = () => {
    const productDetail = {
        "_id":"5f8a0a5b6e95510f8c6d1a24",
        "name": "Producto Ejemplo 10",
        "price": 39.99,
        "image": {
          "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
          "public_id": "efgh5678"
        },
        "quantity": 20,
        "description": "Este es el decimo producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
        "category": ["Electrónicos", "Tecnología"],
        "currency": "USD",
        "company": "5f8a0a5b6e95510f8c6d1a16"
      }
    // const productDetail = useSelector(state => state.productDetail);

    return (
        <div className="grid grid-cols-2 gap-4 m-10 bg-white rounded-2xl">
            <img className="m-10 rounded-xl" src={productDetail.image.url} alt={`imagen de ${productDetail.name}`}/>
            <div>
                <div className="grid grid-cols-4">
                    <img className="w-32 mt-6 " src = {logoFlecha} alt="imagen flecha"/>
                    <div className="col-span-3 my-7">
                        <h1 className="text-2xl font-semibold">Detalles de {productDetail.name}</h1>
                        <div className="flex flex-row justify-content text-lg">
                            {productDetail.category.length && productDetail.category.map((c)=> <h3>{c}</h3>)}
                        </div>
                    </div>

                    <p className="border border-gray-200 rounded-xl col-span-3 col-end-5 text-sm p-4 mr-7 mb-7 shadow shadow-gray-500">{productDetail.description}</p>
                </div>
 
                <div className="flex flex-row justify-around text-lg font-semibold">
                    <h3>Stock Disponible: {productDetail.quantity}</h3>
                    <h3>Precio: {productDetail.price} {productDetail.currency}</h3>
                </div>
            </div>
        </div>
    )
}

export default Detail;