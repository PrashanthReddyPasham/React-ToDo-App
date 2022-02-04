import "./nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const style = {
    textDecoration: "none",
  };

  return (
    <div className="nav">
      <nav>
        <ul className="nav-links">
          <Link style={style} to="/home">
            <li>Home</li>
          </Link>
          <Link style={style} to="/todo">
            <li>ToDo List</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
