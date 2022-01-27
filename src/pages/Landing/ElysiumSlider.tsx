import * as React from 'react';

import SwiperCore, {Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Box, Text, useMediaQuery, useToken} from "@chakra-ui/react";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Navigation, Keyboard]);

const slides = [
    {
        image: '/elysium_slide_1.png',
        title: `Welcome to Elysium, Nova. `,
        desc: `Nova wears the Venusian Gown.`
    },
    {
        image: '/elysium_slide_2.png',
        title: `I assure you you'll like it here with us. `,
        desc: `The Singular wears our Fluted Coat (available from @gravitythestudio) and the Anonymous Veil (available from @xr.couture)⠀`
    },
    {
        image: '/elysium_slide_3.png',
        title: `Come with me.`,
        desc: `Nova wears the Venusian Gown.`
    },
    {
        image: '/elysium_slide_4.png',
        title: `The Denizens are wearing the Water, Beta, and Porcelain dresses.`,
        desc: `Nova wears the Venusian Gown.`
    },
    {
        image: '/elysium_slide_5.png',
        title: `Nova`,
        desc: `Nova wears the Venusian Gown.`
    },
    {
        image: '/elysium_slide_6.png',
        title: `End of The Venusian chapter ✨`,
        desc: `The Stranger is wearing the Feather Robe`
    },
]


export function ElysiumSlider() {
    const [xl] = useToken(
        'breakpoints',
        ['xl']
    );
    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)


    const w = isLargerThanXl ? '564px' : '342px';
    const h = isLargerThanXl ? '747px' : '454px';

    return (
        <Swiper
            direction={'horizontal'}
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={false}
            navigation={{
                nextEl: '.elysium-next',
                prevEl: '.elysium-prev'
            }}
            loop={true}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.image} className={'gr-elysium_slide'}>
                    <Box
                        width={w}
                        height={h}
                        bg={'url(' + slide.image + ')'}
                        bgSize={'contain'}
                        position={'relative'}
                        display={"flex"}
                        alignItems={'flex-end'}
                    >
                        <Box position={'relative'} bottom={'92px'} color={'white'} px={'30px'}>
                            <Text fontSize={24} fontWeight={400}>{slide.title}</Text>
                            <Text mt={'4px'} fontSize={16} fontWeight={400} color={'basic.100'}>{slide.desc}</Text>
                        </Box>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}