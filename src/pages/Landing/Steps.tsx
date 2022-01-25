import * as React from 'react';
import {Box, Flex, Grid, GridItem, Stack, Text, useMediaQuery, useToken} from "@chakra-ui/react";

import {ReactComponent as Hex1} from './hex.svg'
import {ReactComponent as Hex1MobileSvg} from './hex__mobile.svg'

import {ReactComponent as CardsMobile} from './cards--mobile.svg'
import {ReactComponent as LogosMobile} from './logos--mobile.svg'

import {ReactComponent as Hex2} from './hex-2.svg'
import {ReactComponent as Hex2MobileSvg} from './hex-2--mobile.svg'


import {ReactComponent as Hex3} from './hex-3.svg'
import {ReactComponent as Hex3MobileSvg} from './hex-2--mobile.svg'

import {ReactComponent as CardsSvg} from './cards.svg'
import {ReactComponent as AvatarsSvg} from './avatars--mobile.svg'


export function Steps() {
    const [xl] = useToken(
        'breakpoints',
        ['xl']
    );
    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)


    return (
        <Box mt={'72px'}>
            <Text lineHeight={'1'}
                  ml={'64px'}
                  textTransform={'uppercase'}
                  fontSize={30} fontWeight={700}
                  letterSpacing={'0.22em'}
                  color={'primary.500'}
                  display={{base: 'none', xl: 'block'}}

            >
                Step 1
            </Text>

            <Box mt={'30px'}
                 height={{base: '669px',md: 'auto', xl:'769px'}}
                 position={'relative'}>
                <Box position={'absolute'} top={0} left={0} display={{base: 'none', xl: 'block'}}>
                    <Border/>
                </Box>

                <Box position={'absolute'} top={0} right={0} display={{base: 'none', xl: 'block'}}>
                    <Step1Border/>
                </Box>

                <Box position={'relative'} top={{base: '35px', xl:'75px'}} px={{base: '16px', xl: 0}}
                     display={{base: 'flex', xl: 'block'}} justifyContent={'center'}
                     flexDirection={{base: 'column', md: 'row', xl: 'column'}}
                     alignItems={'center'}
                >
                    <Box position={'relative'}>
                        {isLargerThanXl
                            ? <>
                                <Hex1/>

                                <Box top='210px' left={'60px'} position={'absolute'}>
                                    <Text fontSize={24} color={'white'}>Choose your look and pay <br/> by card or crypto.</Text>
                                </Box>
                            </>
                            : <>
                                <Hex1MobileSvg/>
                            </>
                        }
                    </Box>

                    <Box width={'342px'} mt={'42px'} display={{base: 'block', xl: 'none'}}>
                        <CardsMobile/>
                    </Box>


                    <Box width={'447px'}
                         height={'350px'}
                         bg={'url("/cards.svg")'}
                         position={'absolute'}
                         right={'102px'}
                         top={'88px'}
                         display={{base: 'none', xl: 'block'}}
                    />

                    <Box width={'447px'}
                         height={'350px'}
                         bg={'url("/cards.svg")'}
                         position={'absolute'}
                         right={'102px'}
                         top={'88px'}
                         display={{base: 'none', xl: 'block'}}
                    />



                </Box>


            </Box>

            <Box
                mt={{md: '60px', xl: 0}}
                height={{base: '669px',md: 'auto', xl:'769px'}}
                position={'relative'}>
                <Box position={'absolute'} top={'-60px'} left={0} display={{base: 'none', xl: 'block'}}>

                    <Text lineHeight={'1'} ml={'64px'} textTransform={'uppercase'} fontSize={30} fontWeight={700}
                          letterSpacing={'0.22em'} color={'primary.500'}>
                        Step 2
                    </Text>
                </Box>
                <Box position={'absolute'} top={0} left={0} display={{base: 'none', xl: 'block'}}>
                    <Step2Border/>
                </Box>

                {!isLargerThanXl && (
                    <Stack alignItems={'center'} spacing={'42px'} flexDirection={{base: 'column', md: 'row', xl: 'column'}} justifyContent={'center'}>
                        <Hex2MobileSvg/>

                        <LogosMobile/>
                    </Stack>
                )}

                {isLargerThanXl && (
                    <Box>
                        <Grid templateColumns={'1fr 1fr'} width={'100%'} pt={'120px'}>
                            <GridItem display={'flex'} justifyContent={'center'} alignItems={'center'}>

                                <Box pl={'90px'}>
                                    <CardsSvg/>
                                </Box>

                            </GridItem>


                            <GridItem display={'flex'} justifyContent={'center'} alignItems={'center'}>

                                <Box position={'relative'}>
                                    <Hex2/>
                                    <Box top='230px' left={'68px'} position={'absolute'}>
                                        <Text fontSize={24} color={'white'}>Select your Metaverses <br/>and apply for avatar
                                            fitting</Text>
                                    </Box>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                )}
            </Box>

            <Box height={{base: '669px', md: 'auto', xl:'769px'}} position={'relative'}>
                <Box position={'absolute'} top={'-60px'} left={0} display={{base: 'none', xl: 'block'}}>

                    <Text lineHeight={'1'} ml={'64px'} textTransform={'uppercase'} fontSize={30} fontWeight={700}
                          letterSpacing={'0.22em'} color={'primary.500'}>
                        Step 3
                    </Text>
                </Box>
                <Box position={'absolute'} top={0} left={0} display={{base: 'none', xl: 'block'}}>
                    <Step3Border/>
                </Box>
                <Box position={'relative'} top={'74px'} display={{base: 'none', xl: 'block'}}>
                    <Box position={'relative'}>
                        <Hex3/>
                        <Box top='200px' left={'68px'} position={'absolute'}>
                            <Text fontSize={24} color={'white'}>
                                Your new Metaverse looks <br/> are ready for wherever you’ll <br/> take them
                            </Text>
                        </Box>
                    </Box>

                    <Box width={'447px'}
                         height={'381px'}
                         bg={'url("/avatars.svg")'}
                         position={'absolute'}
                         right={'102px'}
                         top={'88px'}
                    />
                </Box>

                {/* Mobile */}
                <Stack display={{base: 'flex', xl: 'none'}} flexDirection={{base: 'column', md: 'row', xl: 'column'}} justifyContent={'center'} alignItems={'center'} spacing={'42px'}>
                    <Hex3MobileSvg/>

                    <AvatarsSvg/>
                </Stack>
            </Box>
        </Box>
    )
}


