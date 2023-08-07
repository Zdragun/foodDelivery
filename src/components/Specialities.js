import React from 'react'
import '../css/Specialities.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperNavButtonSpecial } from './SliderButtonSpecial';
import { Swiper, SwiperSlide } from 'swiper/react';
const Specialities = () => {
  return (
    <section>
    <section className='section-slider'>
      <p className='title-rest'>Specialities</p>
      <button className='show-all-btn'>
        <span>Show all</span>
      </button>
    </section>
    <div className='slider-cont'>
      <Swiper spaceBetween={25} slidesPerView='auto'>
      <SwiperNavButtonSpecial />
        <SwiperSlide className='res-spec'>
          <div className='swiper-spec-item'></div>
        </SwiperSlide>
        <SwiperSlide className='res-spec'>
          <div className='swiper-spec-item'></div>
        </SwiperSlide>
        <SwiperSlide className='res-spec'>
          <div className='swiper-spec-item'></div>
        </SwiperSlide>
        <SwiperSlide className='res-spec'>
          <div className='swiper-spec-item'></div>
        </SwiperSlide>
        <SwiperSlide className='res-spec'>
          <div className='swiper-spec-item'></div>
        </SwiperSlide>
        <SwiperSlide className='res-spec'>
          <div className='swiper-spec-item'></div>
        </SwiperSlide>
        <SwiperSlide className='res-spec'>
          <div className='swiper-spec-item'></div>
        </SwiperSlide>
        <SwiperSlide className='res-spec'>
          <div className='swiper-spec-item'></div>
        </SwiperSlide>
      </Swiper>
    </div>
   

  </section>
  )
}

export default Specialities


