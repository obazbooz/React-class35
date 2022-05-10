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
            className="categoryBtn"
            style={{
              opacity: selectedCategory === category ? 1 : 0.3,
              boxShadow:
                selectedCategory === category ? '0px 0px 6px #661E0C' : '',
            }}
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
