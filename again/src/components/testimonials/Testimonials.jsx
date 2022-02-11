import React from 'react'
import './testimonials.css'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Tilt from 'react-tilt';



function Testimonials({testimonials}) {
  const test = testimonials

  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {test && test.map((val) => {
          return (
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
            <SwiperSlide key={val.id} className="testimonial">
              <div className="client__avatar">
                <img src={val.project_image} alt='Testimonial Profile' />
              </div>
              <h5 className="client__name">{val.first_name} {val.last_name}</h5>
              <small className="client__review">
                {val.mesage}
              </small>
            </SwiperSlide>
            </Tilt>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
