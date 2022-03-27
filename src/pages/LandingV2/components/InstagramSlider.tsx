import * as React from 'react';
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Box, BoxProps, Flex, Image, Text, useMediaQuery, useToken} from "@chakra-ui/react";

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


export function InstagramSlider(props: BoxProps) {
    const [xl] = useToken(
        'breakpoints',
        ['xl']
    );
    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)

    const w = isLargerThanXl ? '358px' : '340px';
    const h = '408px';

    return (
        <Box {...props}>
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
                {slides.map((slide) => (
                    <SwiperSlide key={slide.image} className={'gr-insta_slide--v2'}>
                        <Box
                            w={'auto'}
                            h={h}
                        >
                            <Box
                                width={'100%'}
                                height={h}
                                position={'absolute'}
                                top={0}
                                zIndex={3}
                                className={'gr-insta-slider-box  gr-button__backside-border'}
                                style={{
                                    WebkitMask: 'paint(polygon-border)'
                                }}
                                bgColor={'white'}
                                css={{
                                    transitionDelay: '300ms',
                                    transition: 'top ease-out 100ms',
                                }}
                            />

                            <Box zIndex={3} position={'absolute'} top={'10px'} left={'14px'}>
                                <Text
                                    color={'white'}
                                    fontFamily={'Sofia Pro'}
                                    fontSize={18}
                                    as={Flex}
                                    alignItems={'flex-start'}
                                >
                                    <Box display={'inline-block'} mr={'12px'}>
                                        <InstVector/>
                                    </Box>

                                    {slide.inst}
                                </Text>
                            </Box>

                            <Box position={'absolute'}
                                 bottom={0}
                                 zIndex={1}
                                 w={w}
                                 h={w}
                            >
                                <Image src={slide.image} height={w} width={h} zIndex={1001}/>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}


function InstVector() {

    return (
        <svg width="4" height="26" viewBox="0 0 4 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2V24" stroke="url(#paint0_linear_1878_665)" stroke-width="4" stroke-linecap="round"/>
            <defs>
                <linearGradient id="paint0_linear_1878_665" x1="2.5" y1="2" x2="2.5" y2="24"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0"/>
                    <stop offset="1" stop-color="white"/>
                </linearGradient>
            </defs>
        </svg>
    )
}