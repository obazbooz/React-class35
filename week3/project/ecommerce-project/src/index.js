import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductItemDetails from './components/productItemDetails.js';
import FavProductItem from './components/favProductItem.js';
import { FavProvider } from './FavContext';
import { LoadingProvider } from './loadingContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <FavProvider>
    <LoadingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product/:id" element={<ProductItemDetails />} />
          <Route path="/favorite" element={<FavProductItem />} />
        </Routes>
      </Router>
    </LoadingProvider>
  </FavProvider>,
);

reportWebVitals();
