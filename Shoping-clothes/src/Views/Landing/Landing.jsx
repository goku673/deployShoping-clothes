import React, { useRef, useState, useEffect } from "react";
import One from "./One";
import Two from "./Two";
import About from "./About";

const Landing = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const components = [Two, One, About];
  const containerRef = useRef(null);
  let isScrolling = false;

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      if (!isScrolling) {
        isScrolling = true;
        const delta = event.deltaY;

        if (delta > 0) {
          setCurrentComponent((prev) => Math.min(prev + 1, components.length - 1));
        } else if (delta < 0) {
          setCurrentComponent((prev) => Math.max(prev - 1, 0));
        }

        setTimeout(() => {
          isScrolling = false;
        }, 850); 
      }
    };

    const containerElement = containerRef.current;
    containerElement.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      containerElement.removeEventListener("wheel", handleScroll);
    };
  }, []);


  return (
    <div ref={containerRef} style={{ height: "100vh", overflow: "hidden" }} className="bg-gray-800">
      {components.map((Component, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100%",
            transform: `translateY(-${currentComponent * 100}vh)`,
            transition: "transform 0.7s ease",
          }}
        >
          <Component />
        </div>
      ))}
    </div>
  );
};

export default Landing;
