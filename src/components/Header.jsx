import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleFeaturesClick = (e) => {
    if (isHome) {
      e.preventDefault();
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <Link to="/" className="logo">
        <img src="/bot.ico" alt="Arkii" />
        ARKII
      </Link>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        {isHome ? (
          <a href="#features" onClick={handleFeaturesClick}>FEATURES</a>
        ) : (
          <Link to="/#features">FEATURES</Link>
        )}
        <Link to="/premium">PREMIUM</Link>
        <a href="https://discord.gg/M7DJFf2qzm">SUPPORT</a>
      </div>
    </nav>
  );
};

export default Header;