const Border = () => {
    return (
        <svg width="259" height="6" viewBox="0 0 259 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M259 3H0" stroke="#523774" stroke-width="6"/>
        </svg>
    )
}

const Step1Border = () => {
    return (
        <svg width="358" height="775" viewBox="0 0 358 775" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M87.8938 3H304.615L354.224 52.5V772H0.223846" stroke="#523774" stroke-width="6"/>
            <mask id="path-2-inside-1_923_7114" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M226.752 703.087L263.046 670.033L246.37 654.845L237.497 662.926L237.497 610.03L213.913 610.03L213.913 661.154L206.986 654.845L190.31 670.033L226.604 703.087L226.678 703.02L226.752 703.087Z"/>
            </mask>
            <path
                d="M263.046 670.033L264.393 671.512L266.016 670.033L264.393 668.554L263.046 670.033ZM226.752 703.087L225.405 704.566L226.752 705.793L228.099 704.566L226.752 703.087ZM246.37 654.845L247.716 653.366L246.37 652.14L245.023 653.366L246.37 654.845ZM237.497 662.926L235.497 662.926L235.497 667.452L238.844 664.404L237.497 662.926ZM237.497 610.03L239.497 610.03L239.497 608.03L237.497 608.03L237.497 610.03ZM213.913 610.03L213.913 608.03L211.913 608.03L211.913 610.03L213.913 610.03ZM213.913 661.154L212.567 662.632L215.913 665.68L215.913 661.154L213.913 661.154ZM206.986 654.845L208.333 653.366L206.986 652.14L205.64 653.366L206.986 654.845ZM190.31 670.033L188.963 668.554L187.34 670.033L188.963 671.512L190.31 670.033ZM226.604 703.087L225.257 704.566L226.604 705.793L227.951 704.566L226.604 703.087ZM226.678 703.02L228.025 701.541L226.678 700.315L225.331 701.541L226.678 703.02ZM261.699 668.554L225.405 701.609L228.099 704.566L264.393 671.512L261.699 668.554ZM245.023 656.324L261.699 671.512L264.393 668.554L247.716 653.366L245.023 656.324ZM238.844 664.404L247.716 656.324L245.023 653.366L236.151 661.447L238.844 664.404ZM235.497 610.03L235.497 662.926L239.497 662.926L239.497 610.03L235.497 610.03ZM213.913 612.03L237.497 612.03L237.497 608.03L213.913 608.03L213.913 612.03ZM215.913 661.154L215.913 610.03L211.913 610.03L211.913 661.154L215.913 661.154ZM205.64 656.324L212.567 662.632L215.26 659.675L208.333 653.366L205.64 656.324ZM191.657 671.512L208.333 656.324L205.64 653.366L188.963 668.554L191.657 671.512ZM227.951 701.609L191.657 668.554L188.963 671.512L225.257 704.566L227.951 701.609ZM225.331 701.541L225.257 701.609L227.951 704.566L228.025 704.499L225.331 701.541ZM228.099 701.609L228.025 701.541L225.331 704.499L225.405 704.566L228.099 701.609Z"
                fill="#523774" mask="url(#path-2-inside-1_923_7114)"/>
            <g opacity="0.2" clip-path="url(#clip0_923_7114)">
                <mask id="mask0_923_7114" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="136" y="27"
                      width="176" height="56">
                    <rect width="56" height="176" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 312 83)"
                          fill="#B89DDA"/>
                </mask>
                <g mask="url(#mask0_923_7114)">
                    <rect width="137.23" height="12.0549"
                          transform="matrix(0.493259 -0.869883 -0.86208 -0.506772 252.608 105.749)" fill="#B89DDA"/>
                    <rect width="154.694" height="12.0549"
                          transform="matrix(0.493259 -0.869883 -0.86208 -0.506772 209.615 129.506)" fill="#B89DDA"/>
                    <rect width="192.43" height="12.0549"
                          transform="matrix(0.493259 -0.869883 -0.86208 -0.506772 174.838 138.771)" fill="#B89DDA"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_923_7114">
                    <rect width="56" height="105" fill="white"
                          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 298 83)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

