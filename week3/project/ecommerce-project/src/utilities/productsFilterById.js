const productsFilterById = (products, favProductsIdArray) => {
  let finalProductsArray = [];
  let filterArray = [];
  favProductsIdArray.map((favProductId) => {
    filterArray = products.filter((product) => product.id === favProductId);
    filterArray.map((item) => {
      finalProductsArray = [...finalProductsArray, item];
    });
  });
  return finalProductsArray;
};
export default productsFilterById;
