import { useState } from 'react';

function Categories({ setSelectedCategoryHandler, allCategories }) {
  const [active, setActive] = useState(allCategories[null]);
  const [flag, setFlag] = useState(false);

  const clickedAgainFlag = (state) => {
    setFlag(state);
  };

  const OnClickCategoryBtn = (category) => {
    setActive(category);
    if (active === category && flag === false) {
      clickedAgainFlag(true);
      setSelectedCategoryHandler('All');
    } else {
      clickedAgainFlag(false);
      setSelectedCategoryHandler(category);
    }
  };

  const renderCategoryBtn = (category, index) => {
    return (
      <button
        key={index}
        className="categoryBtn"
        style={{
          opacity: active === category && !flag ? 1 : 0.3,
          boxShadow: active === category && !flag ? '0px 0px 6px #661E0C' : '',
        }}
        onClick={() => {
          OnClickCategoryBtn(category);
        }}
      >
        {category}
      </button>
    );
  };

  return (
    <div className="categories">
      {allCategories.map((category, index) =>
        renderCategoryBtn(category, index),
      )}
    </div>
  );
}

export default Categories;
