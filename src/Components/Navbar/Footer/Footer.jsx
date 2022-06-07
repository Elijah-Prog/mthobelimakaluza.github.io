import React from 'react'
import './Footer.css'
import Wave from '../../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}}/>
        <div className="f-content">
        <a href="mailto:mthobelimakaluza@gmail.com">mthobelimakaluza@gmail.com</a>
            <div className="f-icons">
              <a href="https://www.instagram.com/mthobelimakaluza/" target="_blank" rel="noreferrer">
              <Insta color='white' size={"3rem"}/>
              </a>
              <a href="https://facebook.com/Mthormakaluz/" target="_blank" rel="noreferrer">
                 <Facebook color='white' size={"3rem"}/>
              </a>
              <a href="https://www.linkedin.com/in/mthobeli-makaluza-119a7b191/" target="_blank" rel="noreferrer">
                <Linkedin color='white' size={"3rem"}/>
              </a>
              <a href="https://github.com/Elijah-Prog" target="_blank" rel="noreferrer">
                <Github color='white' size={"3rem"}/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
