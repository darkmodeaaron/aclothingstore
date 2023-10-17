import './styles/jeansCarousel.css'

// SWIPER

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


// IMAGES

import jeansImg from './images/jeans-img.png'
import slimFit from './images/Slim.png'
import slimStraightFit from './images/slimStraightFit.png'
import straightFit from './images/straightFit.png'
import skinnyFit from './images/skinnyFit.png'


//

export function JeansCarousel() {
    return <>
    <section className='jeansCarousel'>
        <div className='jeansCarousel-container'>
            <div className='jeansCarousel-img'>
                <img src={jeansImg} alt="display image of man holding several pairs of jeans"/>
            </div>
            <Swiper className="mySwiper" navigation={true} spaceBetween={5} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} loop={true} pagination={{ clickable: true,}} modules={[Pagination, Navigation]}>
                <SwiperSlide><img src={slimFit} alt="slim fit jeans example" /></SwiperSlide>
                <SwiperSlide><img src={slimStraightFit} alt="slim/straight fit jeans example" /></SwiperSlide>
                <SwiperSlide><img src={straightFit} alt="straight fit jeans example" /></SwiperSlide>
                <SwiperSlide><img src={skinnyFit} alt="skinny fit jeans example" /></SwiperSlide>
            </Swiper>
        </div>
    </section>
    </>
}
