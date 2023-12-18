import React from "react";

const InventarioList = () => {
    return (
        <div>
            <div className="grid grid-cols-11">
                {/* este div contiene los titulos del listado */}
                <h1>Estado</h1>
                <h1 className="col-span-2">Rubro-Categoria</h1>
                <h1 className="col-span-2">Nombre del Producto</h1>
                <h1>Moneda</h1>
                <h1>Precio</h1>
                <h1>Stock</h1>
                <h1 className="col-span-3">Acciones</h1>
            </div>
            <div>
               <h1>listado de los productos</h1> 
            </div>
        </div>
    )
}

export default InventarioList;