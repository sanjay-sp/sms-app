import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="nav-title">SMS App</h1>
      <div className="nav-routes">
        <div className="nav-button">Contacts</div>
        <div className="nav-button">History</div>
      </div>
    </div>
  );
};

export default Navbar;
