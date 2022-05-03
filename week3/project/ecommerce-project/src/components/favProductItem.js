import React, { useContext } from 'react';
import { FavContext } from '../FavContext';
import useFetchProducts from '../useFetchProducts';
import productsFilterById from '../productsFilterById';
import ProductsItem from './productItem.js';
import { Link } from 'react-router-dom';
import Navigation from './navigation';

function FavProductItem(props) {
  const [favorite] = useContext(FavContext);

  const productDetailsApi = `https://fakestoreapi.com/products`;
  const { allProducts } = useFetchProducts(productDetailsApi);
  const favoriteProductData = productsFilterById(allProducts, favorite);
  return (
    <div className="favProductContainer">
      {/* <nav className="navContainer">
        <h1 className="mainTitle">MEDIA OCEAN - Favorites</h1>
        <div className="navElements">
          <Link to={'/favorite'}>Favorites</Link>
          <Link to={'/'}>Products</Link>
        </div>
      </nav> */}
      <Navigation />
      {favorite.length === 0 ? (
        <p>No products in the favorites list</p>
      ) : (
        <div style={{ margin: '10px' }}>
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
