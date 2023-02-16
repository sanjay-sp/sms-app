import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Contact from "./Contact";
import "./Contacts.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const data = await fetch("http://localhost:4000/api/get-contacts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": "*",
      },
    });
    const contactList = await data.json();
    setContacts(contactList);
  };

  return (
    <div className="contacts">
      <div className="header">
        <p>Contact List</p>
      </div>
      <div className="contact-list">
        {contacts
          .slice(0)
          .reverse()
          .map((contact) => {
            return (
              <div key={contact._id}>
                <Link to="/info" state={{ contact }}>
                  <Contact contact={contact} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Contacts;
