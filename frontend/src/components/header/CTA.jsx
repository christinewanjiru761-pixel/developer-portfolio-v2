import React from 'react'
import Tilt from 'react-tilt'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
      <div className='cta'>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <a href={CV} download className='btn'> Download CV </a>
        </Tilt>
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

  )
}

export default CTA