import React, { useEffect } from "react";

const History = () => {
  const getAllMessages = async () => {
    const data = await fetch("localhost:4000/api/get-messages");
    const messages = await data.json();
    console.log(messages);
  };

  useEffect(() => {
    getAllMessages();
  });
  return <div>History</div>;
};

export default History;
