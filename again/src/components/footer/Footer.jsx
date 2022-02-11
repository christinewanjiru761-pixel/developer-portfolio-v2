import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>Kwemange Nyagrowa</a>
      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://twitter.com/KwemangeN' target="_blank"  rel="noreferrer"><FiTwitter /></a>
        <a href='https://www.linkedin.com/in/kwemange-nyagrowa-419147a7/' target="_blank"  rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/jeff254-kedjango' target="_blank"  rel="noreferrer"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kwemange Nyagrowa. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer