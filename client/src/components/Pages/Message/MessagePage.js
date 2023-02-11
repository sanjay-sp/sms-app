import { useState } from "react";
import { useLocation } from "react-router-dom";
import MessageModal from "../../Modals/MessageModal";
import "./MessagePage.css";

const MessagePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("");

  const params = useLocation();
  const { firstName, lastName, phoneNumber } = params.state.contact;
  const randomOTP = Math.round(Math.random() * 1000000);

  const sendMessage = () => {
    fetch("http://localhost:4000/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        otp: randomOTP,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.message == "success") {
          setModalStatus("success");
        } else {
          setModalStatus("error");
        }
        setIsModalOpen(true);
      });
  };
  return (
    <div className="message-page">
      <div className="message-container">
        <div className="message-page-fname">
          <label className="message-label">First Name: </label>
          <div className="first-name">{firstName}</div>
        </div>
        <div className="message-page-lname">
          <label className="message-label">Last Name: </label>
          <div className="last-name">{lastName}</div>
        </div>
        <div className="message-page-phone">
          <label className="message-label">Contact: </label>
          <div className="message-phone-number">{phoneNumber}</div>
        </div>
        <div className="message-page-otp">
          <label className="message-label">Your OTP is: </label>
          <div className="message-otp">
            {Array.from(String(randomOTP)).map((e) => {
              return <div className="otp-box">{e}</div>;
            })}
          </div>
        </div>
        <button className="message-page-btn" onClick={sendMessage}>
          Send OTP
        </button>
      </div>
      {isModalOpen ? <MessageModal message={modalStatus} /> : <div></div>}
    </div>
  );
};

export default MessagePage;
