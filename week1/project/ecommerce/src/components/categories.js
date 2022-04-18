import { useState } from 'react';
import allCategories from '../fake-data/all-categories.js';

function Categories({ setSelectedCategoryHandler }) {
  const [active, setActive] = useState(allCategories[null]);
  const [flag, setFlag] = useState(false);

  const clickedAgainFlag = (state) => {
    setFlag(state);
  };
  let categoryName = '';
  return (
    <div className="categories">
      {allCategories.map(
        (category, index) => (
          (categoryName = category.slice(6)),
          (
            <button
              key={index}
              className="categoryBtn"
              style={{
                opacity: active === category && !flag ? 1 : 0.3,
                boxShadow:
                  active === category && !flag ? '0px 0px 6px #661E0C' : '',
              }}
              onClick={() => {
                setActive(category);
                if (active === category && flag === false) {
                  clickedAgainFlag(true);
                  setSelectedCategoryHandler('All');
                } else {
                  clickedAgainFlag(false);
                  setSelectedCategoryHandler(category);
                }
              }}
            >
              {category.slice(6)}
            </button>
          )
        ),
      )}
    </div>
  );
}

export default Categories;
