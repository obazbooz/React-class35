import React, { useContext } from 'react';
import { FavContext } from '../FavContext';
import useFetch from '../useFetch';
import productsFilterById from '../productsFilterById';
import ProductsItem from './productItem.js';

function FavProductItem(props) {
  const [favorite] = useContext(FavContext);

  const productDetailsApi = `https://fakestoreapi.com/products`;
  const { data } = useFetch(productDetailsApi);
  const favoriteProductData = productsFilterById(data, favorite);

  return (
    <li className="favProductContainer">
      <div style={{ margin: '10px' }}>
        <ul className="products">
          {favoriteProductData.map((product, index) => (
            <div key={index} className="productCard">
              <ProductsItem product={product} />
            </div>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default FavProductItem;
