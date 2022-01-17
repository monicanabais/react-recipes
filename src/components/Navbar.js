import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Searchbar from './Searchbar';
import './Navbar.css';

const Navbar = () => {
  const { color } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>RECIPES APP</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          Create Recipe
        </Link>
      </nav>
    </div>
  )
}

export default Navbar;
