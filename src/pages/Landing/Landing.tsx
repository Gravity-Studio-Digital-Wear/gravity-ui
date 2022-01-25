import * as React from 'react';
import {
    Box,
    Button,
    chakra, Flex,
    Grid,
    GridItem,
    HStack,
    Image,
    PropsOf,
    Stack,
    StylesProvider,
    Text,
    useMultiStyleConfig
} from "@chakra-ui/react";
import {Navigation} from "../../components/Navbar/Navbar";
import {Steps} from "./Steps";
import {ElysiumSlider} from "./ElysiumSlider";
import {InstagramSlider} from "./InstagramSlider";
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Navigation, Keyboard, Autoplay]);

const BgGradientTextCmp = chakra(Text, {
    baseStyle: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
});

type BgGradientProps = PropsOf<typeof BgGradientTextCmp>;

const BgGradientText = (props: BgGradientProps) => {
    return (
        <BgGradientTextCmp style={{'WebkitBackgroundClip': 'text'}} {...props}/>
    )
}

function TopSlider() {
    return (
        <Box bg={'url("/shape_1.png")'} width={'100%'} height={{base: '714px', xl: '778px'}} position={'relative'}>
            <Box position={'absolute'} top={0} left={0} zIndex={1001}>
                <Navigation isLanding={true}/>
            </Box>

            <Box
                zIndex={1000}
                maxWidth={'1132px'}
                marginLeft={'auto'}
                marginRight={'auto'}
                height={'100%'}
                position={'relative'}
            >
                <Box position={'absolute'} bottom={0} left={'0'} width={'100%'} display={'flex'} justifyContent={{base: 'center', xl: 'flex-end'}}  zIndex={1000}>
                    <Image src={"/model_1.png"} width={{base: '343px',xl: '655px'}}/>
                </Box>

                <Box pt={{base: '140px', xl: '200px'}} position={'relative'} zIndex={1001} px={{base: '16px'}}
                     display={{base: 'flex', xl: 'block'}}
                     justifyContent={'center'}>
                    <Text textTransform={'uppercase'}
                          fontWeight={'700'}
                          color={'white'}
                          textAlign={{base: 'center', xl: 'left'}}
                          fontSize={{base: '53px', xl: '94px'}}
                          letterSpacing={'0.01em'} lineHeight={1.1}
                    >
                        Be more in <br/> the Metaverse
                    </Text>

                    <Text
                        mt={'24px'}
                        fontSize={24}
                        fontWeight={'400'}
                        color={'white'}
                        display={{base: 'none', xl: 'block'}}
                    >
                        The first luxury collections crafted specifically for avatars.
                    </Text>

                    <Button w={'220px'} mt={'40px'} display={{base: 'none', xl: 'block'}}>Discover now</Button>
                </Box>
            </Box>
        </Box>
    )
}

function HowItWorks() {
    return (
        <Box>
            <Box
                mt={'100px'}
                maxWidth={'1132px'}
                marginLeft={'auto'}
                marginRight={'auto'}
                height={'100%'}
                position={'relative'}
            >
                <Text align={'center'}
                      textTransform={'uppercase'} fontSize={{base: 42, xl: 80}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}

                >
                    How it {' '}
                    <BgGradientText as={'span'}
                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%)'}>
                        works
                    </BgGradientText>
                </Text>


                <Steps/>

                <Flex justifyContent={'center'}>

                    <Button w={'220px'} mt={'60px'}>See more</Button>
                </Flex>
            </Box>
        </Box>
    )
}

