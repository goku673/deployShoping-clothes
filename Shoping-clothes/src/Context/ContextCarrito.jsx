import React, { createContext, useState } from "react";
const ContextCarrito = createContext();

export default function ProveedorCarrito({children}){
    

    const [data, setData] = useState("Este es el dato del contexto");

    return(
        <ContextCarrito.Provider value={{data, setData}}>
            {children}
        </ContextCarrito.Provider>
    )
}





