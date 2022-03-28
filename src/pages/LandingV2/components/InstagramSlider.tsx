import * as React from 'react';
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Box, BoxProps, Flex, Image, Text, useMediaQuery, useToken} from "@chakra-ui/react";
import {toPath} from "svg-points";
import {getBox} from "css-box-model";

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
                            <Polygon zIndex={3} position={'absolute'} width={'100%'} height={'100%'}/>

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

// TODO
function polygon(w, h, offset: { x: number, y: number }) {
    const baseEdges = [[0, 0], [w, 0], [w, h], [0, h]];
    const edges = [[0, 0], [18, 23], [0, 0], [0, 0],]

    let edgesCoords = [];

    for (let i = 0; i < baseEdges.length; i++) {
        const [x0, y0] = baseEdges[i];
        const [dx, dy] = edges[i];

        if (dx === 0 && dy === 0) {
            edgesCoords.push({x: x0, y: y0});

            continue;
        }


        const ddx = {
            x: x0 === 0 ? dx : x0 - dx,
            y: y0,
        };

        const ddy = {
            x: x0,
            y: y0 === 0 ? dy : y0 - dy,
        };

        if (i % 2 === 0) {

            edgesCoords.push(ddy, ddx)
        } else {
            edgesCoords.push(ddx, ddy)
        }
    }

    edgesCoords[0].moveTo = true;


    return toPath(edgesCoords)
}


const Polygon = (props: BoxProps) => {
    const ref = React.useRef()

    const [data, set] = React.useState(null);

    React.useEffect(() => {
        const dim = getBox(ref.current);

        const w = dim.contentBox.width;
        const h = dim.contentBox.height;

        set({
            path: polygon(w, h, {x: 0, y: 0}),
            w,
            h
        })
    }, [ref])

    return (
        <Box ref={ref} {...props}>
            {(data !== null) && (
                <svg viewBox={`0 0 ${data.w} ${data.h}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={'gr-polygon-btn-outline'}
                        d={data.path + 'Z'}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth={'2px'}
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            )}
        </Box>
    );
}