function Bonuses() {
    return (
        <Box mt={'200px'}>
            <Box
                mt={'100px'}
                maxWidth={'1132px'}
                marginLeft={'auto'}
                marginRight={'auto'}
                height={'100%'}
                position={'relative'}
                px={{base: '16px', xl: 0}}
            >
                <Text align={'left'}
                      textTransform={'uppercase'} fontSize={{base: 53, xl: 80}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}

                >
                    Owner {' '}
                    <BgGradientText as={'span'}
                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}>
                        Bonuses
                    </BgGradientText>
                </Text>


                <Box display={'flex'} justifyContent={'center'}>
                    <Grid templateColumns={{base: '1fr', xl: 'repeat(3, 1fr)'}} rowGap={{base: '30px', xl: '60px'}} mt={'60px'}>
                        <GridItem>
                            <HStack spacing={'24px'} align={'flex-start'}>
                                <BonusPlus/>

                                <Text>
                                    Each design is {' '}

                                    <BgGradientText as={'span'}
                                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}>
                                        a unique <br/>or mythic-ranked NFT
                                    </BgGradientText>
                                </Text>
                            </HStack>
                        </GridItem>
                        <GridItem>
                            <HStack spacing={'24px'} align={'flex-start'}>
                                <BonusPlus/>

                                <Text>
                                    Upload your photo to have {' '}
                                    <BgGradientText as={'span'}
                                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}>
                                        your <br/>NFT custom 3D-tailored
                                    </BgGradientText> {' '}
                                    and show off <br/> on your profiles
                                </Text>
                            </HStack>
                        </GridItem>
                        <GridItem>
                            <HStack spacing={'24px'} align={'flex-start'}>
                                <BonusPlus/>

                                <Text>
                                    <BgGradientText as={'span'}
                                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}>

                                        Build the legend
                                    </BgGradientText> {' '}of your coveted <br/>
                                    NFT couture by renting out custom 3D <br/> tailorings to others
                                </Text>
                            </HStack>
                        </GridItem>
                        <GridItem>
                            <HStack spacing={'24px'} align={'flex-start'}>
                                <BonusPlus/>

                                <Text>

                                    Access {' '}
                                    <BgGradientText as={'span'}
                                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}>
                                        exclusive launch events
                                    </BgGradientText>
                                    <br/> in the Metaverse
                                </Text>
                            </HStack>
                        </GridItem>
                        <GridItem>
                            <HStack spacing={'24px'}>
                                <BonusPlus/>

                                <Text>
                                    <BgGradientText as={'span'}
                                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}>
                                        Collect and resell
                                    </BgGradientText> {' '}
                                    your rare virtual <br/> wardrobe
                                </Text>
                            </HStack>
                        </GridItem>
                    </Grid>
                </Box>

            </Box>
        </Box>
    )
}

function BonusPlus() {
    return (
        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
                <rect x="9" y="9" width="32" height="32" fill="url(#paint0_radial_923_7114)"/>
                <rect x="9" y="9" width="32" height="32" fill="url(#paint1_angular_923_7114)"
                      style={{mixBlendMode: 'soft-light'}}/>
            </g>
            <path
                d="M14.1017 0.5V30.5H15.8983V0.5H14.1017ZM30 14.6017L4.63094e-08 14.6017L-4.63094e-08 16.3983L30 16.3983V14.6017Z"
                fill="url(#paint2_radial_923_7114)"/>
            <path
                d="M14.1017 0.5V30.5H15.8983V0.5H14.1017ZM30 14.6017L4.63094e-08 14.6017L-4.63094e-08 16.3983L30 16.3983V14.6017Z"
                fill="url(#paint3_angular_923_7114)" style={{mixBlendMode: 'soft-light'}}/>
            <defs>
                <radialGradient id="paint0_radial_923_7114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(16.4836 -0.427024) rotate(55.614) scale(49.4657 54.1533)">
                    <stop offset="0.0677083" stop-color="#FDF6F8"/>
                    <stop offset="0.318717" stop-color="#EB80B2"/>
                    <stop offset="0.640473" stop-color="#B89DDA"/>
                    <stop offset="0.91993" stop-color="#7B61FF"/>
                    <stop offset="1" stop-color="#523774"/>
                </radialGradient>
                <radialGradient id="paint1_angular_923_7114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(17.1101 4.27784) rotate(70.2767) scale(48.3638 19.7978)">
                    <stop offset="0.229703" stop-color="white" stop-opacity="0.72"/>
                    <stop offset="0.244792"/>
                    <stop offset="0.421875" stop-color="white" stop-opacity="0.72"/>
                    <stop offset="0.608329"/>
                    <stop offset="0.778141" stop-color="white" stop-opacity="0.72"/>
                    <stop offset="0.969728"/>
                </radialGradient>
                <radialGradient id="paint2_radial_923_7114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(7.01587 -8.33784) rotate(55.614) scale(46.3741 50.7687)">
                    <stop offset="0.0677083" stop-color="#FDF6F8"/>
                    <stop offset="0.318717" stop-color="#EB80B2"/>
                    <stop offset="0.640473" stop-color="#B89DDA"/>
                    <stop offset="0.91993" stop-color="#7B61FF"/>
                    <stop offset="1" stop-color="#523774"/>
                </radialGradient>
                <radialGradient id="paint3_angular_923_7114" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(7.60317 -3.92703) rotate(70.2767) scale(45.3411 18.5604)">
                    <stop offset="0.229703" stop-color="white" stop-opacity="0.72"/>
                    <stop offset="0.244792"/>
                    <stop offset="0.421875" stop-color="white" stop-opacity="0.72"/>
                    <stop offset="0.608329"/>
                    <stop offset="0.778141" stop-color="white" stop-opacity="0.72"/>
                    <stop offset="0.969728"/>
                </radialGradient>
            </defs>
        </svg>

    )
}

