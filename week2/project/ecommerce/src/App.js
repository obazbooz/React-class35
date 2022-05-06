import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './components/shop';
import ProductItemDetails from './components/productItemDetails.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:id" element={<ProductItemDetails />} />
        </Routes>
      </Router>
      ,
    </div>
  );
}

export default App;
