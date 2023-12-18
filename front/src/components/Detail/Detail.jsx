import React from "react";
import {useSelector} from "react-redux";
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
    const company = useSelector(state => state.company.company);
    const logo = company.image ? company.image : logoFlecha

    

    return (
        <div className="grid grid-cols-2 gap-4 m-10">
            <img className="m-10 rounded-xl" src={productDetail.image.url} alt={`imagen de ${productDetail.name}`}/>
            <div>
                <div className="grid grid-cols-4">
                    <img className="w-32 h-auto rounded-full mt-6 " src = {logo} alt="imagen flecha"/>
                    <div className="col-span-3 my-7">
                        <h1 className="text-3xl text-gray-500 font-barlow-condensed font-semibold">Detalles de {productDetail.name}</h1>
                        <div className="flex flex-row justify-content text-lg font-roboto">
                            {productDetail.category.length && productDetail.category.map((c)=> <h3>{c}</h3>)}
                        </div>
                    </div>

                    <p className="font-roboto border border-gray-200 rounded-xl col-span-3 col-end-5 text-sm p-4 mr-10 mb-6 -mt-4 shadow shadow-gray-500">{productDetail.description}</p>
                </div>
                <div className="flex flex-row justify-evenly ml-24 text-lg font-semibold text-[#00bcd4]">
                    <h3>Stock Disponible: {productDetail.quantity}</h3>
                    <h3>Precio: {productDetail.price} {productDetail.currency}</h3>
                </div>
            </div>
        </div>
    )
}

export default Detail;