function Elysium() {

    return (
        <Box mt={{base: '120px', xl: '200px'}}>
            <Box
                mt={'100px'}
                maxWidth={'1132px'}
                marginLeft={'auto'}
                marginRight={'auto'}
                height={'100%'}
                position={'relative'}
                px={{base: '16px', xl: 0}}
            >
                <Text align={'left'}
                      textTransform={'uppercase'} fontSize={{base: 42, xl: 80}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}

                >
                    WELCOME TO {' '} <br/>
                    <BgGradientText as={'span'}
                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}>
                        ELYSIUM
                    </BgGradientText>
                </Text>

                <Box position={'absolute'} top={4} right={0} display={{base: 'none', xl: 'block'}}>
                    <svg width="164" height="168" viewBox="0 0 164 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_923_7331" fill="white">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M81.6492 149.922L132.961 103.646L109.385 82.3828L96.8403 93.6959L96.8403 19.6416L63.4975 19.6416L63.4975 91.215L53.7043 82.3828L30.1274 103.646L81.4396 149.922L81.5444 149.828L81.6492 149.922Z"/>
                        </mask>
                        <path
                            d="M132.961 103.646L134.301 105.131L135.948 103.646L134.301 102.161L132.961 103.646ZM81.6492 149.922L80.3097 151.408L81.6492 152.616L82.9887 151.408L81.6492 149.922ZM109.385 82.3828L110.724 80.8976L109.385 79.6896L108.045 80.8976L109.385 82.3828ZM96.8403 93.6959L94.8403 93.6959L94.8403 98.1928L98.1798 95.1811L96.8403 93.6959ZM96.8403 19.6416L98.8403 19.6416L98.8403 17.6416L96.8403 17.6416L96.8403 19.6416ZM63.4975 19.6416L63.4975 17.6416L61.4975 17.6416L61.4975 19.6416L63.4975 19.6416ZM63.4975 91.215L62.1581 92.7002L65.4975 95.7119L65.4975 91.215L63.4975 91.215ZM53.7043 82.3828L55.0437 80.8976L53.7043 79.6896L52.3648 80.8976L53.7043 82.3828ZM30.1274 103.646L28.7879 102.161L27.1411 103.646L28.7879 105.131L30.1274 103.646ZM81.4396 149.922L80.1001 151.408L81.4396 152.616L82.7791 151.408L81.4396 149.922ZM81.5444 149.828L82.8839 148.343L81.5444 147.135L80.2049 148.343L81.5444 149.828ZM131.622 102.161L80.3098 148.437L82.9887 151.408L134.301 105.131L131.622 102.161ZM108.045 83.868L131.622 105.131L134.301 102.161L110.724 80.8976L108.045 83.868ZM98.1798 95.1811L110.724 83.868L108.045 80.8976L95.5009 92.2107L98.1798 95.1811ZM94.8403 19.6416L94.8403 93.6959L98.8403 93.6959L98.8403 19.6416L94.8403 19.6416ZM63.4975 21.6416L96.8403 21.6416L96.8403 17.6416L63.4975 17.6416L63.4975 21.6416ZM65.4975 91.215L65.4975 19.6416L61.4975 19.6416L61.4975 91.215L65.4975 91.215ZM52.3648 83.868L62.1581 92.7002L64.837 89.7297L55.0437 80.8976L52.3648 83.868ZM31.4668 105.131L55.0437 83.868L52.3648 80.8976L28.7879 102.161L31.4668 105.131ZM82.779 148.437L31.4668 102.161L28.7879 105.131L80.1001 151.408L82.779 148.437ZM80.2049 148.343L80.1001 148.437L82.7791 151.408L82.8839 151.313L80.2049 148.343ZM82.9887 148.437L82.8839 148.343L80.2049 151.313L80.3097 151.408L82.9887 148.437Z"
                            fill="#523774" mask="url(#path-1-inside-1_923_7331)"/>
                    </svg>

                </Box>
            </Box>

            <Box mt={{ base: '44px', xl: '136px'}}>
                <ElysiumSlider/>
            </Box>
        </Box>
    )
}

