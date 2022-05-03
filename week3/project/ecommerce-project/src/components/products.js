import ProductsItem from './productItem.js';
import productsFilter from '../productsFilter.js';
import { Link } from 'react-router-dom';

function Products({ selectedCategory, allProducts }) {
  const products = productsFilter(selectedCategory, allProducts);
  return (
    <div>
      <div>
        <Link to={'/favorite'}>
          <button>fav</button>
        </Link>
      </div>
      <ul className="products">
        {products.map((product, index) => (
          <div key={index} className="productCard">
            <ProductsItem product={product} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Products;