const Step2Border = () => {

    return (
        <svg width="357" height="775" viewBox="0 0 357 775" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M258.745 3H52.5L3 52.5V772H356.209" stroke="#523774" stroke-width="6"/>
            <g opacity="0.2" clip-path="url(#clip0_923_7114)">
                <mask id="mask0_923_7114" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="2" y="27"
                      width="177" height="55">
                    <rect width="55" height="175.548" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 178.548 82)"
                          fill="#B89DDA"/>
                </mask>
                <g mask="url(#mask0_923_7114)">
                    <rect width="135.38" height="12" transform="matrix(0.5 -0.866025 -0.866025 -0.5 119.156 104.343)"
                          fill="#B89DDA"/>
                    <rect width="152.608" height="12" transform="matrix(0.5 -0.866025 -0.866025 -0.5 76.1626 127.675)"
                          fill="#B89DDA"/>
                    <rect width="189.835" height="12" transform="matrix(0.5 -0.866025 -0.866025 -0.5 41.3862 136.775)"
                          fill="#B89DDA"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_923_7114">
                    <rect width="56" height="105" fill="white"
                          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 164 82)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

const Step3Border = () => {
    return (
        <svg width="1136" height="775" viewBox="0 0 1136 775" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M870.479 3H1082.72L1132.22 52.5V772H773.015" stroke="#523774" stroke-width="6"/>
            <path d="M356.209 772H3V626" stroke="#523774" stroke-width="6"/>
            <g opacity="0.2" clip-path="url(#clip0_923_7114)">
                <mask id="mask0_923_7114" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="916" y="27"
                      width="177" height="55">
                    <rect width="55" height="176" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1092.02 82)"
                          fill="#B89DDA"/>
                </mask>
                <g mask="url(#mask0_923_7114)">
                    <rect width="135.467" height="12.0232"
                          transform="matrix(0.500965 -0.865468 -0.866581 -0.499036 1032.48 104.343)" fill="#B89DDA"/>
                    <rect width="152.706" height="12.0232"
                          transform="matrix(0.500965 -0.865468 -0.866581 -0.499036 989.372 127.675)" fill="#B89DDA"/>
                    <rect width="189.958" height="12.0232"
                          transform="matrix(0.500965 -0.865468 -0.866581 -0.499036 954.506 136.775)" fill="#B89DDA"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_923_7114">
                    <rect width="55" height="105" fill="white"
                          transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 1076 82)"/>
                </clipPath>
            </defs>
        </svg>
    )
}


