import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.scss";

export const Footer = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark footer">
        <div className="container icons">
          <a
            href="https://github.com/jferrergil"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </a>
          <a
            href="www.linkedin.com/in/jorge-ferrer-gil"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </div>
      </nav>
    </div>
  );
};
