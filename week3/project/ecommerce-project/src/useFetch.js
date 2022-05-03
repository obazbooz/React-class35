import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const fetchApiUser = await fetch(url);
        const fetchedData = await fetchApiUser.json();
        setData(fetchedData);
        setIsLoading(false);
        setIsFail(false);
      } catch (error) {
        setIsFail(true);
        console.log(error);
      }
    })();
  }, []);

  return { data, isLoading, isFail };
};

export default useFetch;
