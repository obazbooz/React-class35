import React, { useContext } from 'react';
import { FavContext } from '../contexts/FavContext';
import { LoadingContext } from '../contexts/loadingContext';
import useFetchApi from '../hooks/useFetchApi';
import productsFilterById from '../utilities/productsFilterById';
import ProductsItem from './productItem.js';
import Navigation from './navigation';

function FavProductItem(props) {
  const { favorite } = useContext(FavContext);
  const { isLoading, isFail } = useContext(LoadingContext);

  const productDetailsApi = `https://fakestoreapi.com/products`;
  const allProducts = useFetchApi(productDetailsApi);
  const favoriteProductData = productsFilterById(allProducts, favorite);
  return (
    <div className="favProductContainer">
      <Navigation />
      {isLoading && !isFail ? (
        <div>
          <img
            className="loadingImg"
            src="/isLoading.gif"
            alt="Loading icon is not available!"
          />
        </div>
      ) : (
        <div>
          <ul className="products">
            {favoriteProductData.map((product, index) => (
              <div key={index} className="productCard">
                <ProductsItem product={product} />
              </div>
            ))}
          </ul>
          {favorite.length === 0 && (
            <p>No products in the favorites list yet.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FavProductItem;
