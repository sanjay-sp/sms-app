import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

import Contact from "./Contact";
import "./Contacts.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/get-contacts`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const contactList = await data.json();
    setContacts(contactList);
    setIsLoading(false);
  };

  return (
    <div className="contacts">
      <div className="header">
        <p>Contact List</p>
      </div>
      <div className="contact-list">
        {isLoading ? (
          <Loading />
        ) : (
          contacts
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
            })
        )}
      </div>
    </div>
  );
};

export default Contacts;
