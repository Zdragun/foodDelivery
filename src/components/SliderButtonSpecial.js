import React from 'react';
import { useSwiper } from 'swiper/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
export const SwiperNavButtonSpecial = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btn-nx">
      <button onClick={() => swiper.slidePrev()}><AiOutlineArrowLeft /> </button>
      <button onClick={() => swiper.slideNext()}><AiOutlineArrowRight/></button>

    </div>
  );
};