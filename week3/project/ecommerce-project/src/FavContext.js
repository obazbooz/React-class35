import React, { useState, createContext } from 'react';

export const FavContext = createContext();

export const FavProvider = (props) => {
  const [favourite, setFavourite] = useState([]);
  return (
    <FavContext.Provider value={[favourite, setFavourite]}>
      {props.children}
    </FavContext.Provider>
  );
};
