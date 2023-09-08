import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import ProveedorRegistro from './Context/ContextRegistro.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProveedorCarrito from './Context/ContextCarrito.jsx'
import ProveedorShoping from './Context/ContextShoping.jsx'
import ProveedorCards from './Context/ContextCard.jsx'
import ProveedorModoOscuro from './Context/ContextModoOscuro.jsx'

ReactDOM.render(
  <BrowserRouter>
    
      <ProveedorCarrito>
        <ProveedorRegistro>
          <ProveedorShoping>
            <ProveedorModoOscuro>
               <App />
            </ProveedorModoOscuro>
          </ProveedorShoping>
        </ProveedorRegistro>
      </ProveedorCarrito>
   
  </BrowserRouter>,
  document.getElementById('root')
);