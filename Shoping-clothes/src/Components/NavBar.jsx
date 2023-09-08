import React, { useContext, useState } from "react";
import { FaHome, FaShoppingCart, FaBars, FaGalacticRepublic, FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RegistroContext } from '../Context/ContextRegistro';
import { ContextoOscuro } from "../Context/ContextModoOscuro";
import { ShopingContext } from "../Context/ContextShoping"; 

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { name, email, password, image, setEmail, setPassword, setName } = useContext(RegistroContext);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { dark, setDark } = useContext(ContextoOscuro);
  const { cart } = useContext(ShopingContext); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toLanding = () => {
    navigate("/");
  }

  const toHome = () => {
    navigate("/home");
  };

  const toCarrito = () => {
    navigate("/carrito");
  };

  const toForm = () => {
    navigate("/form");
  };

  const handleButton = () => {
    setIsProfileOpen(!isProfileOpen);
  }

  const handleLogout = () => {
    setEmail('');
    setPassword('');
    setName('');
    navigate('/')
  }

  return (
    <nav className="bg-gray-900 py-3">
      <div className="container flex items-center justify-between">
        <FaGalacticRepublic
          onClick={toLanding}
          className="text-white cursor-pointer"
          style={{ fontSize: "2.8rem" }}
        />

        <div className="hidden lg:flex items-center space-x-6">
          <span
            onClick={toHome}
            className="text-white cursor-pointer"
            style={{ fontSize: "2rem" }}
          >
            <FaHome className="mr-4" />
          </span>
          <span
            onClick={toCarrito}
            className="text-white cursor-pointer relative"
            style={{ fontSize: "2rem" }}
          >
            <FaShoppingCart className="mr-4" />
            {cart.length > 0 && ( 
              <span className="bg-red-500 text-white text-sm absolute top-0 right-0 rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </span>
          {name && email && password ? (
            <div className="flex items-center cursor-pointer" onClick={handleButton}>
              <span className="text-white text-base mr-2">{name}</span>
              <img src={image} alt="Profile" className="w-8 h-8 rounded-full" />
              {isProfileOpen && (
                <div className="bg-white p-4 rounded shadow absolute mt-80 ">
                  <img src={image} alt="Profile" className="w-16 h-16 rounded-full mx-auto mb-4" />
                  <p className="text-gray-800 text-lg mb-2 text-center">{name}</p>
                  <p className="text-gray-600 text-sm mb-4">{email}</p>
                  <button onClick={handleLogout} className="btn btn-dark btn-sm w-full">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={toForm} className="btn btn-dark btn-sm px-4" style={{ fontSize: "1.2rem", marginLeft: "2rem" }}> Register </button>
          )}

          {dark ? (
            <FaMoon className="text-blue-700  cursor-pointer" style={{ fontSize: "2rem" }} onClick={() => setDark(!dark)} />
          ) : (
            <FaSun className="text-yellow-500  cursor-pointer" style={{ fontSize: "2rem" }} onClick={() => setDark(!dark)} />
          )}
        </div>

        <button
          className="lg:hidden text-white text-2xl ml-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>

        {isMenuOpen && (
          <div
            className="lg:hidden absolute top-14 right-0 bg-gray-900 p-4 w-48 rounded-md shadow-lg"
            style={{ zIndex: 999 }}
          >
            <span
              onClick={toHome}
              className="text-white cursor-pointer block mb-2 flex flex-row items-center"
              style={{ fontSize: "1.5rem" }}
            >
              <FaHome className="mr-2" />
              Home
            </span>
            <span
              onClick={toCarrito}
              className="text-white cursor-pointer block mb-2 flex flex-row items-center relative"
              style={{ fontSize: "1.5rem" }}
            >
              <FaShoppingCart className="mr-2" />
              Cart
              {cart.length > 0 && ( 
                <span className="bg-red-500 text-white text-base absolute top-0 right-0 rounded-full px-1.5 font-kanit">
                  {cart.length}
                </span>
              )}
            </span>
            
          {dark ? (
            <FaMoon className="text-blue-700  cursor-pointer" style={{ fontSize: "2rem" }} onClick={() => setDark(!dark)} />
          ) : (
            <FaSun className="text-yellow-500  cursor-pointer" style={{ fontSize: "2rem" }} onClick={() => setDark(!dark)} />
          )}
            {name && email && password ? (
              <div className="mb-2">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={handleButton}
                >
                  <span className="text-white text-base mr-2">{name}</span>
                  <img
                    src={image}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </div>
                {isProfileOpen && (
                  <div className="bg-white p-4 rounded shadow">
                    <img src={image} alt="Profile" className="w-16 h-16 rounded-full mx-auto mb-4" />
                    <p className="text-gray-800 text-lg mb-2">{name}</p>
                    <p className="text-gray-600 text-sm mb-4">{email}</p>
                    <button onClick={handleLogout} className="btn btn-dark btn-sm w-full">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={toForm}
                className="btn btn-dark btn-sm w-full"
                style={{ fontSize: "1.2rem" }}
              >
                Register
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;