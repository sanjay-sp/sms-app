import { useState } from "react";
import Contacts from "../../Contacts/Contacts";
import CreateContactModal from "../../Modals/CreateContact";
import "./ContactPage.css";

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="contact-page">
      <div className="btn-col">
        <button className="create-contact-btn" onClick={openModal}>
          + Create Contact
        </button>
      </div>
      {isModalOpen ? <CreateContactModal openModal={openModal} /> : <div></div>}
      <Contacts />
    </div>
  );
};

export default ContactPage;
