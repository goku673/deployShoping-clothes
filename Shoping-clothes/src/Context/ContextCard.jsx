import React, { createContext, useState } from "react";
//COPY STATE

export const CardsContext = createContext();

const ProveedorCards = (props) => {
    const [cards, setCards] = useState([]);
    return (
        <CardsContext.Provider value={{ cards,setCards}}>
         {props.value}
        </CardsContext.Provider>
    )
}


export default ProveedorCards;