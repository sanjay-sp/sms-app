import tick from "../../public/Green-Tick.png";
import error from "../../public/error.png";

import "./MessageModal.css";

const MessageModal = ({ message }) => {
  const clickHandler = () => {
    window.location = "/";
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img
          className="tick-symbol"
          src={message == "success" ? tick : error}
        />
        <div className="message-content">
          {message == "success" ? "OTP sent" : "Oops! Something went wrong"}
        </div>
        <button className="ok-btn" onClick={clickHandler}>
          OK
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
