import { useState } from 'react';
import './index.css'
import React from 'react'
import jeansImg from './images/jeans-img.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import slimFit from './images/Slim.png'
import slimStraightFit from './images/slimStraightFit.png'
import straightFit from './images/straightFit.png'
import skinnyFit from './images/skinnyFit.png'



// Import Swiper styles
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';


export function Carousel() {
    return <>
    <section className='carousel'>
        <div className='carousel-container'>
            <div className='jeans-fill-img'>
                <img src={jeansImg} alt="" />
            </div>

            <Swiper className="mySwiper" navigation={true} spaceBetween={5} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} loop={true} pagination={{ clickable: true,}} modules={[Pagination, Navigation]}>
                <SwiperSlide><img src={slimFit} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slimStraightFit} alt="" /></SwiperSlide>
                <SwiperSlide><img src={straightFit} alt="" /></SwiperSlide>
                <SwiperSlide><img src={skinnyFit} alt="" /></SwiperSlide>
            </Swiper>
        
        </div>
    </section>
    </>
}



