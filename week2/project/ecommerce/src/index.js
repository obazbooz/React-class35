import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductItemDetails from '../src/components/productItemDetails.js';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<ProductItemDetails />} />
    </Routes>
  </Router>,
);

// ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
