import React from "react";
import "./Services.css";
import glassesimoji from "../../../img/glassesimoji.png";
import HeartEmoji from "../../../img/heartemoji.png";
import Humble from "../../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import HTML from "../../../img/html-5.png";
import CSS from "../../../img/css3.png";
import JS from "../../../img/js.png";
import JAVA from "../../../img/java.png";
import REACT from "../../../img/react.png";
import PHP from "../../../img/php.png";
import { themeContext } from "../../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import Computer from '../../../img/computer-repair.jpg'

function Services() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/** Left Side*/}

      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          I have an Entry-level skillset in Web Design, Web Development and FrontEnd Technologies.
          <br />
          I have worked on various self-projects that helped me sharpen my skills in the Software Development field.

        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <br />

        <div className="service-logo">
          <img src={HTML} className="lang" alt="" />
          <img src={CSS} className="lang" alt="" />
          <img src={JS} className="lang" alt="" />
          <img src={JAVA} className="lang" alt="" />
          <img src={REACT} className="lang" alt="" />
          <br />
          <img src={PHP} className="lang" alt="" />
          <br />
          <div className="back-img" style={{backgroundImage: `url(${Computer})`,
           backgroundPosition: "center",
           backgroundRepeat :'no-repeat',
           backgroundSize: 'cover',
           width: '425px',
           height: '300px',
           borderRadius: '15px'
            
            }}>

              <div className="back-text">
                <span>An aspiring Developer and IT Technician.</span>
              </div>
            
          </div>
          
        </div>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/**Right side */}

      <div className="cards">
        <motion.div
          whileInView={{ left: "14rem" }}
          initial={{ left: "25%" }}
          transition={transition}
          style={{ left: "14rem"}}
        >
          <Card
            emoji={HeartEmoji}
            heading={"IoT"}
            detail={" Computer Assembly and disAssembly, Computer Hardware Upgrade...."}
          />
        </motion.div>

        {/**Second Card */}

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={glassesimoji}
            heading={"Developer"}
            detail={"Html, Css, Java, JavaScript, React, PHP, Frontend and Backend Development"}
          />
        </motion.div>

        {/**Third */}

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "20rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "I can design single-page websites for clients. Personal, blog or Portfolio."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
