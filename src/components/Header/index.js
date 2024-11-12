const World = () => {
  return (
    <header className="site-header reveal-from-bottom">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <a href="index.html">
                <img src="images/logo.svg" alt="Cube" width={32} height={32} />
              </a>
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
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <style>
        {`
          ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            gap: 20px;
          }

          li {
            display: inline-block;
          }

          a {
            position: relative;
            text-decoration: none;
            color: black;
            padding-bottom: 5px;
            font-weight: bold;
            display: inline-block;
          }

          /* Efek garis bawah saat hover */
          a::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: black;
            transform: scaleX(0);
            transform-origin: up;
            transition: transform 0.4s ease;
          }

          a:hover::after {
            transform: scaleX(1);
            transform-origin: up;
          }
        `}
      </style>
    </header>
  );
};

export default World;
