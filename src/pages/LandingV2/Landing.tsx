import * as React from 'react';
import {Box, BoxProps, Flex, Grid, Image, Stack, Text, useMediaQuery, useToken} from "@chakra-ui/react";

import {ReactComponent as RectangleShape} from './assets/rectangle.svg';
import {ReactComponent as RectangleMobileShape} from './assets/rectangle--mobile.svg';
import {ReactComponent as XShapes} from './assets/xshapes.svg';
import {ReactComponent as CodeShape} from './assets/code.svg';
import {ReactComponent as SlashesShape} from './assets/slashes.svg';

import {TransparentVideo} from "../../components/TransparentVideo";
import {Possibilities} from "./components/Possibilities";
import {InstagramSlider} from "./components/InstagramSlider";
import {WhatsHappening} from "./components/WhatsHappening";
import {OurPartners} from "./components/OurPartners";
import {useHistory} from "react-router-dom";
import {Routes} from "../../app/routes";
import {PolygonBorder} from "./components/PolygonBorder";
import {sendAmplitudeData} from "../../utils/amplitude";
import {Page} from "../../core/Page";
import {LandingContainer} from "../../components/containers/LandingContainer";

export const Landing: Page = () => {
    const [md, xl] = useToken(
        'breakpoints',
        ['lg', 'xl']
    );

    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)

    const history = useHistory();

    const joinWhitelist = () => {
        sendAmplitudeData('E_MINT-BTN_FOLLOW')
        window.open('https://www.premint.xyz/gravity-the-studio/ ', '_blank')
    }

    const findUsInstagram = () => {
        sendAmplitudeData('E_INST-BTN_FOLLOW')

        window.open('https://www.instagram.com/gravitythestudio/ ', '_blank')
    }


    return (
        <Stack spacing={0} fontFamily={'Montserrat'} overflow={'hidden'}>
            <Block position={'relative'}>
                {isLargerThanXl && (
                    <Box position={'absolute'} top={'10%'} right={'-20%'} w={'90%'} zIndex={0}>
                        <TransparentVideo
                            videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/q_70/v1648203083/output_y0svwb.webm'}
                            imageUrl={''}
                            infinite={true}
                            fallback={
                                <Image src={'/landing/screen-1-bg.png'}/>
                            }
                        />
                    </Box>
                )}

                {isLargerThanXl && (
                    <Box position={'absolute'} top={'15%'} right={'0%'} w={'60%'} zIndex={0}>
                        <TransparentVideo
                            videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/c_scale,q_auto:eco,w_1237/v1648202298/output_hjoavx.webm'}
                            imageUrl={'/landing/avatar-with-alpha.gif'}
                            infinite={true}
                        />
                    </Box>
                )}

                <Centered>
                    <Box mt={{base: '100px', xl: '163px'}} position={'relative'}>
                        {isLargerThanXl && (
                            <Box position={'absolute'} top={'-100px'} right={'350px'} zIndex={0}>
                                <CodeShape/>
                            </Box>
                        )}

                        {isLargerThanXl && (
                            <Box position={'absolute'} top={'100px'} right={'130px'} zIndex={0}>
                                <XShapes/>
                            </Box>
                        )}

                        <Text
                            fontFamily={'All Round Gothic'}
                            fontSize={{base: 34, xl: 54}}
                            color={'white'}
                            lineHeight={{base: '44px', xl: '68px'}}
                            position={'relative'}
                        >
                            Be who you want
                            <br/> wherever you go

                            <Box position={'absolute'} top={'-24px'} left={'-24px'}
                                 display={{base: 'none', xl: 'block'}}>
                                <RectangleShape/>
                            </Box>


                            <Box position={'absolute'} top={'-48px'} left={0} display={{base: 'block', xl: 'none'}}>
                                <RectangleMobileShape/>
                            </Box>
                        </Text>

                        <Text maxW={'640px'} color={'white'} fontSize={{base: 17, xl: 21}} mt={'16px'}
                              letterSpacing={'0.01em'}>
                            We make virtual clothes universally wearable, valuable in real currency, and invincible
                            against
                            the decisions of any one game studio. Get exclusive first access to the movement changing
                            downloadable content forever.
                        </Text>


                        <PolygonBorder mt={'36px'} onClick={joinWhitelist} w={'269px'}>
                            JOIN THE WHITELIST
                        </PolygonBorder>
                    </Box>


                    {!isLargerThanXl && (
                        <Box position={'relative'} display={'flex'} justifyContent={'center'} mt={'100px'}>
                            <Box maxW={'300px'} position={'relative'} left={'60px'}>
                                <TransparentVideo
                                    videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/c_crop,h_1080,w_770,x_606,y_100,q_auto:eco/v1648202298/output_hjoavx.webm'}
                                    imageUrl={'/landing/CharacterAnimationWithAlphagif.gif'}
                                    infinite={true}
                                />
                            </Box>

                            <Box position={'absolute'} top={0} left={0}>
                                <CodeShape/>
                            </Box>

                            <Box position={'absolute'} right={0} bottom={'100px'}>
                                <XShapes/>
                            </Box>
                        </Box>
                    )}
                </Centered>
            </Block>

            <Block>
                <Centered>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={{base: 34, xl: 54}}
                        color={'white'}
                        lineHeight={{base: '44px', xl: '68px'}}
                        position={'relative'}
                        mt={{base: '0px', xl: '300px'}}
                    >
                        Buy once, wear everywhere

                        <Box position={'absolute'} bottom={'-100px'}>

                            <SlashesShape/>
                        </Box>
                    </Text>

                    <Grid templateColumns={{base: '1fr', xl: '1fr 1fr 1fr'}} gridColumnGap={'30px'}
                          position={'relative'}>
                        <Box>
                            <Text fontFamily={'All Round Gothic'} color={'white'} fontSize={24} mt={'145px'}>
                                Barriers are so web2
                            </Text>

                            <Text maxW={'350px'} color={'white'} fontSize={{base: 16, xl: 17}} mt={'16px'}
                                  letterSpacing={'0.01em'}>
                                Seamlessly wear your NFT apparel on your avatars across metaverses, or flex in your
                                social media photos. Keep it rolling with rare artist-collaborated ornament add-ons and
                                exclusive community bonuses.
                            </Text>
                        </Box>

                        <Box position={'relative'} display={{base: 'flex', xl: 'block'}} justifyContent={'center'}>
                            <Box width={{base: '300px', xl: '100%'}}
                                 left={0}
                                 mt={{xl: '90px'}}

                            >
                                <TransparentVideo
                                    videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/c_crop,h_1080,w_870,x_520,y_130/v1648204264/output_pw9auv.webm'}
                                    imageUrl={'/landing/coat.png'}
                                    infinite={true}
                                />
                            </Box>
                        </Box>

                        <Possibilities/>
                    </Grid>
                </Centered>
            </Block>

            <Block position={'relative'}>
                <Centered>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={{base: 34, xl: 54}}
                        color={'white'}
                        lineHeight={{base: '44px', xl: '68px'}}
                        position={'relative'}
                        mt={{base: '160px'}}
                        zIndex={2}
                    >
                        We are <br/> Gravity <br/> the Studio

                        <Box position={'absolute'} top={'-24px'} left={'-24px'} display={{base: 'none', xl: 'block'}}>
                            <RectangleShape/>
                        </Box>

                        <Box position={'absolute'} top={'-48px'} left={0} display={{base: 'block', xl: 'none'}}>
                            <RectangleMobileShape/>
                        </Box>
                        {isLargerThanXl && (
                            <Box position={'absolute'}
                                 right={'-20px'}
                                 bottom={'-30px'}
                            >
                                <CodeShape/>
                            </Box>
                        )}


                        <Box position={'absolute'}
                             bottom={{base: '0', xl: '-36px'}}
                             left={{xl: '170px'}}
                             right={{base: 0, xl: '0'}}
                        >
                            <SlashesShape/>
                        </Box>

                        <Box position={'absolute'}
                             width={'100%'}
                             height={'100%'}
                             display={'flex'}
                             justifyContent={'center'}
                             alignItems={'center'}
                             zIndex={0}
                        >

                            {isLargerThanXl && (
                                <TransparentVideo
                                    infinite={true}
                                    videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/v1648202570/output_lo3sg6.webm'}
                                    imageUrl={'/landing/cloud.png'}
                                />)}
                        </Box>
                    </Text>

                    <Box mt={{xl: '460px'}}>
                        <Text maxW={'650px'} color={'white'} fontSize={17} mt={'16px'} letterSpacing={'0.01em'}>
                            We’re a blockchain-driven platform revolutionizing how gamers show off in virtual worlds.
                            Buy your look in one game and still be wearing it everywhere else you play, no repurchase
                            necessary. We digitize fashion designs and make them compatible across all graphic styles
                            and avatars, allowing them to be buyable and wearable in all virtual worlds where our
                            technology is integrated.
                        </Text>
                    </Box>

                    {!isLargerThanXl && (
                        <Box mt={'40px'} position={'relative'}>
                            <Box position={'absolute'}
                                 right={'-20px'}
                                 bottom={'-80px'}
                            >
                                <CodeShape/>
                            </Box>

                            {!isLargerThanXl && (
                                <TransparentVideo
                                    infinite={true}
                                    videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/v1648202570/output_lo3sg6.webm'}
                                    imageUrl={''}
                                />
                            )}
                        </Box>
                    )}
                </Centered>
            </Block>

            <Block>
                <Centered>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={{base: 34, xl: 54}}
                        color={'white'}
                        lineHeight={{base: '44px', xl: '68px'}}
                        position={'relative'}
                        mt={{base: '160px'}}
                    >
                        Who we’re dressing
                    </Text>
                </Centered>

                <InstagramSlider mt={'40px'}/>

                <Centered>
                    <Flex justifyContent={'center'} mt={'60px'}>

                        <PolygonBorder w={'308px'} onClick={findUsInstagram}>
                            FIND US ON INSTAGRAM
                        </PolygonBorder>
                    </Flex>
                </Centered>
            </Block>

            <Block>
                <Centered>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={{base: 34, xl: 54}}
                        color={'white'}
                        lineHeight={{base: '44px', xl: '68px'}}
                        position={'relative'}
                        mt={{base: '120px'}}
                    >
                        What’s happening
                    </Text>

                    <WhatsHappening/>

                    <Flex justifyContent={'center'} mt={'60px'}>
                        <PolygonBorder w={'193px'} onClick={() => history.push(Routes.news)}>SEE MORE</PolygonBorder>
                    </Flex>
                </Centered>
            </Block>

            <Block>
                <Centered>
                    <OurPartners/>
                </Centered>
            </Block>

            <Block>
                <Centered>
                    <Box
                        color={'white'}
                        display={'flex'}
                        alignItems={{base: 'flex-start', xl: 'center'}}
                        flexDirection={'column'}
                        fontWeight={700}
                        letterSpacing={'0.11em'}
                        fontSize={{base: 39, xl: 75}}
                        textTransform={'uppercase'}
                        mt={{base: '120px', xl: '300px'}}
                    >
                        <Text fontFamily={'All Round Gothic'}>
                            Be more in the
                        </Text>

                        <Text
                            fontFamily={'All Round Gothic'}
                            css={{
                                color: 'transparent',
                                WebkitTextStroke: isLargerThanXl ? '2px' : '1px',
                                WebkitTextStrokeColor: 'white',
                            }}
                        >
                            Metaverse
                        </Text>

                        <PolygonBorder mt={'40px'} w={'269px'} onClick={joinWhitelist}>JOIN THE
                            WHITELIST</PolygonBorder>
                    </Box>
                </Centered>
            </Block>

            <Block pb={'60px'}>
                <Centered>

                </Centered>
            </Block>
        </Stack>
    )
}

Landing.getPageContainer = LandingContainer;

const Block = (props: BoxProps) => {
    return (
        <Box height={'auto'} zIndex={2}  {...props}>
            {props.children}
        </Box>
    )
}

const Centered = ({children}) => {
    return (
        <Box
            marginLeft={'auto'}
            marginRight={'auto'}
            maxW={{lg: '1160px', "2xl": '1160px'}}
            px={{base: '16px', xl: 0}}
        >
            {children}
        </Box>
    )
}


function Background(props: BoxProps) {
    return (
        <Box {...props}>
            <Image src={'/landing/bg-1-min.jpg'}/>
            <Image src={'/landing/bg-2-min.jpg'}/>
            <Image src={'/landing/bg-3-min.jpg'}/>
            <Image src={'/landing/bg-4-min.jpg'}/>
            <Image src={'/landing/bg-5-min.jpg'}/>
            <Image src={'/landing/bg-6-min.jpg'}/>
            <Image src={'/landing/bg-7-min.jpg'}/>
            <Image src={'/landing/bg-8-min.jpg'}/>
        </Box>
    )
}