import { useState, useEffect, useContext } from 'react';
import { LoadingContext } from './loadingContext';

const useFetchCategories = (url) => {
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading, isFail, setIsFail] =
    useContext(LoadingContext);
  useEffect(() => {
    (async () => {
      try {
        const fetchApiUser = await fetch(url);
        const fetchedData = await fetchApiUser.json();
        setAllCategories(fetchedData);
        setIsLoading(false);
        setIsFail(false);
      } catch (error) {
        setIsFail(true);
        setIsLoading(true);
        console.log(error);
      }
    })();
  }, []);

  return { allCategories };
};

export default useFetchCategories;
