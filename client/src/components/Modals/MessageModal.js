import tick from "../../public/Green-Tick.png";
import "./MessageModal.css";

const MessageModal = () => {
  const clickHandler = () => {
    window.location = "/";
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img className="tick-symbol" src={tick} />
        <div className="message-content">OTP sent</div>
        <button className="ok-btn" onClick={clickHandler}>
          OK
        </button>
      </div>
    </div>
  );
};

export default MessageModal;
