import Contacts from "../Contacts/Contacts";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="btn-col">
        <button className="create-contact-btn">+ Create Contact</button>
      </div>
      <Contacts />
    </div>
  );
};

export default ContactPage;
