import React from 'react';
import ProductsItem from './productItem.js';
import productsFilter from '../utilities/productsFilter.js';

function Products({ selectedCategory, allProducts }) {
  const products = productsFilter(selectedCategory, allProducts);
  return (
    <div className="app">
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
