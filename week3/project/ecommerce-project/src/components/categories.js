import React from 'react';

function Categories({
  setSelectedCategoryHandler,
  allCategories,
  selectedCategory,
}) {
  const OnClickCategoryBtn = (category) => {
    if (selectedCategory === category) {
      setSelectedCategoryHandler('All');
    } else {
      setSelectedCategoryHandler(category);
    }
  };

  return (
    <div className="categories">
      {allCategories.map((category, index) => {
        return (
          <button
            key={index}
            className={`categoryBtn ${
              selectedCategory === category ? 'selectedBtn' : 'unselectedBtn'
            }`}
            onClick={() => {
              OnClickCategoryBtn(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
