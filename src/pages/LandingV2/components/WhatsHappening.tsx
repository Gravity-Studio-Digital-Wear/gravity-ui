import {observer} from "mobx-react";
import {useService} from "../../../core/decorators/service";
import {BlogService} from "../../../services/BlogService";
import * as React from "react";
import {useHistory} from "react-router-dom";
import {Routes} from "../../../app/routes";
import {Box, BoxProps, Grid, GridItem, Text} from "@chakra-ui/react";
import {Swiper, SwiperSlide} from "swiper/react";
import {toPath} from "svg-points";
import {getBox} from "css-box-model";

function formatDate(date: string) {
    const d = new Date(date);

    return new Intl.DateTimeFormat('en-GB').format(d);
}


const BlogItemPolygon = `
    0 0, 
    calc(100% - 30px) 0, 
    100% 30px, 
    100% calc(100% - 21px),
    calc(100% - 21px) 100%,
    21px 100%,
    0 calc(100% - 21px)
`


export const WhatsHappening = observer(function WhatsHappening() {
    const blog = useService(BlogService);

    React.useEffect(() => {
        blog.fetchPostList();
    }, [])

    const history = useHistory();

    const toPost = (id: string) => {
        history.push(Routes.news + '/' + id);
    }

    return (
        <>
            <Box display={{base: 'block', xl: 'none'}} mt={'42px'}>
                {blog.posts.length && (
                    <Swiper
                        direction={'horizontal'}
                        slidesPerView={'auto'}
                        spaceBetween={8}
                        width={342}
                        pagination={false}
                        mousewheel
                        loop={true}
                    >
                        {blog.posts.map(post => {
                            return (
                                <SwiperSlide key={post.id} className={'gr-news_slide'}>
                                    <Box
                                        bgColor={'rgba(255, 255, 255, 0.1)'}
                                        color={'white'}
                                        cursor={'pointer'}
                                        onClick={() => toPost(post.id)}
                                        css={{
                                            clipPath: `polygon(${BlogItemPolygon})`,
                                            backdropFilter: 'blur(44px)'
                                        }}
                                    >
                                        <Polygon zIndex={4} position={'absolute'} width={'100%'} height={'100%'}/>

                                        <Box
                                            width={'100%'}
                                            bg={'url(' + post.featuredImage + ')'}
                                            bgPosition={'center'}
                                            bgSize={'contain'}
                                            bgRepeat={'no-repeat'}
                                            height={'220px'}
                                        />

                                        <Box height={'220px'} position={'relative'} px={'16px'}>
                                            <Text fontWeight={'bold'}
                                                  letterSpacing={'0.02em'}
                                                  fontSize={25}
                                                  textTransform={'uppercase'}
                                                  fontFamily={'All Round Gothic'}
                                                  mt={'20px'}>
                                                {post.name}
                                            </Text>

                                            <Text fontWeight={400}
                                                  letterSpacing={'0.02em'}
                                                  fontSize={16}
                                                  fontFamily={'Montserrat'}
                                                  position={'absolute'}
                                                  bottom={'78px'}
                                                  maxW={'calc(100% - 32px)'}
                                                  mt={'20px'}>
                                                {post.metaDescription}
                                            </Text>

                                            <Text fontWeight={400} position={'absolute'} bottom={'18px'}>
                                                {formatDate(post.publishDate)}
                                            </Text>

                                            <Box width={'100%'}
                                                 height={'2px'}
                                                 bg={'#523774'}
                                                 position={'absolute'}
                                                 bottom={0}
                                            />
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            )
                        })
                        }
                    </Swiper>
                )}
            </Box>

            <Grid
                display={{base: 'none', xl: 'grid'}}
                templateColumns={'repeat(3, 1fr)'}
                columnGap={'30px'}
                mt={'50px'}
            >
                {blog.posts.slice(0, 3).map(post => {
                    return (
                        <GridItem key={post.id}>
                            <Box
                                cursor={'pointer'}
                                onClick={() => toPost(post.id)}
                                bgColor={'rgba(255, 255, 255, 0.1)'}
                                color={'white'}
                                css={{
                                    clipPath: `polygon(${BlogItemPolygon})`,
                                    backdropFilter: 'blur(44px)'
                                }}
                                h={'480px'}
                                position={'relative'}
                            >
                                <Polygon zIndex={4} position={'absolute'} width={'100%'} height={'100%'}/>

                                <Box
                                    width={'100%'}
                                    bg={'url(' + post.featuredImage + ')'}
                                    bgPosition={'center'}
                                    bgSize={'contain'}
                                    bgRepeat={'no-repeat'}
                                    height={'242px'}
                                />

                                <Box height={'220px'} position={'relative'} px={'16px'}>
                                    <Text fontWeight={'bold'}
                                          letterSpacing={'0.02em'}
                                          fontSize={25}
                                          textTransform={'uppercase'}
                                          fontFamily={'All Round Gothic'}
                                          mt={'20px'}>
                                        {post.name}
                                    </Text>

                                    <Text fontWeight={400}
                                          letterSpacing={'0.02em'}
                                          fontSize={16}
                                          fontFamily={'Montserrat'}
                                          position={'absolute'}
                                          bottom={'78px'}
                                          mt={'20px'}>
                                        {post.metaDescription}
                                    </Text>

                                    <Text fontWeight={400} position={'absolute'} bottom={'18px'}>
                                        {formatDate(post.publishDate)}
                                    </Text>
                                </Box>
                            </Box>
                        </GridItem>
                    )
                })}
            </Grid>
        </>
    )
});

// TODO
function polygon(w, h, offset: { x: number, y: number }) {
    const baseEdges = [[0, 0], [w, 0], [w, h], [0, h]];
    const edges = [[0, 0], [30, 30], [21, 21], [21, 21],]

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