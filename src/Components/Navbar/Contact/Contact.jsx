import React, { useRef, useState } from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { themeContext } from "../../../Context";
import { useContext} from 'react'

function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

    const [done,setDone] = useState(false);
    // Here we send a form for contact from potential employers
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mqjd1qa', 'template_qa0msjs', form.current, 'pWWjsD1K_Xl82eGsC')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode ? 'white' : ''}}>Get in touch</span>
                <span style={{color: "#3c7ad8"}}>Contact me</span>
                <div className="blur s-blur1" 
                style={{background:"#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">

            <form ref={form} onSubmit={sendEmail} action="">
                <input type="text" name='user_name' className='user' placeholder='Name' required/>
                <input type="text" name='user_email' className='user' placeholder='Email' required/>
                <textarea name="message" className='user' placeholder='Message'></textarea>
                <input type="submit" className='button' value={"Send"} />
                <span>{done && "Thank you for contacting me!"}</span>
                <div className="blur c-blur1" 
                style={{background:"var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
