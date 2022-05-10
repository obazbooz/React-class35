import React, { useState, useContext } from 'react';
import Categories from './categories';
import Products from './products';
import Navigation from './navigation';
import useFetchApi from '../hooks/useFetchApi';
import { LoadingContext } from '../contexts/loadingContext';

function App() {
  const categoriesApiUrl = 'https://fakestoreapi.com/products/categories';
  const productsApiUrl = 'https://fakestoreapi.com/products';
  const [selectedCategory, setSelectedCategory] = useState('All');

  const {isLoading,  isFail} =
    useContext(LoadingContext);

  const setSelectedCategoryHandler = (category) => {
    if (category === 'All') {
      setSelectedCategory('All');
    } else {
      setSelectedCategory(category);
    }
  };
  const allCategories = useFetchApi(categoriesApiUrl);
  const allProducts = useFetchApi(productsApiUrl);

  return (
    <div className="App">
      <Navigation />
      {isLoading && !isFail ? (
        <div>
          <img
            className="loadingImg"
            src="/isloading.gif"
            alt="Loading icon not found!"
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

export default App;
