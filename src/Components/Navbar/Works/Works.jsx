import React from "react";
import "./Works.css";
import { themeContext } from "../../../Context";
import { useContext} from 'react'

function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      {/** Left Side*/}

      <div className="awesome">
        <span style={{color: darkMode ? 'white' : ''}}>Works for All these</span>
        <span>Brands & Clients</span>
        <h2 className="none" style={{color:"red","fontSize":"50px","fontWeight":"bold"}}>COMING SOON!</h2>
        <spane>
          
        </spane>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
    </div>
  );
}

export default Works;
