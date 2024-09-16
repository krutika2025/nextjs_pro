import React from 'react';

const Main = ({ selectedProduct }) => {
  return (
    <main className="p-4">
      <h2>Product Details</h2>
      {selectedProduct ? (
        <div>
          <h3>{selectedProduct.name}</h3>
          <p>{selectedProduct.description}</p>
        </div>
      ) : (
        <p>Please select a product from the sidebar.</p>
      )}
    </main>
  );
};

export default Main;
