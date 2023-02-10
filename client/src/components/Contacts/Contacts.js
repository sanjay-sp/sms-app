import { Link } from "react-router-dom";

import Contact from "./Contact";
import "./Contacts.css";

const Contacts = ({ state }) => {
  return (
    <div className="contacts">
      <div className="header">
        <p>Contact List</p>
      </div>
      <div className="contact-list">
        <Link to="/info">
          <Contact />
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
