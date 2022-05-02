import React, { useContext, useState, useEffect } from 'react';
import { FavContext } from '../FavContext';

function FavProductItem(props) {
  const [favourite, setFavourite] = useContext(FavContext);
  const [FavprodoctDetails, setFavProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);

  useEffect(() => {
    favourite.map(async (id) => {
      const productDetailsApi = `https://fakestoreapi.com/products/${id}`;
      try {
        const productDetailsApiRequest = await fetch(productDetailsApi);
        const favProductDetailsData = await productDetailsApiRequest.json();
        setFavProductDetails(favProductDetailsData);
        setIsLoading(false);
        setIsFail(false);
        // setTimeout(() => {
        // }, 2000);
      } catch (error) {
        console.log(error);
        setIsFail(true);
      }
    }, []);
  });

  return (
    { (FavprodoctDetails === null) ? <p> no fav</p> : <li className="favProductContainer">
    <img
      className="productImg"
      src={FavprodoctDetails.image}
      alt={FavprodoctDetails.title}
    />
    <p className="productDesc">{FavprodoctDetails.description}</p>
  </li> }

  );
}

export default FavProductItem;
