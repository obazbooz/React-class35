// import allProducts from './fake-data/all-products.js';

const productsFilter = (selectedCategory, allProducts) => {
  let productsArray = [];
  if (selectedCategory === 'All') {
    productsArray = allProducts;
    return productsArray;
  } else {
    productsArray = allProducts.filter(
      (product) => product.category === selectedCategory,
    );
    return productsArray;
  }
};
export default productsFilter;
