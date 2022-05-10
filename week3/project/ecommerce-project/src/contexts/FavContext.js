import React, { useState, createContext } from 'react';

export const FavContext = createContext();

export const FavProvider = (props) => {
  const [favorite, setFavorite] = useState([]);
  return (
    <FavContext.Provider value={{favorite, setFavorite}}>
      {props.children}
    </FavContext.Provider>
  );
};
