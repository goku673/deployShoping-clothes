import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const One = () => {

  const navigate = useNavigate();

  return (
    <div id="one" className="font-kanit">
      <Splide options={{ type: "slide", perPage: 1, speed: 1250, rewind: true }}>
        <SplideSlide>
          <div className="h-screen relative">
            <img
              src="https://im.uniqlo.com/global-cms/spa/resf4a0180a90ba62ffac27b182806e0d42fr.jpg"
              alt="Imagen 1"
              className="min-h-full w-full"
            />
             <div className="position-absolute top-50 start-20 translate-middle-y text-center text-white p-4">
              <h2 className="display-4 mb-4" style={{ fontWeight: "bold" }}>Cozy Up in Style</h2>
              <p className="lead" style={{ fontWeight: "bold" }}>Perfect for chilly autumn days and beyond.</p>
              <button onClick={()=>navigate('/home')} className="btn btn-dark btn-xl btn-lg" style={{ fontWeight: "bold" }}>Explore Wool Coats</button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="h-screen flex justify-center items-center">
            <img
              src="https://im.uniqlo.com/global-cms/spa/res14d4f3130de0a49816a9f42c76de003bfr.jpg"
              alt="Imagen 2"
              className="min-h-full w-full"
            />
            <div className="position-absolute top-50 start-20 translate-middle-y text-center text-white p-4">
              <h2 className="display-4 mb-4" style={{ fontWeight: "bold" }}>Fall Jackets Collection</h2>
              <p className="lead" style={{ fontWeight: "bold" }}>Stay on-trend and cozy with our collection of autumn jackets. </p>
              <button onClick={()=>navigate('/home')} className="btn btn-dark btn-xl btn-lg" style={{ fontWeight: "bold" }}>See Jackets</button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="h-screen flex justify-center items-center">     
            <img
              src="https://im.uniqlo.com/global-cms/spa/resab60cafe1e5c00e28ecbf5e53a244c92fr.jpg"
              alt="Imagen 3"
              className="min-h-full w-full"
            />
             <div className="position-absolute top-50 start-20 translate-middle-y text-center text-white p-4">
              <h2 className="display-4 mb-4" style={{ fontWeight: "bold" }}>Sweater Weather Vibes</h2>
              <p className="lead" style={{ fontWeight: "bold" }}>mbrace the charm of autumn with our comfy sweaters.</p>
              <button onClick={()=>navigate('/home')} className="btn btn-dark btn-xl btn-lg" style={{ fontWeight: "bold" }}>View More</button>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="h-screen flex justify-center items-center">
            <img
               src="https://im.uniqlo.com/global-cms/spa/res92a181d809ac0715f7cb9fcabcbe39a7fr.jpg"
              alt="Imagen 4"
              className="min-h-full w-full"
            />
             <div className="position-absolute top-50 start-20 translate-middle-y text-center text-white p-4">
              <h2 className="display-4 mb-4 bold" style={{ fontWeight: "bold" }}>Autumn Essentials</h2>
              <p className="lead" style={{ fontWeight: "bold" }}>Fall in love with autumn fashion! Discover our collection of warm accessories.</p>
              <button onClick={()=>navigate('/home')} className="btn btn-dark btn-xl btn-lg" style={{ fontWeight: "bold" }}>Shop Autumn Styles</button>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default One;
