import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Contacts from './components/Contacts/Contacts';
import SMSpage from './components/Page/SMS Page/SMSpage';
import History from './components/Page/History Page/History';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
    fetch('./data/data.json').then((resp)=> {
      return resp.json();
    }).then((jsonData)=> setContacts(jsonData.contacts))
  },[])
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" exact element={<Contacts state={contacts}/>}/>
          <Route path="/sms" exact element={<SMSpage/>}/>
          <Route path="/history" exact element={<History/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
