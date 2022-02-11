import React, { useRef } from 'react'
import './contacts.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import emailjs from 'emailjs-com'
import Tilt from 'react-tilt'

function Contacts() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fgt67wb', 'template_hfqb0qg', form.current, 'J_4f0_FPvpjzouWDy')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          >
          <article className="contact__option">
            <FiTwitter className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>@kwemangeN</h5>
            <a href="https://twitter.com/KwemangeN" target="_blank"  rel="noreferrer">Send a message</a>
          </article>
          </Tilt>
          <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          >
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Kwemange Nyagrowa</h5>
            <a href="https://www.linkedin.com/in/kwemange-nyagrowa-419147a7/" target="_blank"  rel="noreferrer">Send a message</a>
          </article>
          </Tilt>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </Tilt>
        </form>
      </div>
    </section>
  )
}

export default Contacts