import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import heartRegular from '../icons/heartRegular.svg';
import { FavContext } from '../FavContext';

function ProductsItem({ product: { id, title, description, image } }) {
  const [favourite, setFavourite] = useContext(FavContext);

  const toggleFav = (id) => {
    setFavourite((prevFavIdArray) => [...prevFavIdArray, id]);
    console.log(favourite);
  };

  return (
    <li className="productContainer">
      <button
        onClick={() => {
          toggleFav(id);
        }}
      >
        <img src={heartRegular} style={{ width: '10px' }} />
      </button>
      <Link to={`/product/${id}`}>
        <img className="productImg" src={image} alt={title} />
        <p className="productDesc">{description}</p>
      </Link>
    </li>
  );
}

export default ProductsItem;
