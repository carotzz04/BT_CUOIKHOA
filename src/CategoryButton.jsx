import React from 'react';

const CategoryButton = ({ category, setCategory, currentCategory }) => {
  return (
    <button
      className={currentCategory === category ? 'active' : ''}
      onClick={() => setCategory(category)}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
