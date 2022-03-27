import {observer} from "mobx-react";
import {useService} from "../../../core/decorators/service";
import {BlogService} from "../../../services/BlogService";
import * as React from "react";
import {useHistory} from "react-router-dom";
import {Routes} from "../../../app/routes";
import {Box, Grid, GridItem, Text} from "@chakra-ui/react";
import {Swiper, SwiperSlide} from "swiper/react";

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
                                        <Box
                                            width={'100%'}
                                            height={'100%'}
                                            position={'absolute'}
                                            top={0}
                                            zIndex={3}
                                            className={'gr-news-slider-box  gr-button__backside-border'}
                                            style={{
                                                WebkitMask: 'paint(polygon-border)'
                                            }}
                                            bgColor={'white'}
                                            __css={{
                                                transitionDelay: '300ms',
                                                transition: 'top ease-out 100ms',
                                            }}
                                        />

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
                            >
                                <Box
                                    width={'100%'}
                                    height={'100%'}
                                    position={'absolute'}
                                    top={0}
                                    zIndex={3}
                                    className={'gr-news-slider-box  gr-button__backside-border'}
                                    style={{
                                        WebkitMask: 'paint(polygon-border)'
                                    }}
                                    bgColor={'white'}
                                    __css={{
                                        transitionDelay: '300ms',
                                        transition: 'top ease-out 100ms',
                                    }}
                                />

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