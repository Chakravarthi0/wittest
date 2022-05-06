import { Link } from "react-router-dom";
import { asideNavBarType } from "../../types";

function AsideNavBar({ token, setIsNavOpen }: asideNavBarType) {
  return (
    <div className="aside-navbar">
      <button
        className="btn btn-primary-ol btn-float aside-close-btn"
        onClick={() => setIsNavOpen(false)}
      >
        <i className="material-icons">close</i>
      </button>

      <nav>
        <ul className="list aside-nav-links-container">
          <li>
            <Link className="link nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link nav-link" to={token ? "/profile" : "/signin"}>
              <i className="fas fa-user nav-icon black"></i>
            </Link>
          </li>

          <li>
            <Link
              className="link nav-link create-quiz-link"
              to={token ? "/create-quiz" : "/signin"}
            >
              <i className="fas fa-plus"></i> Create Quiz
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export { AsideNavBar };
