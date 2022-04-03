import * as React from 'react';
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Box, BoxProps, Flex, Image, Text, useMediaQuery, useToken} from "@chakra-ui/react";
import {toPath} from "svg-points";
import {getBox} from "css-box-model";
import {observer} from "mobx-react";
import {useService} from "../../../core/decorators/service";
import {PageLoadingStore} from "../../../stores/PageLoadingStore";
import {Polygon} from "./Polygon";

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
        inst: '@leila_ismailli'
    },

    {
        image: 'insta_img_4.png',
        inst: '@moonyueyue_'
    },
    {
        image: 'insta_img_5.png',
        inst: '@guichupie'
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
                            <Polygon
                                zIndex={3}
                                position={'absolute'}
                                width={'100%'}
                                height={'100%'}


                                config={{
                                    edges: [[0, 0], [18, 23], [0, 0], [0, 0]]
                                }}
                            >
                                {data => (
                                    <path
                                        className={'gr-polygon-btn-outline'}
                                        d={data.path + 'Z'}
                                        fill="none"
                                        stroke="#ffffff"
                                        strokeWidth={'2px'}
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                    />
                                )}
                            </Polygon>

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
            <path d="M2 2V24" stroke="url(#paint0_linear_1878_665)" strokeWidth="4" strokeLinecap="round"/>
            <defs>
                <linearGradient id="paint0_linear_1878_665" x1="2.5" y1="2" x2="2.5" y2="24"
                                gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0"/>
                    <stop offset="1" stopColor="white"/>
                </linearGradient>
            </defs>
        </svg>
    )
}