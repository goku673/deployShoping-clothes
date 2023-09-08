import React, { useContext, useState, useEffect } from "react";
import { ShopingContext } from "../Context/ContextShoping";
import { ContextoOscuro } from "../Context/ContextModoOscuro";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { RegistroContext } from "../Context/ContextRegistro";


const Carrito = () => {
  const { cart, removeFromCart, emptyCart } = useContext(ShopingContext);
  const { dark } = useContext(ContextoOscuro);
  const { name, email, password, } = useContext(RegistroContext);
  const navigate = useNavigate();


  const [cartItems, setCartItems] = useState(
    cart.map((product) => ({ ...product, quantity: 1 }))
  );

  const cardClass = dark
    ? 'bg-gray-900 text-white border border-black '
    : 'bg-gray-100 text-gray-800 border border-gray-200';

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const handleIncreaseQuantity = (productId) => {

    const updatedCart = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleDecreaseQuantity = (productId) => {

    const updatedCart = cartItems.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };


  const handleBuy = () => {
    if (name && email && password) {
      Swal.fire("Compra exitosa!", "Gracias por tu compra.", "success").then(() => {
        navigate("/home");
        emptyCart();
      });
    } else {
      Swal.fire({
        text: 'Debe registrarse para poder comprar',
        icon: 'info',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        navigate("/form");
      });
    }


  };

  return (
    <div className={`min-h-screen h-auto pt-4 pb-8 flex flex-col lg:flex-row justify-center items-center lg:items-start ${cardClass}`}>
      <div className="space-y-4 lg-4">
        {cartItems.map((product) => (
          <div
            key={product.id}
            className={dark ? "bg-gray-400 p-4 border rounded shadow-md max-w-2xl mx-auto flex items-center" : "bg-white p-4 border rounded shadow-md max-w-2xl mx-auto flex items-center"}>
            <div className="w-1/3">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
            </div>
            <div className="w-2/3 ml-4">
              <p className="text-lg font-semibold mb-2">{product.title}</p>
              <p className="text-gray-700 mb-2">${product.price}</p>
              <p className="text-gray-700 mb-2">{product.category}</p>
              <div className="flex items-center">
                <div className="flex items-center">
                  <button className="bg-gray-900 text-white px-2 py-1 rounded hover:bg-blue-900" onClick={() => handleDecreaseQuantity(product.id)}> - </button>
                  <span className="mx-2 ">{product.quantity}</span>
                  <button className="bg-gray-900 text-white px-2 py-1 rounded hover:bg-blue-900" onClick={() => handleIncreaseQuantity(product.id)}>  + </button>
                </div>
                <div className="inline-block" onClick={() => handleRemoveItem(product.id)}>
                  <button className="bg-white text-xs text-blue-800 px-2 py-2 rounded ml-4 mt-2" onClick={() => removeFromCart(product.id)}>
                    | Eliminar |
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cart.length === 0 ? (
        <div className="text-center ">
          <p className="text-2xl font-semibold mb-2 pb-2">Tu carrito está vacío.</p>
          <button
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-900"
            onClick={() => navigate("/home")}
          >
            Volver a Home
          </button>
        </div>
      ) : (
        <div className={dark ? "bg-gray-400 p-4 border rounded shadow-md w-80 ml-20 justify-content mt-4 lg:w-66 lg:mt-24" : "bg-white p-4 border rounded shadow-md w-80 ml-20 justify-content mt-4 lg:w-66 lg:mt-24"}>
          <p className="text-sm font-semibold mb-2">Productos ({cartItems.length})</p>
          <p className="text-xl font-semibold mb-2 pb-2">Precio Total: ${totalPrice.toFixed(2)} </p>
          <button className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-900" onClick={handleBuy}>Comprar</button>
        </div>
      )}
    </div>
  );

}

export default Carrito;