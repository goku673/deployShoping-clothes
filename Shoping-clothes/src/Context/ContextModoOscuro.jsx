import React, { createContext, useState } from "react";

export const  ContextoOscuro = createContext();


const ProveedorModoOscuro =  (props) => {
   const [dark,setDark] = useState(false);
   return (
    <ContextoOscuro.Provider value={{dark,setDark}}>
     {props.children}
    </ContextoOscuro.Provider>
   )

}

export default ProveedorModoOscuro;



