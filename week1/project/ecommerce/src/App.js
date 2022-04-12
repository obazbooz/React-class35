import { useState } from 'react';
import Categories from './components/categories.js';
import Products from './components/products.js';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const setSelectedCategoryHandler = (category) => {
    const categoryName = category.slice(6);
    setSelectedCategory(categoryName);
  };

  return (
    <div className="App">
      <h1 className='mainTitle'>MEDIA OCEAN</h1>
      <Categories setSelectedCategoryHandler={setSelectedCategoryHandler} />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
