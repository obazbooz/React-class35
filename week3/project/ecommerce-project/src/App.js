import { useState, useEffect } from 'react';
import Categories from './components/categories.js';
import Products from './components/products.js';
import useFetch from './useFetch';
import './App.css';

function App() {
  const categoriesApiUrl = 'https://fakestoreapi.com/products/categories';
  const productsApiUrl = 'https://fakestoreapi.com/products';
  const [allCategories, setAllCategories] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  // const [isLoading, setIsLoading] = useState(true);
  // const [isFail, setIsFail] = useState(false);
  /************************************************** */
  const setSelectedCategoryHandler = (category) => {
    if (category === 'All') {
      setSelectedCategory('All');
    } else {
      setSelectedCategory(category);
    }
  };

  const { categoriesApiData, isLoading, isFail } = useFetch(categoriesApiUrl);
  const { productsApiData, isLoading, isFail } = useFetch(productsApiUrl);

  useEffect(() => {
    setAllCategories(categoriesApiData);
    setAllProducts(productsApiData);
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const categoriesApiResponse = await fetch(categoriesApiUrl);
  //       const categoriesApiData = await categoriesApiResponse.json();
  //       setAllCategories(categoriesApiData);
  //       setIsLoading(false);
  //       // setTimeout(() => {
  //       // }, 2000);
  //     } catch (error) {
  //       console.log(error);
  //       setIsFail(true);
  //     }
  //   })();
  //   (async () => {
  //     try {
  //       const productsApiResponse = await fetch(productsApiUrl);
  //       const productsApiData = await productsApiResponse.json();
  //       setAllProducts(productsApiData);
  //       setIsLoading(false);
  //       setIsFail(false);
  //       // setTimeout(() => {
  //       // }, 2000);
  //     } catch (error) {
  //       setIsFail(true);
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  return (
    <div className="App">
      <h1 className="mainTitle">MEDIA OCEAN</h1>
      {isLoading && !isFail ? (
        <div>
          <img
            className="loadingImg"
            src="/isloading.gif"
            alt="Image not found!"
          />
        </div>
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
      {isFail ? (
        <div> Unable to get data from server please try again later</div>
      ) : (
        'Products found'
      )}
    </div>
  );
}

export default App;
