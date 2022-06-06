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
import { useContext } from "react";
import ScrollButton from "./Components/Navbar/Scrollbutton/Scrollbutton";

function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div  className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
    >
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
