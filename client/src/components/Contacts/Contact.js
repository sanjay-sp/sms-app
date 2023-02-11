import "./Contact.css";

const Contact = ({ contact }) => {
  const { firstName, lastName } = contact;
  return (
    <div>
      <div className="contact">{firstName + " " + lastName}</div>
    </div>
  );
};

export default Contact;
