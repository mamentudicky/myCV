import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="site-header reveal-from-bottom">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <Link to="/" className="menu-link">Menu</Link>
            </h1>
          </div>
          <button
            id="header-nav-toggle"
            className="header-nav-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
          >
            <span className="screen-reader">Menu</span>
            <span className="hamburger">
              <span className="hamburger-inner" />
            </span>
          </button>
          <nav id="header-nav" className="header-nav">
            <div className="header-nav-inner">
              <ul>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/blog" className="nav-link">Blog</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
