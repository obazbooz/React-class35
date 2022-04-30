import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductItemDetails from './productItemDetails.js';

function ProductsItem({ product: { id, title, description, image } }) {
  return (
    (
      <Router>
        <Routes>
          <Route path="/product/:id" element={<ProductItemDetails />} />
        </Routes>
      </Router>
    ),
    (
      <li className="productContainer">
        <Link to={`/product/${id}`}>
          <img className="productImg" src={image} alt={title} />
          <p className="productDesc">{description}</p>
        </Link>
      </li>
    )
  );
}

export default ProductsItem;
