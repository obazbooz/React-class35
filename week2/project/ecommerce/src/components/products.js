import ProductsItem from './productItem.js';
import productsFilter from '../productsFilter.js';

function Products({ selectedCategory , allProducts }) {
  const products = productsFilter(selectedCategory ,allProducts);
  return (
    <ul className="products">
      {products.map((product, index) => (
        <div key={index} className="productCard">
          <ProductsItem product={product} />
        </div>
      ))}
    </ul>
  );
}

export default Products;
