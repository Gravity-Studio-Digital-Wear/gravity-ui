import * as React from 'react';
import SwiperCore, {Keyboard, Mousewheel, Navigation, Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Box, Image, Text, useMediaQuery, useToken} from "@chakra-ui/react";

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
    const [xl] = useToken(
        'breakpoints',
        ['xl']
    );
    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)


    const w = isLargerThanXl ? '358px' : '310px';
    const h = isLargerThanXl ? '358px' : '310px';

    return (
        <Swiper
            direction={'horizontal'}
            slidesPerView={'auto'}
            width={+w.replace('px', '')}
            spaceBetween={isLargerThanXl ? 30 : 8}
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
                    <Image src={slide.image} height={w} width={h}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}