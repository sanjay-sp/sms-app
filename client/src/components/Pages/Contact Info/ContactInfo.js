import { Link } from "react-router-dom";

import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-page">
      <div className="contact-details">
        <div className="contact-info-name">Sanjay Dilshan</div>
        <div className="contact-info-number">+91 7200988308</div>
        <Link to="/sms">
          <button className="contact-info-btn">Send Message</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
