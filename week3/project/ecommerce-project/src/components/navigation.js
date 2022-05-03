import ProductsItem from './productItem.js';
import productsFilter from '../productsFilter.js';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navContainer">
      <h1 className="mainTitle">MEDIA OCEAN</h1>
      <div className="navElements">
        <Link to={'/favorite'}>Favorites</Link>
        <Link to={'/'}>Products</Link>
      </div>
    </nav>
  );
}

export default Navigation;
