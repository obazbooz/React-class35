import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import heartRegular from '../icons/heartRegular.svg';
import { FavContext } from '../FavContext';

function ProductsItem({ product: { id, title, description, image } }) {
  const [favorite, setFavorite] = useContext(FavContext);

  const toggleFav = (productId) => {
    // setFavorite(() => {
    //   return [...favorite, productId];
    // });
    const isProductInFavoriteList = favorite.includes(productId);
    if (!isProductInFavoriteList) {
      setFavorite(() => {
        return [...favorite, productId];
      });
    } else {
      const unmountProductIdtFavoriteArray = favorite.filter(
        (favProduct) => favProduct !== productId,
      );
      setFavorite(unmountProductIdtFavoriteArray);
    }
  };

  return (
    <li className="productContainer">
      <img
        className="favoriteIcon"
        src={heartRegular}
        onClick={() => {
          toggleFav(id);
        }}
      />
      <Link to={`/product/${id}`}>
        <img className="productImg" src={image} alt={title} />
        <p className="productDesc">{description}</p>
      </Link>
    </li>
  );
}

export default ProductsItem;
