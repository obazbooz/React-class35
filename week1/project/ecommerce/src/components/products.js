import allProducts from '../fake-data/all-products.js';
import ProductsItem from './productItem.js';

function Products({ selectedCategory }) {
  if (selectedCategory === 'All') {
    return (
      <ul className="products">
        {allProducts.map((product, index) => (
          <div key={index} className="productCard">
            <ProductsItem product={product} />
          </div>
        ))}
      </ul>
    );
  } else {
    let categoryProducts = allProducts.filter(
      (product) => product.category === selectedCategory,
    );
    return (
      <ul className="products">
        {categoryProducts.map((product, index) => (
          <div key={index} className="productCard">
            <ProductsItem product={product} />
          </div>
        ))}
      </ul>
    );
  }
}

export default Products;
