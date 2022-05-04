import { useState } from "react";
import { Link } from "react-router-dom";
import { AsideNavBar } from "./AsideNavBar";
import { useAuth } from "../../hooks";
import "./navbar.css";

function NavBar() {
  const {
    authState: {
      userDetails: { token },
    },
  } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className="navbar-container bg-primary">
      <Link to={"/"} className="link white">
        <h2 className="nav-logo">Wittest</h2>
      </Link>
      {isOpen && <AsideNavBar token={token} setIsNavOpen={setIsOpen} />}

      <nav>
        <ul className={"list nav-links-container"}>
          <li>
            <Link
              className="link white nav-link"
              to={token ? "/profile" : "/signin"}
            >
              <i className="fas fa-user nav-icon"></i>
            </Link>
          </li>
        </ul>

        <i className={"material-icons hamburger-icon"} onClick={toggleIsOpen}>
          {isOpen ? "close" : "menu"}
        </i>
      </nav>
    </header>
  );
}

export { NavBar };
