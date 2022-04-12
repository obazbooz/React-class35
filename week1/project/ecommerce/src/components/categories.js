import { useState } from 'react';
import allCategories from '../fake-data/all-categories.js';

function Categories({ category, setSelectedCategoryHandler }) {
  const [active, setActive] = useState(allCategories[null]);
  return (
    <div style={{ marginBottom: '100px' }}>
      {allCategories.map((category) => (
        <button
          style={{
            opacity: active === category ? 1 : 0.6,
            margin: '10px',
            borderRadius: '10px',
            padding: '5px 15px',
            boxShadow: active === category ? '0px 0px 6px #661E0C' : '',
          }}
          onClick={() => {
            setActive(category);
            setSelectedCategoryHandler(category);
          }}
        >
          {category.slice(6)}
        </button>
      ))}
    </div>
  );
}

export default Categories;
