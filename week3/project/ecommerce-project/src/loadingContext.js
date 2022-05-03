import React, { useState, createContext } from 'react';

export const LoadingContext = createContext();

export const LoadingProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);

  return (
    <LoadingContext.Provider
      value={[isLoading, setIsLoading, isFail, setIsFail]}
    >
      {props.children}
    </LoadingContext.Provider>
  );
};
