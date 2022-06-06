import React from 'react';
import './Intro.css';
import Vector1 from '../../../img/Vector1.png';
import Vector2 from '../../../img/Vector2.png';
import boy from '../../../img/boy.jpg';
import thumbup from '../../../img/thumbup.png';
import Crown from '../../../img/crown.png';
import glassesimoji from '../../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import 'font-awesome/css/font-awesome.min.css';
import { themeContext } from "../../../Context";
import { useContext} from 'react'
import {motion} from 'framer-motion'



function Intro() {

    const transition = {duration : 2, type: 'spring'}

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode ? 'white' : '',}}>Hi! I Am </span>
                <span>Mtobeli Makaluza</span>
                <span>A Information and Communications Technology student at the Cape Peninsula University of Technology (CPUT) in Cape Town, South Africa. I am an aspiring web Developer and web Designer with the passion for learning new Technologies.
                    I hape an Entry-level skillset in Computer Assembly, Computer Hardware Upgrade and Computer Troubleshooting.
                    <br/>
                    As a student, I have worked on various self-projects that sharpened my skills as a Developer and IT Technician.
                </span>
            </div>

            <button className="button i-button">Hire Me!</button>

            <div className="i-icons">
                <a href="https://github.com/Elijah-Prog" target="_blank" rel="noreferrer"><i className="fa fa-github fa-5x" style={{color: darkMode ? 'white' : '#3C7AD8'}}></i></a>
                <a href="https://www.linkedin.com/in/mthobeli-makaluza-119a7b191/" target={"_blank"} rel="noreferrer"><i className="fa fa-linkedin fa-5x" style={{color: darkMode ? 'white' : '#3C7AD8'}}></i></a>
                <a href="https://facebook.com/Mthormakaluz/" target={"_blank"} rel="noreferrer"><i className="fa fa-facebook fa-5x" style={{color: darkMode ? 'white' : '#3C7AD8'}}></i></a>
                <a href="https://www.instagram.com/mthobelimakaluza/" target={"_blank"} rel="noreferrer"><i className="fa fa-instagram fa-5x" style={{color: darkMode ? 'white' : '#3C7AD8'}}></i></a>
                
            </div>
        </div>


        <div className="i-right">
                <img src={Vector1} alt="" hidden/>
                <img src={Vector2} alt="" hidden/>
                <img src={boy} alt="" style={{width:"400px","borderRadius":"30px"}} />
                <motion.img
                initial={{left: '-36%'}}
                whileInView={{left: '24%'}}
                transition={transition}
                
                src={glassesimoji} alt="" />
                <motion.div
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
                style={{top:'-4%',left:'68%'}}
                className='floating-div'
                >
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
                </motion.div>
                <motion.div
                initial={{left: '9rem' , top: '18rem'}}
                whileInView={{left: '0rem'}}
                transition={transition}
                style={{top:'18rem',left:'0rem'}}
                className='floating-div'
                >
                    <FloatingDiv image={thumbup} txt1='Digital' txt2='Designer'/>
                </motion.div>

                {/*Blur divs  */}
                <div className="blur" style={{background:"rgb(238 210 255)"}}>
                </div>
                <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro
