import { useState, useEffect, useContext } from 'react';
import { LoadingContext } from './loadingContext';

const useFetchProducts = (url) => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading, isFail, setIsFail] =
    useContext(LoadingContext);
  useEffect(() => {
    (async () => {
      try {
        const fetchApiUser = await fetch(url);
        const fetchedData = await fetchApiUser.json();
        setAllProducts(fetchedData);
        setIsLoading(false);
        setIsFail(false);
      } catch (error) {
        setIsFail(true);
        console.log(error);
      }
    })();
  }, []);

  return { allProducts };
};

export default useFetchProducts;