function WeAreLuxury() {
    return (
        <Box mt={{base: '120px', xl: '200px'}}>
            <Box
                mt={'100px'}
                maxWidth={'1132px'}
                marginLeft={'auto'}
                marginRight={'auto'}
                height={'100%'}
                position={'relative'}
                px={{base: '16px', xl: 0}}
            >
                <Text align={'left'}
                      textTransform={'uppercase'} fontSize={{base: 42, xl: 80}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}

                >
                    We are a luxury
                </Text>

                <Text align={'left'}
                      textTransform={'uppercase'} fontSize={{base: 42, xl: 80}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}
                      position={'relative'}
                      left={{base: '0',xl: '40%'}}
                >
                    <Box position={'absolute'} top={'31px'} left={'-310px'}>
                        <svg width="153" height="19" viewBox="0 0 153 19" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="153" height="19" fill="#79B3FA"/>
                        </svg>
                    </Box>
                    <BgGradientText as={'span'}
                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}>
                        fashion house
                    </BgGradientText>
                </Text>

                <Box position={'relative'} left={{base: '0',xl: '40%'}} width={{base: '100%', xl: '60%'}} mt={'16px'}>
                    <Text fontSize={{base: '18px', xl: '29px'}} color={'basic.500'} lineHeight={{base: '29px', xl: '40px'}}>
                        exploring posthuman identity and status in virtual worlds. <br/><br/>
                        We redefine east-meets-west aesthetics from <br/> as well as speculative cyberpunk futures.
                        Through our collections we explore the story of a digital utopia overlaid on a physical dystopia
                        and the human-machine dynamics therein.
                    </Text>
                </Box>

            </Box>
        </Box>
    )
}

function WeAreDressing() {
    return (
        <Box mt={{base: '120px', xl: '200px'}}>
            <Box
                mt={'100px'}
                maxWidth={'1132px'}
                marginLeft={'auto'}
                marginRight={'auto'}
                height={'100%'}
                position={'relative'}
                px={{base: '16px', xl: 0}}
            >
                <Text align={'left'}
                      textTransform={'uppercase'} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}
                      fontSize={{base: 42, xl: 80}}
                >
                    WHO WE'RE
                </Text>
                <Text align={'left'}
                      textTransform={'uppercase'} fontSize={{base: 42, xl: 80}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}

                >
                    <BgGradientText as={'span'}
                                    bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}>
                        dressing
                    </BgGradientText>
                </Text>


            </Box>

            <Box mt={'50px'}>
                <InstagramSlider/>
            </Box>

            <Box display={'flex'} justifyContent={'center'} mt={'40px'}>
                <Button  color={'white'} onClick={() => window.open('https://www.instagram.com/gravitythestudio/')}>Find us on instagram</Button>
            </Box>
        </Box>
    )
}

