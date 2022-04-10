import * as React from 'react';
import {Stack, Box, Text, Flex, Grid, Image} from "@chakra-ui/react";
import {Centered} from "../../components/containers/elements/Centered";
import {ReactComponent as RectangleShape} from "../LandingV2/assets/rectangle.svg";
import {ReactComponent as RectangleMobileShape} from "../LandingV2/assets/rectangle--mobile.svg";
import {TransparentVideo} from "../../components/TransparentVideo";

import {ReactComponent as NFTDropCode} from '../../assets/code--nft-drop.svg';
import {ReactComponent as Symbols} from '../../assets/symbols--nft-drop.svg';
import {ReactComponent as SymbolsBox} from '../../assets/symbols-box--nft-drop.svg';
import {ReactComponent as Slashes} from '../../assets/slashes--nft-drop.svg';
import {ReactComponent as StepRectangle} from '../../assets/rectangle--nft-drop.svg';
import {ReactComponent as DiscordLogo} from '../../assets/discord-logo.svg';

import {PolygonBorder} from "../LandingV2/components/PolygonBorder";
import {sendAmplitudeData} from "../../utils/amplitude";
import {Polygon} from "../LandingV2/components/Polygon";


export const NFTDrop = () => {
    const joinWhitelist = () => {
        sendAmplitudeData('E_MINT-BTN_FOLLOW')
        window.open('https://www.premint.xyz/gravity-the-studio/ ', '_blank')
    }

    const joinDiscord = () => {
        sendAmplitudeData('E_DISCORD-BTN_FOLLOW')
        window.open('https://www.premint.xyz/gravity-the-studio/ ', '_blank')
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
                       The game apparel collection from the artists at Gravity the Studio, universally wearable on avatars across our ever-growing ecosystem, with exclusive holder benefits now and forever. Join the whitelist now for first mint access and dedicated discounted pricing.
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
                       10 designs each in 5 colour variants , forged by our visionary designers and expert digital craftspeople.

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
                       How it works
                   </Text>

                   <Grid templateColumns={{base: '1fr', xl: 'repeat(3, 1fr)'}} mt={'64px'} gridRowGap={'100px'}>
                       <Box fontFamily={'All Round Gothic'}>
                           <Stack direction={{base:'row', xl: 'column' }} spacing={'32px'}>
                               <Box w={'51px'} h={'51px'} position={'relative'}>
                                   <Box w={'51px'} h={'51px'} position={'absolute'} top={0} left={0}>
                                       <StepRectangle/>
                                   </Box>
                                   <Box
                                       w={'51px'}
                                       h={'51px'}
                                       position={'absolute'}
                                       top={0}
                                       left={0}
                                       display={'flex'}
                                       justifyContent={'center'}
                                       alignItems={'center'}
                                   >
                                       <Text fontSize={'28px'} fontFamily={'All Round Gothic'}>1</Text>
                                   </Box>

                               </Box>

                               <Text fontSize={'24px'} h={'70px'}>
                                   Mint your mystery box
                               </Text>
                           </Stack>


                           <Box mt={{base: '22px', xl: '64px'}} width={{xl: '147px'}} h={'50px'} position={'relative'} opacity={'.4'}>
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

                               <Box position={'absolute'} width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                   <Text fontFamily={'Montserrat'} fontSize={18} textTransform={'uppercase'}>
                                       Mint
                                   </Text>
                               </Box>
                           </Box>

                           <Text mt={'16px'} letterSpacing={'.01em'} fontFamily={'Montserrat'}>Coming soon</Text>
                       </Box>
                       <Box fontFamily={'All Round Gothic'}>
                           <Stack direction={{base:'row', xl: 'column' }} spacing={'32px'}>
                               <Box w={'51px'} h={'51px'} position={'relative'}>
                                   <Box w={'51px'} h={'51px'} position={'absolute'} top={0} left={0}>
                                       <StepRectangle/>
                                   </Box>
                                   <Box
                                       w={'51px'}
                                       h={'51px'}
                                       position={'absolute'}
                                       top={0}
                                       left={0}
                                       display={'flex'}
                                       justifyContent={'center'}
                                       alignItems={'center'}
                                   >
                                       <Text fontSize={'28px'} fontFamily={'All Round Gothic'}>2</Text>
                                   </Box>

                               </Box>

                               <Text fontSize={'24px'} h={'70px'}>
                                   Unbox to reveal its contents
                               </Text>
                           </Stack>


                           <Box mt={{base: '22px', xl: '64px'}} width={{xl: '147px'}} h={'50px'} position={'relative'} opacity={'.4'}>
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


                               <Box  position={'absolute'} width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                   <Text fontFamily={'Montserrat'} fontSize={18} textTransform={'uppercase'}>
                                       unbox
                                   </Text>
                               </Box>
                           </Box>
                           <Text mt={'16px'} letterSpacing={'.01em'} fontFamily={'Montserrat'}>Coming soon</Text>
                       </Box>
                       <Box fontFamily={'All Round Gothic'}>
                           <Stack direction={{base:'row', xl: 'column'}} spacing={'32px'}>
                               <Box  minW={'51px'} w={'51px'} h={'51px'} position={'relative'}>
                                   <Box w={'51px'} h={'51px'} position={'absolute'} top={0} left={0}>
                                       <StepRectangle/>
                                   </Box>
                                   <Box
                                       w={'51px'}
                                       h={'51px'}
                                       position={'absolute'}
                                       top={0}
                                       left={0}
                                       display={'flex'}
                                       justifyContent={'center'}
                                       alignItems={'center'}
                                   >
                                       <Text fontSize={'28px'} fontFamily={'All Round Gothic'}>3</Text>
                                   </Box>

                               </Box>

                               <Text fontSize={'24px'} h={{xl: '70px'}}>
                                   Show off your new digital look across photos and metaverses
                               </Text>
                           </Stack>


                           <Box mt={{base: '22px', xl: '64px'}} width={{xl: '147px'}} h={'50px'} position={'relative'} opacity={'.4'}>
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


                               <Box  position={'absolute'} width={'100%'} height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                   <Text fontFamily={'Montserrat'} fontSize={18} textTransform={'uppercase'}>
                                       wear
                                   </Text>
                               </Box>
                           </Box>
                           <Text mt={'16px'} letterSpacing={'.01em'} fontFamily={'Montserrat'}>Coming soon</Text>
                       </Box>
                   </Grid>
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