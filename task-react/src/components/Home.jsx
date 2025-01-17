import  { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Home.css";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          TaskFlow
        </Link>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`navbar-list ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/form" className="navbar-link" onClick={toggleMenu}>
              Form
            </Link>
          </li>
          <li>
            <Link to="/toggle" className="navbar-link" onClick={toggleMenu}>
              Toggle
            </Link>
          </li>
          <li>
            <Link to="/todo" className="navbar-link" onClick={toggleMenu}>
              Todo
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}

export default Home;
