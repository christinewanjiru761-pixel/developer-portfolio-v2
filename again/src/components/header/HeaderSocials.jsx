import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://twitter.com/KwemangeN" target='_blank' rel='noreferrer'><FiTwitter /></a>
        <a href="https://www.linkedin.com/in/kwemange-nyagrowa-419147a7/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/jeff254-kedjango" target='_blank' rel='noreferrer'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials