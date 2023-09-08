import React, { useContext, useState } from 'react';
import { RegistroContext } from '../Context/ContextRegistro';
import { FiEyeOff, FiEye } from 'react-icons/fi'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const { email, password, setEmail, setPassword, name, setName } = useContext(RegistroContext);
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // registro finalizado 
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (email.length === 0 || name.length === 0) {
      alert('Complete todos los campos por favor');
      return;
    }
   
    if (!emailRegex.test(email)) {
      alert('El email no es válido');
      return;
    }

    if (password !== repeatPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }

    const numericCharacters = password.replace(/[^0-9]/g, '');
    if (numericCharacters.length < 2) {
      alert('La contraseña debe contener al menos 2 números');
      return;
    }
    // Petición HTTP para guardar en base de datos

    axios.post('http://localhost:3003/user/mgDB', {
      name,
      email,
      password
    }).then((response => {
      console.log(response.data);
      alert('usuario registrado con exito ')
      //  
      // despues de registrame ira a home 
      navigate('/home')
    })).catch((error => {
      console.error(error);
    }))
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Register</h1>
      <form onSubmit={handleSubmit} className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input 
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input 
            type="password"
            className="w-full px-3 py-2 border rounded-md"
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="repeatPassword" className="block text-sm font-medium">Repit Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md"
            id="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />  
        </div>

        <div className="col-span-full">
          <button  type="submit" className="w-full px-8 py-3  bg-gray-900 text-white rounded-md" >Log  in </button>
        </div>

      </form>
      
    </div>
  );
}

export default Registro;