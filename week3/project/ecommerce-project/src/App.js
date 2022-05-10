import React from 'react';
import Shop from './components/shop';
import ProductItemDetails from './components/productItemDetails.js';
import FavProductItem from './components/favProductItem.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavProvider } from './contexts/FavContext';
import { LoadingProvider } from './contexts/loadingContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <FavProvider>
        <LoadingProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/product/:id" element={<ProductItemDetails />} />
              <Route path="/favorite" element={<FavProductItem />} />
            </Routes>
          </Router>
        </LoadingProvider>
      </FavProvider>
    </div>
  );
}

export default App;
