import * as React from 'react';
import {Header} from "./components/Header";
import {Box, BoxProps, Flex, Grid, GridItem, HStack, Link, LinkBox, Stack, Text} from "@chakra-ui/react";
import {ButtonRedisigned} from "./components/ButtonRedisigned";

import {ReactComponent as Logo} from './assets/logo.svg';
import {ReactComponent as RectangleShape} from './assets/rectangle.svg';
import {ReactComponent as SlashesShape} from './assets/slashes.svg';

import {Possibilities} from "./components/Possibilities";
import {InstagramSlider} from "./components/InstagramSlider";
import {WhatsHappening} from "./components/WhatsHappening";
import {OurPartners} from "./components/OurPartners";
import {DiscordIcon, InstaIcon, TelegramIcon, TwitterIcon, YouTubeIcon} from "../../components/icons/IconSocial";
import {TransparentVideo} from "../../components/TransparentVideo";
import {getBox} from "css-box-model";

const {contentBox} = getBox(window.document.body)


export function Landing() {
    const bgHeight = (height: string) => {
        const x = Math.floor(contentBox.width) / 2880;

        const hDiv2 = parseInt(height);

        return (hDiv2 * 2 * x) + 'px';
    }

    return (
        <Stack spacing={0} fontFamily={'Montserrat'}>
            <Block bgImage={'/landing/bg-1-min.jpg'} h={bgHeight('788px')} position={'relative'}>

                <Box position={'absolute'} top={'10%'} right={'-20%'} w={'90%'} zIndex={0}>
                    <TransparentVideo
                        videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/q_70/v1648203083/output_y0svwb.webm'}
                        imageUrl={''}
                        infinite={true}
                    />
                </Box>

                <Box position={'absolute'} top={'15%'} right={'0%'} w={'60%'} zIndex={0}>


                    <TransparentVideo
                        videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/c_scale,q_auto:eco,w_1237/v1648202298/output_hjoavx.webm'}
                        imageUrl={''}
                        infinite={true}
                    />
                </Box>



                <Centered>
                    <Header/>
                    <Box position={'absolute'} top={0} right={0} width={'666px'}>
                        {/*<TransparentVideo*/}
                        {/*    videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/v1648140034/pacan_vejtdz.webm'}*/}

                        {/*    imageUrl={''}*/}
                        {/*/>*/}
                    </Box>
                    <Box mt={'163px'}>
                        <Text
                            fontFamily={'All Round Gothic'}
                            fontSize={54}
                            color={'white'}
                            lineHeight={'68px'}
                            position={'relative'}
                        >
                            Be who you want
                            <br/> wherever you go

                            <Box position={'absolute'} top={'-24px'} left={'-24px'}>
                                <RectangleShape/>
                            </Box>

                        </Text>

                        <Text maxW={'640px'} color={'white'} fontSize={21} mt={'16px'} letterSpacing={'0.01em'}>

                            We make virtual clothes universally wearable, valuable in real currency, and invincible
                            against
                            the decisions of any one game studio. Get exclusive first access to the movement changing
                            downloadable content forever.
                        </Text>





                        <ButtonRedisigned mt={'36px'}>JOIN THE WHITELIST</ButtonRedisigned>
                    </Box>
                </Centered>
            </Block>

            <Block bgImage={'/landing/bg-2-min.jpg'} h={bgHeight('836px')} position={'relative'}>
                <Centered>

                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={54}
                        color={'white'}
                        lineHeight={'68px'}
                        position={'relative'}
                    >
                        Buy once, wear everywhere


                        <Box position={'absolute'} bottom={'-100px'}>

                            <SlashesShape/>
                        </Box>
                    </Text>

                    <Grid templateColumns={'1fr 1fr 1fr'}  gridColumnGap={'30px'} position={'relative'}>
                        <Box>
                            <Text fontFamily={'All Round Gothic'} color={'white'} fontSize={24} mt={'145px'}>
                                Barriers are so web2
                            </Text>

                            <Text maxW={'350px'} color={'white'} fontSize={17} mt={'16px'} letterSpacing={'0.01em'}>

                                Seamlessly wear your NFT apparel on your avatars across metaverses, or flex in your
                                social media photos. Keep it rolling with rare artist-collaborated ornament add-ons and
                                exclusive community bonuses.
                            </Text>
                        </Box>


                        <Box position={'relative'}>

                            <Box  width={'100%'} left={0} mt={'90px'}>
                                <TransparentVideo
                                    videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/c_crop,h_1080,w_870,x_520,y_130/v1648204264/output_pw9auv.webm'}
                                    imageUrl={''}
                                    infinite={true}
                                />
                            </Box>

                        </Box>

                        <Possibilities/>
                    </Grid>


                </Centered>
            </Block>

            <Block bgImage={'/landing/bg-3-min.jpg'} h={bgHeight('1020px')} position={'relative'}>
                <Centered>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={54}
                        color={'white'}
                        lineHeight={'68px'}
                        position={'relative'}
                    >
                        We are <br/> Gravity <br/> the Studio


                        <Box position={'absolute'} top={'-24px'} left={'-24px'}>
                            <RectangleShape/>

                        </Box>
                        <Box position={'absolute'} bottom={'-36px'} left={'170px'}>

                            <SlashesShape/>
                        </Box>

                        <Box position={'absolute'} width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

                            <TransparentVideo
                                infinite={true}
                                videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/v1648202570/output_lo3sg6.webm'}
                                imageUrl={''}
                            />
                        </Box>
                    </Text>

                    <Box mt={'460px'}>
                        <Text maxW={'650px'} color={'white'} fontSize={17} mt={'16px'} letterSpacing={'0.01em'}>
                            We’re a blockchain-driven platform revolutionizing how gamers show off in virtual worlds.
                            Buy your look in one game and still be wearing it everywhere else you play, no repurchase
                            necessary. We digitize fashion designs and make them compatible across all graphic styles
                            and avatars, allowing them to be buyable and wearable in all virtual worlds where our
                            technology is integrated.
                        </Text>
                    </Box>
                </Centered>
            </Block>

            <Block bgImage={'/landing/bg-4-min.jpg'} h={bgHeight('832px')}>
                <Centered>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={54}
                        color={'white'}
                        lineHeight={'68px'}
                        position={'relative'}
                    >
                        Who we’re dressing
                    </Text>


                </Centered>

                <InstagramSlider mt={'40px'}/>

                <Centered>
                    <Flex justifyContent={'center'} mt={'60px'}>
                        <ButtonRedisigned w={'308px'}>FIND US ON INSTAGRAM</ButtonRedisigned>
                    </Flex>
                </Centered>
            </Block>

            <Block bgImage={'/landing/bg-5-min.jpg'} h={bgHeight('943px')}>
                <Centered>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={54}
                        color={'white'}
                        lineHeight={'68px'}
                        position={'relative'}
                    >
                        What’s happening
                    </Text>

                    <WhatsHappening/>

                    <Flex justifyContent={'center'} mt={'60px'}>
                        <ButtonRedisigned w={'193px'}>SEE MORE</ButtonRedisigned>
                    </Flex>
                </Centered>
            </Block>

            <Block bgImage={'/landing/bg-6-min.jpg'} h={bgHeight('364px')}>
                <Centered>
                    <OurPartners/>
                </Centered>
            </Block>

            <Block bgImage={'/landing/bg-7-min.jpg'} h={bgHeight('627px')}>
                <Centered>
                    <Box
                        color={'white'}
                        display={'flex'}
                        alignItems={'center'}
                        flexDirection={'column'}

                        fontWeight={700}
                        letterSpacing={'0.11em'}
                        fontSize={75}
                        textTransform={'uppercase'}
                    >
                        <Text fontFamily={'All Round Gothic'}>
                            Be more in the
                        </Text>
                        <Text
                            fontFamily={'All Round Gothic'}
                            css={{
                                color: 'transparent',
                                WebkitTextStroke: '2px',
                                WebkitTextStrokeColor: 'white',
                            }}
                        >
                            Metaverse
                        </Text>

                        <ButtonRedisigned mt={'40px'} w={'269px'}>JOIN THE WHITELIST</ButtonRedisigned>
                    </Box>
                </Centered>
            </Block>

            <Block bgImage={'/landing/bg-8-min.jpg'} h={bgHeight('222px')}>
                <Centered>
                    <Box height={'1px'} w={'100%'} bgColor={'white'}/>


                    <Box mt={'60px'}>
                        <Grid templateColumns={'repeat(4, 1fr)'}>
                            <Box>
                                <Logo/>
                            </Box>

                            <GridItem colSpan={2}>
                                <Grid templateColumns={'repeat(2, 1fr)'}
                                      fontSize={'14px'}
                                      color={'white'}
                                      textTransform={'uppercase'}
                                      width={'100%'}
                                      gridRowGap={'16px'}
                                      letterSpacing={'0.03em'}
                                >
                                    <LinkBox>NFT Drop</LinkBox>
                                    <LinkBox>for fashion brands</LinkBox>
                                    <LinkBox>for metaverse developers</LinkBox>
                                    <LinkBox>MEET THE TEAM</LinkBox>
                                </Grid>
                            </GridItem>

                            <Box>
                                <Text mb={'16px'} color={'white'} letterSpacing={'0.03em'}>FOLLOW US</Text>

                                <HStack
                                    spacing={'10px'}
                                    sx={{
                                        '--social-icon-fill': '#39373E'
                                    }}
                                >
                                    <Link href={'https://t.me/gravitythestudiogroup'} isExternal>
                                        <TelegramIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                    </Link>
                                    <Link href={'https://discord.gg/DkqaUdY5'} isExternal>
                                        <DiscordIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                    </Link>
                                    <Link href="https://www.instagram.com/gravitythestudio/" isExternal>
                                        <InstaIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                    </Link>
                                    <Link href="https://www.youtube.com/channel/UCKrbhUFFqg-Q2nyrfxN9xjQ" isExternal>
                                        <YouTubeIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                    </Link>
                                    <Link href="https://twitter.com/GravitytheStud" isExternal>
                                        <TwitterIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                    </Link>
                                </HStack>
                            </Box>
                        </Grid>
                    </Box>
                </Centered>
            </Block>
        </Stack>
    )
}

const Block = (props: BoxProps) => {
    return (
        <Box height={'100vh'} bgSize={'contain'} {...props}>
            {props.children}
        </Box>
    )
}

const Centered = ({children}) => {
    return (
        <Box marginLeft={'auto'} marginRight={'auto'} maxW={{lg: '1160px', "2xl": '1160px'}}>
            {children}
        </Box>
    )
}