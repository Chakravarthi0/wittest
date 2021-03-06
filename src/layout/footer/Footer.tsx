import "./footer.css";

function Footer() {
  return (
    <footer className="footer bg-primary">
      <p className="white">Developed by Saran Chakravarthi</p>
      <ul className="social-links list">
        <li>
          <a
            className="link white"
            href="https://github.com/Chakravarthi0"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            className="link white"
            href="https://www.linkedin.com/in/saran-chakravarthi"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            className="link white"
            href="https://twitter.com/SaranChakravar3"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export { Footer };
