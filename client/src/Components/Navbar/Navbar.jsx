import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaVideo, FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <FaVideo className="logo-icon" />
        <h2>MeetSphere</h2>
      </div>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/meeting/demo123">
            Meeting
          </Link>
        </li>

        <li>
          <Link to="/profile">
            Profile
          </Link>
        </li>

        <li>
          <Link to="/login">
            Login
          </Link>
        </li>

        <li>
          <Link to="/register">
            Register
          </Link>
        </li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenu(!menu)}
      >
        <FaBars />
      </div>

    </nav>
  );
}

export default Navbar;