import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
 // Correct path to the products array
 import product from './product';

const Sidebar = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <aside className="p-3 border-end">
      <h2>Product List</h2>

      {/* Dropdown for Categories */}
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          {selectedCategory ? selectedCategory.name : 'Select Category'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {/* Dropdown items for categories */}
          {product.map((category, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleSelectCategory(category)}
            >
              <img
                src={category.image}
                alt={category.name}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              {category.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <ul className="list-group mt-3">
        {/* Render products in selected category */}
        {selectedCategory &&
          selectedCategory.items.map((product, index) => (
            <li
              key={index}
              onClick={() => onSelectProduct(product)} // Handle product selection
              className="list-group-item list-group-item-action"
            >
              <div className="d-flex align-items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '50px', height: '50px', marginRight: '10px' }}
                />
                <div>
                  <div>{product.name}</div>
                  <small>{product.description}</small>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
