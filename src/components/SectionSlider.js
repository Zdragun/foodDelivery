import React from 'react';
import '../css/SectionSlider.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { SwiperNavButton } from './SliderNavButton';
import { Swiper, SwiperSlide } from 'swiper/react';

const SectionSlider = () => {
    return (
      <section>
        <section className='section-slider'>
          <p className='title-rest'>Restaurants</p>
          <button className='show-all-btn'>
            <span>Show all</span>
          </button>
        </section>
        <div className='slider-container'>
          <Swiper spaceBetween={10} slidesPerView='auto'>
          <SwiperNavButton />
            <SwiperSlide className='res-slide'>
              <div className='swiper-item'></div>
            </SwiperSlide>
            <SwiperSlide className='res-slide'>
              <div className='swiper-item'></div>
            </SwiperSlide>
            <SwiperSlide className='res-slide'>
              <div className='swiper-item'></div>
            </SwiperSlide>
            <SwiperSlide className='res-slide'>
              <div className='swiper-item'></div>
            </SwiperSlide>
            <SwiperSlide className='res-slide'>
              <div className='swiper-item'></div>
            </SwiperSlide>
            <SwiperSlide className='res-slide'>
              <div className='swiper-item'></div>
            </SwiperSlide>
            <SwiperSlide className='res-slide'>
              <div className='swiper-item'></div>
            </SwiperSlide>
            <SwiperSlide className='res-slide'>
              <div className='swiper-item'></div>
            </SwiperSlide>
          </Swiper>
        </div>
       
    
      </section>
    );
  };
export default SectionSlider