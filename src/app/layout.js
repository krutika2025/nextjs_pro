
'use client'; // For client-side interactivity

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import product from './components/product';
// Sample products with categories


export default function RootLayout({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 col-sm-12">
              <Sidebar product={product} onSelectProduct={handleSelectProduct} />
            </div>

            {/* Main content */}
            <div className="col-md-9 col-sm-12">
              <Main selectedProduct={selectedProduct} />
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
