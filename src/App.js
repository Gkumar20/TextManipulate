// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [modetext, setmodetext] = useState("Enable Dark mode");
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState({
    msg: "No Alert",
    type: 'AlertType'
  });

  const showAlert = (type, message) => {
    setalert({
      msg: message,
      type: type
    })
    setInterval(() => {
      setalert({
        msg: "No Alert",
        type: 'AlertType'
      })
    }, 5000);
  }

  const changemode = () => {
    if (mode === "light") {

      setmode("dark");
      setmodetext("Enable Light mode");
      document.body.style.backgroundColor = "grey";
      showAlert("Success", "Dark Mode is enabled");
    } else {

      setmode("light");
      setmodetext("Enable Light mode");
      setmodetext("Enable Dark mode");
      document.body.style.backgroundColor = "white";
      showAlert("Success", "Dark Mode is enabled");
    }
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} DarkMode={changemode} modetext={modetext} showalert={showAlert} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm headingName="Enter the text" mode={changemode} showalert={showAlert} />} />
      </Routes>     
    </Router>
    </>
  );
}

export default App;
