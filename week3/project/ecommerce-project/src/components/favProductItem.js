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
      {favorite.length === 0 && <p>No products in the favorites list yet.</p>}
      {isLoading && !isFail ? (
        <div>
          <img
            className="loadingImg"
            src="/isloading.gif"
            alt="Loading icon not found!"
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
        </div>
      )}
    </div>
  );
}

export default FavProductItem;
