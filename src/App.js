import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Navbar/Intro/Intro";
import Services from "./Components/Navbar/Services/Services";
import Experience from "./Components/Navbar/Experience/Experience";
import Works from "./Components/Navbar/Works/Works";
import Portfolio from "./Components/Navbar/Portfolio/Portfolio";
import Contact from "./Components/Navbar/Contact/Contact";
import Footer from "./Components/Navbar/Footer/Footer";
import {themeContext} from './Context'
import { useContext, useEffect } from "react";
import ScrollButton from "./Components/Navbar/Scrollbutton/Scrollbutton";

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div  className="App"
    style={{
      background: darkMode ? "#212121" : "",
      color: darkMode ? "white" : "",
    }}
    >
      {/* <div style={{textAlign: 'center', background:'#3c7ad8', color: 'white', fontSize: '10px'}}>
        <span>This is a demo version of my portfolio website.</span>
      </div> */}
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <ScrollButton />
    </div>
  );
}

export default App;
