import { useState } from "react";
import "./CreateContact.css";

const CreateContactModal = ({ openModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const submitContact = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/create-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
      }),
    });
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <form className="create-form" onSubmit={submitContact}>
          <label>First Name</label>
          <input
            type="text"
            className="first-name-inp"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name</label>
          <input
            type="text"
            className="last-name-inp"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Phone Number</label>
          <input
            type="text"
            className="phone-number-inp"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Create</button>
          <button className="close-create" onClick={openModal}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateContactModal;