function WhatsHappening() {
    return (
        <Box mt={{base: '120px', xl: '200px'}}>
            <Box
                mt={'100px'}
                maxWidth={'1132px'}
                marginLeft={'auto'}
                marginRight={'auto'}
                height={'100%'}
                position={'relative'}
                px={{base: '16px', xl: 0}}
            >
                <Text align={'left'}
                      textTransform={'uppercase'} fontSize={{base: 42, xl: 80}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}

                >
                    WHAT'S {' '} <BgGradientText as={'span'}
                                                 bg={'linear-gradient(270deg, #B89DDA 10.94%, #F07DAD 50.95%, #78B2FA 89.06%);'}> HAPPENING </BgGradientText>
                </Text>

                <Box display={{base: 'block', xl: 'none'}} mt={'42px'}>
                    <Swiper
                        direction={'horizontal'}
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={false}
                        mousewheel
                        loop={true}
                    >
                        <SwiperSlide>
                            <Box bg={'white'}>
                                <Image src={'/news_1.png'}/>

                                <Box px={'16px'}>
                                    <Text fontWeight={700} letterSpacing={'0.02em'} fontSize={25} color={'basic.500'} mt={'20px'}>
                                        WE'RE RAISING SEED FUNDS
                                    </Text>

                                    <Text fontWeight={400} mt={'70px'} mb={'18px'}>
                                        21/12/2021
                                    </Text>


                                </Box>



                                <Box width={'100%'} height={'2px'} bg={'#523774'}/>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box bg={'white'}>
                                <Image src={'/news_1.png'}/>

                                <Box px={'16px'}>
                                    <Text fontWeight={700} letterSpacing={'0.02em'} fontSize={25} color={'basic.500'} mt={'20px'}>
                                        WE'RE RAISING SEED FUNDS
                                    </Text>

                                    <Text fontWeight={400} mt={'70px'} mb={'18px'}>
                                        21/12/2021
                                    </Text>


                                </Box>

                                <Box width={'100%'} height={'2px'} bg={'#523774'}/>
                            </Box>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Box bg={'white'}>
                                <Image src={'/news_1.png'}/>

                                <Box px={'16px'}>
                                    <Text fontWeight={700} letterSpacing={'0.02em'} fontSize={25} color={'basic.500'} mt={'20px'}>
                                        WE'RE RAISING SEED FUNDS
                                    </Text>

                                    <Text fontWeight={400} mt={'70px'} mb={'18px'}>
                                        21/12/2021
                                    </Text>


                                </Box>

                                <Box width={'100%'} height={'2px'} bg={'#523774'}/>
                            </Box>
                        </SwiperSlide>
                    </Swiper>
                </Box>

                <Grid display={{base: 'none', xl: 'grid'}} templateColumns={'repeat(3, 1fr)'} columnGap={'30px'} mt={'50px'}>
                    <GridItem>
                        <Box>
                            <Image src={'/news_1.png'}/>

                            <Text fontWeight={700} letterSpacing={'0.02em'} fontSize={25} color={'basic.500'} mt={'20px'}>
                                WE'RE RAISING SEED FUNDS
                            </Text>

                            <Text fontWeight={400} mt={'70px'} mb={'18px'}>
                                21/12/2021
                            </Text>

                            <svg width="359" height="2" viewBox="0 0 359 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H359" stroke="#523774" stroke-width="2"/>
                            </svg>

                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Image src={'/news_1.png'}/>

                            <Text fontWeight={700} letterSpacing={'0.02em'} fontSize={25} color={'basic.500'} mt={'20px'}>
                                WE'RE RAISING SEED FUNDS
                            </Text>

                            <Text fontWeight={400} mt={'70px'} mb={'18px'}>
                                21/12/2021
                            </Text>

                            <svg width="359" height="2" viewBox="0 0 359 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H359" stroke="#523774" stroke-width="2"/>
                            </svg>

                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Image src={'/news_1.png'}/>

                            <Text fontWeight={700} letterSpacing={'0.02em'} fontSize={25} color={'basic.500'} mt={'20px'}>
                                WE'RE RAISING SEED FUNDS
                            </Text>

                            <Text fontWeight={400} mt={'70px'} mb={'18px'}>
                                21/12/2021
                            </Text>

                            <svg width="359" height="2" viewBox="0 0 359 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 1H359" stroke="#523774" stroke-width="2"/>
                            </svg>

                        </Box>
                    </GridItem>


                    <GridItem colSpan={3} justifyContent={'center'} display={'flex'}>
                        <Button mt={'40px'}>
                            See More
                        </Button>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    )
}

