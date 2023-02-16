import { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";
import "./History.css";

const History = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllMessages = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/api/get-messages`
    );
    const res = await data.json();
    setMessages(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <div className="history-page">
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default History;
