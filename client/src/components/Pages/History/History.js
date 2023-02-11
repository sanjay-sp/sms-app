import { useEffect, useState } from "react";
import "./History.css";

const History = () => {
  const [messages, setMessages] = useState([]);

  const getAllMessages = async () => {
    const data = await fetch("http://localhost:4000/api/get-messages");
    const res = await data.json();
    setMessages(res);
    console.log(res);
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <div className="history-page">
      <table className="msg-table">
        <tr className="msg-table-header">
          <th className="msg-th-name">Name</th>
          <th className="msg-th-number">Phone Number</th>
          <th className="msg-th-otp">OTP</th>
          <th className="msg-th-sent">Sent At</th>
        </tr>
        {messages
          .slice(0)
          .reverse()
          .map((message) => {
            const { firstName, lastName, otp, phoneNumber, createdAt } =
              message;
            return (
              <tr className="user-row">
                <td className="user-data">{firstName + " " + lastName}</td>
                <td className="user-data">{phoneNumber}</td>
                <td className="user-data">{otp}</td>
                <td className="user-data">
                  {new Date(createdAt).toLocaleString("en-IN")}
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default History;