function Partnership() {
    return (
        <Box mt={{base: '120px', xl: '200px'}}>
            <Box
                mt={'100px'}
                maxWidth={'1132px'}
                marginLeft={'auto'}
                marginRight={'auto'}
                height={'100%'}
                position={'relative'}
                px={{base: '16px', xl: 0}}
            >
                <Text align={'left'}
                      textTransform={'uppercase'} fontSize={{base: 42, xl: 80}} fontWeight={'700'} color={'basic.500'}
                      letterSpacing={'0.03em'} lineHeight={1.1}

                >
                    partnerships</Text>

                <Grid templateColumns={{ base: 'repeat(2, 1fr)', xl: 'repeat(6, 1fr)'}} mt={'30px'}>
                    <GridItem>
                        <Image src={'/insta_partner.svg'}
                               width={164}/>
                    </GridItem>
                    <GridItem>
                        <Image src={'/insta_partner.svg'}
                               width={164}/>
                    </GridItem>
                    <GridItem>
                        <Image src={'/insta_partner.svg'}
                               width={164}/>
                    </GridItem>
                    <GridItem>
                        <Image src={'/insta_partner.svg'}
                               width={164}/>
                    </GridItem>
                    <GridItem>
                        <Image src={'/insta_partner.svg'}
                               width={164}/>
                    </GridItem>
                    <GridItem>
                        <Image src={'/insta_partner.svg'}
                               width={164}/>
                    </GridItem>
                    <GridItem>
                        <Image src={'/insta_partner.svg'}
                               width={164}/>
                    </GridItem>
                    <GridItem>
                        <Image src={'/insta_partner.svg'}
                               width={164}/>
                    </GridItem>
                    <GridItem>
                        <Image src={'/insta_partner.svg'}
                               width={164}/>
                    </GridItem>
                </Grid>
            </Box>
        </Box>

    );
}

function BeMore() {
    return (
        <Box
            mt={'100px'}
            position={'relative'}
            height={'587px'}
            width={'100%'}
            bg={'conic-gradient(from -8.13deg at 7.03% 80.47%, #78B2FA -16.65deg, #B89DDA 79.78deg, #F07DAD 180.82deg, #78B2FA 343.35deg, #B89DDA 439.78deg)'}
        >
            <Box
                position={'absolute'}
                width={'100%'}
                height={'100%'}
                bg={'rgba(255, 255, 255, 0.2);'}
                backdropFilter={'blur(134px)'}

                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Stack  spacing={'30px'}>
                    <Text textAlign={'center'} textTransform={'uppercase'} fontSize={{base: 53, xl: 80}} fontWeight={'700'} color={'white'}
                          letterSpacing={'0.05em'} lineHeight={1.1}>Be more in the <br/>Metaverse</Text>

                    <Box justifyContent={'center'} display={'flex'}>
                        <Button>Discover now</Button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export const Landing = () => {
    return (
        <Box>
            <TopSlider/>
            <HowItWorks/>
            <Bonuses/>
            <Elysium/>
            <WeAreLuxury/>
            <WeAreDressing/>
            <WhatsHappening/>
            <Partnership/>
            <BeMore/>
        </Box>
    )
};