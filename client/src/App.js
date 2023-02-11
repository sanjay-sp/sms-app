import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/Navbar";
import ContactPage from "./components/Pages/Contacts/ContactPage";
import ContactInfo from "./components/Pages/Contact Info/ContactInfo";
import MessagePage from "./components/Pages/Message/MessagePage";
import History from "./components/Pages/History/History";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<ContactPage />} />
            <Route path="/info" exact element={<ContactInfo />} />
            <Route path="/sms" exact element={<MessagePage />} />
            <Route path="/history" exact element={<History />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
