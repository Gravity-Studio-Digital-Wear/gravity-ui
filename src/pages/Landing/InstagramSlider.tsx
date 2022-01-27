import * as React from 'react';
import SwiperCore, {Keyboard, Mousewheel, Navigation, Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Box, Image, Text, useMediaQuery, useToken} from "@chakra-ui/react";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Navigation, Keyboard, Autoplay]);

const slides = [
    {
        image: 'insta_img_1.png',

        inst: '@moonyueyue_'
    },
    {
        image: 'insta_img_2.png',
        inst: '@moonyueyue_'
    },

    {
        image: 'insta_img_3.png',
        inst: '@moonyueyue_'
    },

    {
        image: 'insta_img_4.png',
        inst: '@moonyueyue_'
    },
    {
        image: 'insta_img_5.png',
        inst: '@moonyueyue_'
    },
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
                    <Box position={'relative'}>
                        <Image src={slide.image} height={w} width={h} zIndex={1001}/>

                        <Box zIndex={1002} position={'absolute'} bottom={'24px'} left={'24px'}>
                            <Text color={'white'}>{slide.inst}</Text>
                        </Box>
                    </Box>





                </SwiperSlide>
            ))}
        </Swiper>
    )
}