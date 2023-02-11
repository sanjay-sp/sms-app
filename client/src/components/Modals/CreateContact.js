import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Toast from "../Toast/Toast";
import "./CreateContact.css";

const CreateContactModal = ({ openModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openToast, setOpenToast] = useState(false);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
  };

  const submitContact = (e) => {
    e.preventDefault();
    if (isValidPhoneNumber(phoneNumber)) {
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
      window.location.reload("/");
    } else {
      setOpenToast(true);
      setTimeout(() => {
        setOpenToast(false);
      }, 1500);
    }
  };
  return (
    <div className="create-modal">
      <div className="create-modal-content">
        <h1 className="create-modal-header">Create a new contact</h1>
        <form className="create-form" onSubmit={submitContact}>
          <label className="create-modal-label">First Name</label>
          <input
            type="text"
            className="first-name-inp"
            value={firstName}
            required="true"
            onChange={(e) => setFirstName(capitalize(e.target.value))}
          />
          <label className="create-modal-label">Last Name</label>
          <input
            type="text"
            className="last-name-inp"
            value={lastName}
            required="true"
            onChange={(e) => setLastName(capitalize(e.target.value))}
          />
          <label className="create-modal-label">Phone Number</label>
          <PhoneInput
            defaultCountry="IN"
            className="phone-number-inp"
            value={phoneNumber}
            required="true"
            onChange={setPhoneNumber}
          />
          <div className="create-modal-btns">
            <button type="submit" className="create-btn">
              Create
            </button>
            <button className="close-create" onClick={openModal}>
              Cancel
            </button>
          </div>
        </form>
        {openToast ? <Toast /> : <div />}
      </div>
    </div>
  );
};

export default CreateContactModal;
