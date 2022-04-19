import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  Link,
} from 'react-router-dom';

function ProductsItem({ product: { id, title, description, image } }) {
  return (
    <li className='productContainer'>
      <Link to={`/product/${id}`}>
        <img className="productImg" src={image} alt={title} />
        <p className="productDesc">{description}</p>
      </Link>
    </li>
  );
}

export default ProductsItem;
