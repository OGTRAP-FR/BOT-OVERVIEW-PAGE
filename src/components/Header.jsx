import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleFeaturesClick = (e) => {
    closeMenu();
    if (isHome) {
      e.preventDefault();
      document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src="/bot.ico" alt="A.X.L BLADE" />
        A.X.L BLADE
      </Link>

      <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>HOME</Link>
        {isHome ? (
          <a href="#features" onClick={handleFeaturesClick}>FEATURES</a>
        ) : (
          <Link to="/#features" onClick={closeMenu}>FEATURES</Link>
        )}
        <Link to="/premium" onClick={closeMenu}>PREMIUM</Link>
        <a href="https://discord.gg/M7DJFf2qzm" onClick={closeMenu}>SUPPORT</a>
      </div>
    </nav>
  );
};

export default Header;
