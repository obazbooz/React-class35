import { useState } from 'react';
import './App.css';
import allCategories from './fake-data/all-categories.js';
import allProducts from './fake-data/all-products.js';

function Categories({
  selectedCategory,
  setSelectedCategoryHandler,
  selectedBtnColor,
  setSelectedBtnColor,
}) {
  return (
    <div className="categories">
      {allCategories.map((category) => (
        <CategoriesItem
          category={category}
          selectedCategory={selectedCategory}
          setSelectedCategoryHandler={setSelectedCategoryHandler}
          selectedBtnColor={selectedBtnColor}
          setSelectedBtnColor={setSelectedBtnColor}
        />
      ))}
    </div>
  );
}

function CategoriesItem({
  category,
  setSelectedCategoryHandler,
  selectedBtnColor,
  setSelectedBtnColor,
}) {
  return (
    <div>
      <button
        className={selectedBtnColor}
        onClick={() => {
          setSelectedCategoryHandler(category);
          setSelectedBtnColor((selectedBtnColor)=>selectedBtnColor === 'white'? 'gray' : 'white');
        }}
      >
        {category}
      </button>
    </div>
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

function ProductsItem({ product: { title, description, image } }) {
  return (
    <li className="productCard">
      <img className="productImg" src={image} alt={title} />
      <p className="productDesc">{description}</p>
    </li>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBtnColor, setSelectedBtnColor] = useState('white');

  const setSelectedCategoryHandler = (category) => {
    const categoryName = category.slice(6);
    setSelectedCategory(categoryName);
  };

  console.log(selectedCategory);
  return (
    <div className="App">
      <h1>Products</h1>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategoryHandler={setSelectedCategoryHandler}
        selectedBtnColor={selectedBtnColor}
        setSelectedBtnColor={setSelectedBtnColor}
      />
      <Products selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
