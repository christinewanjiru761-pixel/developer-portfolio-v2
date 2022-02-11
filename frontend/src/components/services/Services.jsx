import React from 'react';
import Tilt from 'react-tilt';
import './services.css';
import{BiCheck} from 'react-icons/bi';
import {motion} from 'framer-motion';

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
      <motion.article 
        className="service" 
        whileHover={{scale:0.9}} 
        transition={{delay:0.1}}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition ={{ duration: 0.5}}
      >
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Figma</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software design architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>App optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web domain registration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mantainace and support</p>
            </li>
            </ul>
        </motion.article>
        </Tilt>
        <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        >
        <motion.article className="service" whileHover={{scale:0.9}} transition={{delay:0.1}}>
          <div className="service__head">
            <h3>Software Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-commerce websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Payment systems integration (e.g Mpesa / Swipe)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Live chat and video calling</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Point of sale applications (POS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cross-platform mobile apps </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Client management (CRM) apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Static and dynamic website design</p>
            </li>
          </ul>
        </motion.article>
        </Tilt>
        <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        >
        <motion.article className="service" whileHover={{scale:0.9}} transition={{delay:0.1}}>
          <div className="service__head">
            <h3>Related Services</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Computer networking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Digital marketing & Branding</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Video editing ( adverts/podcasts/events e.t.c )</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Digital acceleration.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Process automation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Editing code and fixing bugs</p>
            </li>
          </ul>
        </motion.article>
        </Tilt>
      </div>
    </section>
  )
}

export default Services