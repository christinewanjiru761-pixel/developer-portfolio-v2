import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Tilt from 'react-tilt'


function Header() {
  return (
    <header>
      <div className="container header__container">
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <big>Kwemange Nyagrowa</big>
        </Tilt>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
        <h5 className="text-light">
          Full-Stack Developer( backend heavy)
        </h5>
        </Tilt>
        <CTA />
        <HeaderSocials />
        <div className="paralax__container"></div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header