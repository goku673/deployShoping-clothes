import React, { createContext, useState } from "react";


export const RegistroContext = createContext();


const ProveedorRegistro = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState('');
  const image = 'https://img2.freepng.es/20180602/ytc/kisspng-computer-icons-user-profile-male-logo-5b123ed1093740.8042409615279223850378.jpg';;

  return (
    <RegistroContext.Provider value={{ email, password, setEmail, setPassword,name,setName,image}}>
      {props.children}
    </RegistroContext.Provider>
  );
};


export default ProveedorRegistro;