import React from 'react'
import './portfolio.css'
import {motion} from 'framer-motion'
import Tilt from 'react-tilt'

function Portfolio({projects}) {
  const data = projects
  return (
    <section id='portfolio'>
      <h5>My projects sample</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data && data.map((value) => {
          return (
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
            <motion.article key={value.id} className="portfolio__item" whileHover={{scale:0.9}}>
              <div className="portfolio__item-image">
                <div className='portfolio__details_container'>
                  <div className='portfolio__headline'>
                    <h3>{value.name}</h3>
                  </div>
                  <div className='portfolio__item_details'>
                    <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit est sit blanditiis culpa, delectus perspiciatis et omnis deserunt aperiam nam?</h5>
                  </div>
                  <a href={value.live_demo} className='btn__livedemo' target={'_blank'} rel="noreferrer">
                  <div className="portfolio__item-cta">
                    <p>Live Demo</p>
                  </div>
                  </a>
                </div>
                <img src={value.project_image} alt='' className='portfolio__image_image'/>
              </div>
          </motion.article>
          </Tilt>
          )
        })}
      </div>
      <div className='portfolio__paralax'></div>
    </section>
  )
}

export default Portfolio
