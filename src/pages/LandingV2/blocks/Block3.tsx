import {Centered} from "../components/Common";
import {Box, Text, useMediaQuery, useToken} from "@chakra-ui/react";
import {ReactComponent as RectangleShape} from "../assets/rectangle.svg";
import {ReactComponent as RectangleMobileShape} from "../assets/rectangle--mobile.svg";
import {ReactComponent as CodeShape} from "../assets/code.svg";
import {ReactComponent as SlashesShape} from "../assets/slashes.svg";
import {TransparentVideo} from "../../../components/TransparentVideo";
import {Block} from "../components/Block";
import * as React from "react";

export const Block3 = () => {
    const [md, xl] = useToken(
        'breakpoints',
        ['lg', 'xl']
    );

    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)

    return (
        <Block position={'relative'}>
            <Centered>
                <Box
                    fontFamily={'All Round Gothic'}
                    fontSize={{base: 34, xl: 54}}
                    color={'white'}
                    lineHeight={{base: '44px', xl: '68px'}}
                    position={'relative'}
                    mt={{base: '160px'}}
                    zIndex={2}
                >
                    We are <br/> Gravity <br/> Layer

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
                </Box>

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
    )
}