import "./MessagePage.css";

const MessagePage = () => {
  const randomOTP = Math.round(Math.random() * 1000000);
  return (
    <div className="message-page">
      <div className="message-container">
        <div className="message-page-fname">
          <label>First Name: </label>
          <div className="first-name">Sanjay</div>
        </div>
        <div className="message-page-lname">
          <label>Last Name: </label>
          <div className="last-name">Dilshan</div>
        </div>
        <div className="message-page-phone">
          <label>Contact: </label>
          <div className="message-phone-number">+91 7200988308</div>
        </div>
        <div className="message-page-otp">
          <label>Your OTP is: </label>
          <div className="message-otp">
            {Array.from(String(randomOTP)).map((e) => {
              return <div className="otp-box">{e}</div>;
            })}
          </div>
        </div>
        <button className="message-page-btn">Send OTP</button>
      </div>
    </div>
  );
};

export default MessagePage;
