import React from 'react';
import { useContext } from 'react';
import { ContextoOscuro } from '../Context/ContextModoOscuro';
import { ShopingContext } from '../Context/ContextShoping';
import Swal from 'sweetalert2';

const Cards = ({ data }) => {
  const { dark } = useContext(ContextoOscuro);
  const { addToCart, cart } = useContext(ShopingContext);
  const cardClass = dark
    ? 'bg-gray-900 text-white border border-black '
    : 'bg-gray-100 text-gray-800 border border-gray-200';

    // data.map((item, index) => (
    //   <div key={index} className="rounded-lg shadow-md p-4">
    //     <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
    //     <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
    //     <p className="text-gray-300 mb-2">${item.price}</p>
    //     <p className="text-gray-500">{item.category}</p>
    //   </div>
    // ))
    const handleAddToCartClick = (product) => {
      const isProductInCart = cart.some((item) => item.id === product.id);
    
      if (isProductInCart) {
        Swal.fire({
          icon: 'warning',
          title: 'Este producto ya está en el carrito',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        addToCart(product);
        Swal.fire({
          icon: 'success',
          title: 'Producto añadido al carrito',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };

  return (
    <div className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${cardClass}`}>
      {  data.length === 0? 
      (<div className='flex  text-end'>No results of your search were found!!!!</div>)
      : (
        data.map((item, index) => (
          <div key={index} className={dark ? "rounded-lg shadow-xl shadow-black p-4" : "rounded-lg shadow-lg p-4" }>
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className={dark? "text-gray-300 mb-2 font-semibold" : "text-black-200 mb-2 font-semibold"}>${item.price}</p>
            <p className="text-gray-500">{item.category}</p>
            <button className={dark ? 'bg-blue-900 text-white px-4 py-2 rounded hover:bg-gray-800 font-semibold' : 'bg-gray-900 text-white px-4 py-2 rounded hover:bg-blue-900 font-semibold'} onClick={() => handleAddToCartClick(item)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
