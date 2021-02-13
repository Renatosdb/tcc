// criando data layer pra manter informacao no checkout page
// keep track dos usuarios e carrinho
// basicamente criar variaveis globais que envolvem o React app ao inves de passar props do parent pro child...

import React, { createContext, useContext, useReducer } from "react";

// Data layer abaixo
export const StateContext = createContext();

// Criar provedor pra abracar o app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);