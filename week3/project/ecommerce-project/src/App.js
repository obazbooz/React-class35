import { useState, useContext } from 'react';
import Categories from './components/categories.js';
import Products from './components/products.js';
import useFetchProducts from './useFetchProducts';
import useFetchCategories from './useFetchCategories';
import './App.css';
import { LoadingContext } from './loadingContext';
import { Link } from 'react-router-dom';
import Navigation from './components/navigation';

function App() {
  const categoriesApiUrl = 'https://fakestoreapi.com/products/categories';
  const productsApiUrl = 'https://fakestoreapi.com/products';
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [isLoading, setIsLoading, isFail, setIsFail] =
    useContext(LoadingContext);

  /************************************************** */

  const setSelectedCategoryHandler = (category) => {
    if (category === 'All') {
      setSelectedCategory('All');
    } else {
      setSelectedCategory(category);
    }
  };

  const { allCategories } = useFetchCategories(categoriesApiUrl);
  const { allProducts } = useFetchProducts(productsApiUrl);
  return (
    <div className="App">
      {/* <nav className="navContainer">
        <h1 className="mainTitle">MEDIA OCEAN</h1>
        <div className="navElements">
          <Link to={'/favorite'}>Favorites</Link>
          <Link to={'/'}>Products</Link>
        </div>
      </nav> */}
      <Navigation />
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
        ''
      )}
    </div>
  );
}

export default App;
