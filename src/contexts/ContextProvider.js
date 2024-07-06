import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();



export const ContextProvider = ({ children }) => {
  const [invetory, setInvetory] = useState("Hello invetory");
  const [admin, setAdmin] = useState("hh");

  return (
    <StateContext.Provider
      value={{
        invetory,
        setInvetory,
        admin, 
        setAdmin
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
