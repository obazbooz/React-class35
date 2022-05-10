import React, { useState, useEffect } from 'react';
import Categories from './categories';
import Products from './products';

function Shop() {
  const categoriesApiUrl = 'https://fakestoreapi.com/products/categories';
  const productsApiUrl = 'https://fakestoreapi.com/products';
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);

  const setSelectedCategoryHandler = (category) => {
    if (category === 'All') {
      setSelectedCategory('All');
    } else {
      setSelectedCategory(category);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const categoriesApiResponse = await fetch(categoriesApiUrl);
        const categoriesApiData = await categoriesApiResponse.json();
        setAllCategories(categoriesApiData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsFail(true);
      }
    })();
    (async () => {
      try {
        const productsApiResponse = await fetch(productsApiUrl);
        const productsApiData = await productsApiResponse.json();
        setAllProducts(productsApiData);
        setIsLoading(false);
        setIsFail(false);
      } catch (error) {
        setIsFail(true);
        console.log(error);
      }
    })();
  }, [selectedCategory]);

  return (
    <div className="App">
      <h1 className="mainTitle">MEDIA OCEAN</h1>
      {isLoading && !isFail ? (
        <div>
          <img
            className="loadingImg"
            src="/isLoading.gif"
            alt="Loading Icon is not found!"
          />
        </div>
      ) : (
        <div>
          <Categories
            setSelectedCategoryHandler={setSelectedCategoryHandler}
            allCategories={allCategories}
            selectedCategory={selectedCategory}
          />
          <Products
            selectedCategory={selectedCategory}
            allProducts={allProducts}
          />
        </div>
      )}
      <div>
        {isFail && (
          <div> Unable to get data from server please try again later :''</div>
        )}
      </div>
    </div>
  );
}

export default Shop;
