import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Header Section</h1>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px 20px',
  textAlign: 'center',
};

export default Header;