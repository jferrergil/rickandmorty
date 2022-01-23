import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to={"/"}>
          <img
            src="https://es.apkshki.com/storage/6182/icon_5f563b54cb9c8_6182_w256.png"
            alt=""
            width="50"
            height="50"
          />
        </Link>
        <ul className="navbar-nav">
          <Link to={"/favorites"}>
            <li className="nav-item">
              <button className="btn btn-primary">Favorite</button>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};
