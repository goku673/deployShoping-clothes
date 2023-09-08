import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useNavigate } from "react-router-dom";

const Two = () => {

  const navigate = useNavigate();

  return (
    <div id="two" className="font-kanit">
    <Splide options={{ type: "slide", perPage: 1, speed: 1250, rewind:true }}>
      <SplideSlide>
        <div className="h-screen flex justify-center items-center"> 
          <img
             src="https://im.uniqlo.com/global-cms/spa/res6212a4d6f5f7dc214368ad5f6a1acbfafr.jpg"              
            alt="Imagen 1"    
            className="min-h-full w-full"
          />
          <div className="position-absolute top-50 start-40 translate-middle-y text-center text-white p-4">
              <h2 className="display-4 mb-4" style={{ fontWeight: "bold" }}>Latest Arrivals</h2>
              <p className="lead" style={{ fontWeight: "bold" }}>Explore our newest collection of trendy clothing.</p>
              <button onClick={()=>navigate('/home')} className="btn btn-dark btn-xl btn-lg" style={{ fontWeight: "bold" }}>Shop Now</button>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="h-screen flex justify-center items-center">
          <img
            src="https://im.uniqlo.com/global-cms/spa/resa070a891d6302d5b44a7cd9883981d5ffr.jpg"
            alt="Imagen 2"
            className="min-h-full w-full"
          />
          <div className="position-absolute top-50 start-40 translate-middle-y text-center text-white p-4">
              <h2 className="display-4 mb-4" style={{ fontWeight: "bold" }}>Fall/Winter Collection</h2>
              <p className="lead" style={{ fontWeight: "bold" }}>Stay cozy and stylish this season with our winter fashion.</p>
              <button onClick={()=>navigate('/home')} className="btn btn-dark btn-xl btn-lg" style={{ fontWeight: "bold" }}>View More</button>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="h-screen flex justify-center items-center">    
          <img
            src="https://im.uniqlo.com/global-cms/spa/res254ed4634afa501498ab2c7281344f57fr.jpg"
            alt="Imagen 3"
            className="min-h-full w-full"
          />
          <div className="position-absolute top-50 start-40 translate-middle-y text-center text-white p-4">
              <h2 className="display-4 mb-4" style={{ fontWeight: "bold" }}>Special Offers</h2>
              <p className="lead" style={{ fontWeight: "bold" }}>Don't miss out on our limited-time deals and discounts.</p>
              <button onClick={()=>navigate('/home')} className="btn btn-dark btn-xl btn-lg" style={{ fontWeight: "bold" }}>View Offers</button>
            </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="h-screen flex justify-center items-center">
          <img
           src="https://im.uniqlo.com/global-cms/spa/res7d6a10a892d108d7645c81224d4236b6fr.jpeg"
            alt="Imagen 4"
            className="min-h-full w-full"
          />
          <div className="position-absolute top-50 start-40 translate-middle-y text-center text-white p-4">
              <h2 className="display-4 mb-4" style={{ fontWeight: "bold" }}>New Pants!</h2>
              <p className="lead" style={{ fontWeight: "bold" }}>Discover the timeless allure of our jeans collection.</p>
              <button onClick={()=>navigate('/home')} className="btn btn-dark btn-xl btn-lg" style={{ fontWeight: "bold" }}>Go to Shop</button>
            </div>
        </div>
      </SplideSlide>
    </Splide>
    </div>
  );
};

export default Two;
