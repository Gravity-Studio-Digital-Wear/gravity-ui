import * as React from 'react';
import {Box, Flex, Grid, Image, Stack, Text} from "@chakra-ui/react";
import {Centered} from "../../components/containers/elements/Centered";
import {ReactComponent as RectangleShape} from "../LandingV2/assets/rectangle.svg";
import {ReactComponent as RectangleMobileShape} from "../LandingV2/assets/rectangle--mobile.svg";
import {TransparentVideo} from "../../components/TransparentVideo";

import {ReactComponent as NFTDropCode} from '../../assets/code--nft-drop.svg';
import {ReactComponent as Symbols} from '../../assets/symbols--nft-drop.svg';
import {ReactComponent as SymbolsBox} from '../../assets/symbols-box--nft-drop.svg';
import {ReactComponent as Slashes} from '../../assets/slashes--nft-drop.svg';
import {ReactComponent as DiscordLogo} from '../../assets/discord-logo.svg';

import GoldImage from './assets/gold.png'

import {PolygonBorder} from "../LandingV2/components/PolygonBorder";
import {sendAmplitudeData} from "../../utils/amplitude";


export const NFTDrop = () => {
    const joinWhitelist = () => {
        sendAmplitudeData('E_MINT-BTN_FOLLOW')
        window.open('https://www.premint.xyz/gravitylayer/ ', '_blank')
    }

    const joinDiscord = () => {
        sendAmplitudeData('E_DISCORD-BTN_FOLLOW')
        window.open('https://discord.com/invite/Ejh4jEPRDC ', '_blank')
    }

    return (
        <Stack spacing={0} fontFamily={'Montserrat'} overflow={'hidden'}>
            <Box zIndex={2}>
                <Centered zIndex={2} pb={'60px'}>
                    <Flex justifyContent={'center'} my={{base: '32px', xl: '64px'}}>
                        <Box maxW={'700px'} position={'relative'}>
                            <TransparentVideo
                                imageUrl={'/nftDrop-main.png'}
                                videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/v1649589438/test_y9n9zm.webm'}
                            />
                            <Box position={'absolute'} left={'0'} top={0} w={{base: '116px', xl: '154px'}}>
                                <NFTDropCode/>
                            </Box>
                            <Box position={'absolute'} right={'0'} bottom={0}>
                                <Symbols/>
                            </Box>
                        </Box>
                    </Flex>

                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={{base: 34, xl: 54}}
                        color={'white'}
                        lineHeight={{base: '44px', xl: '68px'}}
                        position={'relative'}
                    >
                        1999 boxes. Your key to the movement changing downloadable content forever.

                        <Box as={'span'} position={'absolute'} top={'-24px'} left={'-24px'}
                             display={{base: 'none', xl: 'block'}}>
                            <RectangleShape/>
                        </Box>
                        <Box as={'span'} position={'absolute'} top={'-48px'} left={0}
                             display={{base: 'block', xl: 'none'}}>
                            <RectangleMobileShape/>
                        </Box>
                    </Text>

                    <Text maxW={'650px'} color={'white'} fontSize={{base: 17, xl: 21}} mt={'16px'}
                          letterSpacing={'0.01em'}>
                        The game apparel collection from the artists at Gravity Layer, universally wearable on avatars
                        across our ever-growing ecosystem, with exclusive holder benefits now and forever. Join the
                        whitelist now for first mint access and dedicated discounted pricing.
                    </Text>

                    <PolygonBorder mt={'36px'} onClick={joinWhitelist} w={'269px'}>
                        JOIN THE WHITELIST
                    </PolygonBorder>
                </Centered>

                <Centered zIndex={2} mt={{base: '100px', xl: '200px'}}>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={{base: 34, xl: 54}}
                        color={'white'}
                        lineHeight={{base: '44px', xl: '68px'}}
                        position={'relative'}
                    >
                        10 designs each in 5 colour variants , forged by our visionary designers and expert digital
                        craftspeople.

                        <Box as={'span'} position={'absolute'} top={'-24px'} left={'-24px'}
                             display={{base: 'none', xl: 'block'}}>
                            <RectangleShape/>
                        </Box>


                        <Box as={'span'} position={'absolute'} top={'-48px'} left={0}
                             display={{base: 'block', xl: 'none'}}>
                            <RectangleMobileShape/>
                        </Box>
                    </Text>
                </Centered>


                <Centered zIndex={2} mt={{base: '100px', xl: '200px'}}>

                    <Box display={{base: 'block', xl: 'flex'}}>
                        <Box>
                            <RectangleShapeDrop/>
                        </Box>


                        <Box ml={'auto'} mt={{base: '32px', xl: '0'}}>
                            <Text fontSize={40} fontWeight={400}>
                                <Box as={'span'} display={'inline-block'} position={'relative'} left={'-10px'}>
                                    <PreTitleShape/>
                                </Box>

                                <Text as={'span'} color={'#D4F23F'}>Wear</Text> in any <Text as={'span'}
                                                                                             color={'#D4F23F'}>metaverse</Text> we’re <br/>
                                integrated with, now and forever
                            </Text>


                            <Flex mt={'80px'}>
                                <Text flexBasis={'60%'} fontSize={24} fontWeight={400}>
                                    <Box as={'span'} display={'inline-block'} position={'relative'} left={'-10px'} top={'3px'}>
                                        <PreTitleShape/>
                                    </Box>

                                    <Text as={'span'} color={'#D4F23F'}> Show off</Text> with the rest <br/> of your NFT collection
                                </Text>

                                <Box flexBasis={'60%'} fontSize={24} fontWeight={400} ml={'32px'}>
                                    <Box as={'span'} display={'inline-block'} position={'relative'} left={'-10px'} top={'3px'}>
                                        <PreTitleShape/>
                                    </Box>
                                    <Text as={'span'} color={'#D4F23F'}>Trade</Text> for crypto
                                </Box>
                            </Flex>
                        </Box>

                    </Box>
                </Centered>

                <Centered zIndex={2} mt={{base: '100px', xl: '200px'}}>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={{base: 34, xl: 54}}
                        color={'white'}
                        lineHeight={{base: '44px', xl: '68px'}}
                        position={'relative'}
                    >
                        3 rarities. Worlds of possibility
                    </Text>

                    <Text maxW={'650px'} color={'white'} fontSize={{base: 17, xl: 21}} mt={'16px'}
                          letterSpacing={'0.01em'}>
                        The rarer the box, the greater your chance of rare designs and benefits.
                    </Text>

                    <Grid templateColumns={'repeat(3, 1fr)'} mt={'64px'}>
                        <Box position={'relative'} pb={'64px'}>
                            <Image src={'/Purple.png'}/>

                            <Box position={'absolute'} bottom={0} left={'20px'} display={{base: 'none', xl: 'block'}}>
                                <Slashes/>
                            </Box>

                            <Box position={'absolute'} right={0} top={'30px'} display={{base: 'none', xl: 'block'}}>
                                <SymbolsBox/>
                            </Box>
                        </Box>


                        <Box position={'relative'} pb={'64px'}>
                            <Image src={'/Silver.png'}/>

                            <Box position={'absolute'} bottom={0} left={'20px'} display={{base: 'none', xl: 'block'}}>
                                <Slashes/>
                            </Box>

                            <Box position={'absolute'} right={0} top={'30px'} display={{base: 'none', xl: 'block'}}>
                                <SymbolsBox/>
                            </Box>
                        </Box>

                        <Box position={'relative'} pb={'64px'}>
                            <Image src={'/Gold.png'}/>

                            <Box position={'absolute'} bottom={0} left={'20px'} display={{base: 'none', xl: 'block'}}>
                                <Slashes/>
                            </Box>

                            <Box position={'absolute'} right={0} top={'30px'} display={{base: 'none', xl: 'block'}}>
                                <SymbolsBox/>
                            </Box>
                        </Box>
                    </Grid>

                    <Box display={{base: 'block', xl: 'none'}}>
                        <Slashes/>
                    </Box>
                </Centered>

                <Centered zIndex={2} mt={{base: '100px', xl: '200px'}}>
                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={{base: 34, xl: 54}}
                        color={'white'}
                        lineHeight={{base: '44px', xl: '68px'}}
                        position={'relative'}
                    >
                        Timeline
                    </Text>

                    <Box mt={'40px'}>
                        <Flex alignItems={'center'} h={'145px'} border={'1px solid'}
                              borderColor={'rgba(255,255,255, .3)'} px={'56px'}>
                            <Stack>
                                <Text fontSize={16} letterSpacing={'.01em'} opacity={.4}>
                                    Done
                                </Text>
                                <Text fontSize={24} letterSpacing={'.02em'} fontWeight={500} opacity={.6}>
                                    Whitelist open
                                </Text>
                            </Stack>
                        </Flex>


                        <Flex
                            alignItems={'center'}
                            border={'1px solid'}
                            borderColor={'rgba(255,255,255, .3)'}
                            px={'56px'}
                            py={'36px'}
                            bg={'rgba(255, 255, 255, 0.1)'}
                            position={'relative'}
                        >

                            <Box>
                                <Box position={'relative'}>
                                    <Box position={'absolute'} top={'-10px'} left={'-10px'}>
                                        <NowShape/>
                                    </Box>
                                    <Text color={'#D4F23F'} mt={'4px'}>
                                        Now
                                    </Text>
                                </Box>


                                <Text fontSize={24} letterSpacing={'.02em'} fontWeight={500}>
                                    Whitelist mint
                                </Text>

                                <Text fontSize={21} letterSpacing={'.01em'} fontWeight={500} mt={'40px'}>
                                    Early access for those who signed up for the Whitelist.
                                </Text>

                                <PolygonBorder mt={'36px'} onClick={joinWhitelist} w={'180px'}>
                                    Mint
                                </PolygonBorder>
                            </Box>

                            <Box ml={'auto'} display={{base: 'none', xl: 'block'}}>
                                <Box right={'0'} top={0}>

                                    <Image src={GoldImage} maxW={'250px'}/>
                                </Box>
                            </Box>


                        </Flex>


                        <Flex alignItems={'center'} h={'145px'} border={'1px solid'}
                              borderColor={'rgba(255,255,255, .3)'} px={'56px'}>
                            <Stack>
                                <Text fontSize={16} letterSpacing={'.01em'} opacity={.4}>
                                    Coming soon
                                </Text>
                                <Text fontSize={24} letterSpacing={'.02em'} fontWeight={500} opacity={.6}>
                                    Minting access opens to the public
                                </Text>
                            </Stack>
                        </Flex>

                        <Flex alignItems={'center'} h={'145px'} border={'1px solid'}
                              borderColor={'rgba(255,255,255, .3)'} px={'56px'}>
                            <Stack>
                                <Text fontSize={16} letterSpacing={'.01em'} opacity={.4}>
                                    Coming soon
                                </Text>
                                <Text fontSize={24} letterSpacing={'.02em'} fontWeight={500} opacity={.6}>
                                    Unboxing
                                </Text>
                            </Stack>
                        </Flex>

                    </Box>
                </Centered>

                <Centered zIndex={2} mt={{base: '100px', xl: '200px'}}>
                    <DiscordLogo/>

                    <Text
                        fontFamily={'All Round Gothic'}
                        fontSize={{base: 34, xl: 54}}
                        color={'white'}
                        lineHeight={{base: '44px', xl: '68px'}}
                        position={'relative'}
                        mt={'32px'}
                    >
                        Join our Discord community to ask questions and stay up-to-date with drop info
                    </Text>

                    <PolygonBorder mt={'36px'} onClick={joinDiscord} w={'219px'}>
                        Join Discord
                    </PolygonBorder>
                </Centered>

                <Centered>
                    <Box
                        color={'white'}
                        display={'flex'}
                        alignItems={{base: 'flex-start', xl: 'center'}}
                        flexDirection={'column'}
                        fontWeight={'normal'}
                        letterSpacing={'0.11em'}
                        fontSize={{base: 39, xl: 75}}
                        textTransform={'uppercase'}
                        mt={{base: '120px', xl: '300px'}}
                    >
                        <Text fontFamily={'All Round Gothic'}>
                            Be who you want <br/> wherever you go
                        </Text>

                        <PolygonBorder mt={'40px'} w={'269px'} onClick={joinWhitelist}>
                            JOIN THE WHITELIST
                        </PolygonBorder>
                    </Box>
                </Centered>
            </Box>
        </Stack>
    )
}


function PreTitleShape() {
    return (
        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2371_22739)">
                <path opacity="0.15"
                      d="M22.061 -5.99995L-24.9997 76.9937L-17.7746 81.241L29.2861 -1.75267L22.061 -5.99995Z"
                      fill="white"/>
            </g>
            <defs>
                <clipPath id="clip0_2371_22739">
                    <rect width="29" height="29" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}


function NowShape() {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8V1H8M1 22V29H8M29 8V1H22" stroke="#D4F23F" strokeLinejoin="round"/>
        </svg>
    )
}

function RectangleShapeDrop() {
    return (
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M48.79 30.8161L16.2627 30.8161L16.2627 32.8161L48.79 32.8161L48.79 30.8161ZM33.5264 48.0798L33.5264 15.5525L31.5264 15.5525L31.5264 48.0798L33.5264 48.0798Z"
                fill="white"/>
            <path opacity="0.3"
                  d="M2.58301 17.5V2H18.083M2.58301 48.5V64H18.083M64.583 17.5V2H49.083M64.583 48.5V64H49.083"
                  stroke="white" strokeWidth="2.46575" strokeLinejoin="round"/>
        </svg>
    )
}