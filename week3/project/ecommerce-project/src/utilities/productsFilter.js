const productsFilter = (selectedCategory, allProducts) => {
  let productsArray = [];
  if (selectedCategory === 'All') {
    productsArray = allProducts;
  } else {
    productsArray = allProducts.filter(
      (product) => product.category === selectedCategory,
    );
  }
  return productsArray;
};
export default productsFilter;
