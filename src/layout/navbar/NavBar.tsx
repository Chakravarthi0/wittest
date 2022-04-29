import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AsideNavBar } from "./AsideNavBar";
import "./navbar.css";
function NavBar() {
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="navbar-container bg-primary">
      <Link to={"/"} className="link white">
        <h2 className="nav-logo">Wittest</h2>
      </Link>
      {isOpen && <AsideNavBar token={""} setIsNavOpen={setIsOpen} />}

      <nav>
        {(isOpen || screenWidth > 800) && (
          <ul className={"list nav-links-container"}>
            <li className="nav-search-container">
              <input
                className="input nav-search"
                type="search"
                placeholder="Search"
              />
            </li>
            <li>
              <Link className="link btn btn-primary-inv" to={"/signin"}>
                Sign In
              </Link>
            </li>
          </ul>
        )}
        <i className={"material-icons hamburger-icon"} onClick={toggleIsOpen}>
          {isOpen ? "close" : "menu"}
        </i>
      </nav>
    </header>
  );
}

export { NavBar };
