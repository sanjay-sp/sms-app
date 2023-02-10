import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import ContactPage from "./components/Pages/ContactPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page">
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
