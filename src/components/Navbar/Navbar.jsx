import { useState } from 'react';
import { NavLink, Link } from 'react-router';

import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Services',
      path: '/services',
    },
    {
      label: 'Sectors',
      path: '/sectors',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
  ];

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
          aria-label="Sapex Structural Solutions Pvt. Ltd. home"
        >
          <img
            src="/images/logo/sapex-logo.jpg"
            alt="Sapex Structural Solutions"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="navbar__navigation"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `navbar__link ${
                  isActive ? 'navbar__link--active' : ''
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="navbar__cta"
        >
          <span>Let's Talk</span>
          <span className="navbar__cta-icon">↗</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`navbar__menu-button ${
            isMenuOpen ? 'navbar__menu-button--open' : ''
          }`}
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`navbar__mobile ${
          isMenuOpen ? 'navbar__mobile--open' : ''
        }`}
      >
        <nav
          className="navbar__mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `navbar__mobile-link ${
                  isActive
                    ? 'navbar__mobile-link--active'
                    : ''
                }`
              }
            >
              <span>{item.label}</span>
              <span>↗</span>
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="navbar__mobile-cta"
            onClick={closeMenu}
          >
            <span>Start a Conversation</span>
            <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;