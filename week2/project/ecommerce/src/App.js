import { useState, useEffect } from 'react';
import Categories from './components/categories.js';
import Products from './components/products.js';
import './App.css';

function App() {
  const categoriesApiUrl = 'https://fakestoreapi.com/products/categories';
  const productsApiUrl = 'https://fakestoreapi.com/products';
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [isFail, setIsFail] = useState(false);
  /************************************************** */
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
        console.log(productsApiData);
        setAllProducts(productsApiData);
        setIsLoading(false);
      } catch (error) {
        setIsFail(true);
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1 className="mainTitle">MEDIA OCEAN</h1>
      {isFail ? (
        <div> Unable to get data Please check the requested link</div>
      ) : (
        ''
      )}
      {isLoading ? (
        <div>Data is loading.... Please waite.</div>
      ) : (
        <div>
          <Categories
            setSelectedCategoryHandler={setSelectedCategoryHandler}
            allCategories={allCategories}
          />
          <Products
            selectedCategory={selectedCategory}
            allProducts={allProducts}
          />
        </div>
      )}
    </div>
  );
}

export default App;
