import React from 'react'
import Tilt from 'react-tilt'
import './about.css'
import ME from '../../assets/facial-3.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
function About() {
  return (
    <section id='about'>
      <h5>About Me</h5>
      <h2>Industrial Summary</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Kwemange Nyagrowa" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            >
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            </Tilt>
            <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            >
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            </Tilt>
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
            </Tilt>
          </div>

          <p>
            Software developer since 2019. 
          </p>
          <p>  
            10,000+ hours of working with companies, churches, schools and individuals to provide software solutions in web development, cross-platform mobile applications, UI/UX design and API design.
          </p>
          <p>
            Get live demo of projects and more information below.
          </p>
          <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          >
            <a href='#contact' className='btn btn-primary'> Let's Talk </a>
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About