import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../FavContext';
import heartRegular from '../icons/heartRegular.svg';
import heartSolid from '../icons/heartSolid.svg';

function ProductsItem({ product: { id, title, description, image } }) {
  const [favorite, setFavorite] = useContext(FavContext);
  const [favoriteClicked, setFavoriteClicked] = useState(false);

  const toggleFav = (productId) => {
    const isProductInFavoriteList = favorite.includes(productId);
    if (!isProductInFavoriteList) {
      setFavorite(() => {
        return [...favorite, productId];
      });
      setFavoriteClicked(true);
    } else {
      const unmountProductIdtFavoriteArray = favorite.filter(
        (favProduct) => favProduct !== productId,
      );
      setFavoriteClicked(false);
      setFavorite(unmountProductIdtFavoriteArray);
    }
  };

  return (
    <li className="productContainer">
      <img
        className="favoriteIcon"
        src={favoriteClicked ? heartSolid : heartRegular}
        alt={'Product not found!'}
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
