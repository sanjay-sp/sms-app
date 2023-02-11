import { Link, useLocation } from "react-router-dom";

import "./ContactInfo.css";

const ContactInfo = () => {
  const params = useLocation();
  const contact = params.state.contact;
  const { firstName, lastName, phoneNumber } = contact;
  return (
    <div className="contact-info-page">
      <div className="contact-details">
        <div className="contact-info-name">{firstName + " " + lastName}</div>
        <div className="contact-info-number">{phoneNumber}</div>
        <Link to="/sms" state={{ contact }}>
          <button className="contact-info-btn">Send Message</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
