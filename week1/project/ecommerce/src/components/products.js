import allProducts from '../fake-data/all-products.js';

function ProductsItem({ product: { title, description, image } }) {
  return (
    <li className="productCard">
      <img className="productImg" src={image} alt={title} />
      <p className="productDesc">{description}</p>
    </li>
  );
}

function Products({ selectedCategory }) {
  if (selectedCategory === 'All') {
    return (
      <ul className="products">
        {allProducts.map((product) => (
          <ProductsItem product={product} />
        ))}
      </ul>
    );
  } else {
    let categoryProducts = allProducts.filter(
      (product) => product.category === selectedCategory,
    );
    return (
      <ul className="products">
        {categoryProducts.map((product) => (
          <ProductsItem product={product} />
        ))}
      </ul>
    );
  }
}

export default Products;
