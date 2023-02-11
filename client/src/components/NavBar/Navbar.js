import { Link, NavLink } from "react-router-dom";
import icon from "../../public/sms-icon.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-head">
          <img className="nav-icon" src={icon} />
          <h1 className="nav-title">SMS App</h1>
        </div>
      </Link>
      <div className="nav-routes">
        <NavLink to="/" className="nav-button" activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to="/history" className="nav-button" activeClassName="active">
          History
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
