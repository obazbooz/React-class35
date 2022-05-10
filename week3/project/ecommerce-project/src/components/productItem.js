import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../contexts/FavContext';
import heartRegular from '../icons/heartRegular.svg';
import heartSolid from '../icons/heartSolid.svg';

function ProductsItem({ product: { id, title, description, image } }) {
  const { favorite, setFavorite } = useContext(FavContext);

  const toggleFav = (productId) => {
    const isProductInFavoriteList = favorite.includes(productId);
    if (!isProductInFavoriteList) {
      setFavorite(() => {
        return [...favorite, productId];
      });
    } else {
      const filteredFavoriteArray = favorite.filter(
        (favProduct) => favProduct !== productId,
      );
      setFavorite(filteredFavoriteArray);
    }
  };

  const inFavorite = (productId) => {
    const productInFavorite = favorite.includes(productId);
    return productInFavorite;
  };

  return (
    <li className="productContainer">
      <img
        className="favoriteIcon"
        src={inFavorite(id) ? heartSolid : heartRegular}
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
