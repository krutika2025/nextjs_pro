import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Footer Section</p>
    </footer>
  );
};

const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px 20px',
  textAlign: 'center',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

export default Footer;
