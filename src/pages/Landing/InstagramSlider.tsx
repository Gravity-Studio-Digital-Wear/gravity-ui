import * as React from 'react';
import SwiperCore, {Keyboard, Mousewheel, Navigation, Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Box, Image, Text} from "@chakra-ui/react";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Navigation, Keyboard, Autoplay]);

const slides = [
    {
        image: 'inst_img_1.png'
    },
    {
        image: 'inst_img_2.png'
    },

    {
        image: 'inst_img_2.png'
    },

    {
        image: 'inst_img_1.png'
    }
]


export function InstagramSlider() {
    return (
        <Swiper
            direction={'horizontal'}
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={false}
            mousewheel
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }}
            loop={true}
        >
            {slides.map((slide) =>(
                <SwiperSlide key={slide.image} className={'gr-insta_slide'}>
                    <Image src={slide.image} height={'358px'} width={'358px'}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}