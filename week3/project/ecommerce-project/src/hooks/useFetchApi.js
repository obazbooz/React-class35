import { useState, useEffect, useContext } from 'react';
import { LoadingContext } from '../contexts/loadingContext';

const useFetchApi = (url) => {
  const [data, setData] = useState([]);
  const { setIsLoading, setIsFail } = useContext(LoadingContext);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const fetchApi = await fetch(url);
        const fetchedData = await fetchApi.json();
        setData(fetchedData);
        setIsLoading(false);
        setIsFail(false);
      } catch (error) {
        setIsFail(true);
        console.log(error);
      }
    })();
  }, [url, setIsFail, setIsLoading]);

  return data;
};

export default useFetchApi;
