import { useState, useEffect, useContext } from 'react';
import { LoadingContext } from './loadingContext';

const useFetchProductById = (url) => {
  const [productDetails, setProductDetails] = useState([]);
  const [isLoading, setIsLoading, isFail, setIsFail] =
    useContext(LoadingContext);

  useEffect(() => {
    (async () => {
      try {
        const productDetailsApiRequest = await fetch(url);
        const productDetailsData = await productDetailsApiRequest.json();
        setProductDetails(productDetailsData);
        setIsLoading(false);
        setIsFail(false);
      } catch (error) {
        console.log(error);
        setIsFail(true);
        setIsLoading(true);
      }
    })();
  }, []);

  return { productDetails };
};

export default useFetchProductById;
