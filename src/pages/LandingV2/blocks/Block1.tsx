import {Box, Image, Text, useMediaQuery, useToken} from "@chakra-ui/react";
import {TransparentVideo} from "../../../components/TransparentVideo";
import {ReactComponent as CodeShape} from "../assets/code.svg";
import {ReactComponent as XShapes} from "../assets/xshapes.svg";
import {ReactComponent as RectangleShape} from "../assets/rectangle.svg";
import {ReactComponent as RectangleMobileShape} from "../assets/rectangle--mobile.svg";
import {PolygonBorder} from "../components/PolygonBorder";
import * as React from "react";
import {Block} from "../components/Block";
import {sendAmplitudeData} from "../../../utils/amplitude";
import {Centered} from "../components/Common";
import {observer} from "mobx-react";
import {usePageLoader} from "../../../hooks/usePageLoader";

export const Block1 = observer(() => {
    const pageLoadingStore = usePageLoader({
        breakpoints: {
            avatar: 20,
            canvas: 80
        }
    })

    const [md, xl] = useToken(
        'breakpoints',
        ['lg', 'xl']
    );

    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)

    const joinWhitelist = () => {
        sendAmplitudeData('E_MINT-BTN_FOLLOW')
        window.open('https://www.premint.xyz/gravity-the-studio/ ', '_blank')
    }


    const avatar = (
        <TransparentVideo
            videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/c_scale,q_auto:eco,w_1237/v1648202298/output_hjoavx.webm'}
            imageUrl={'/landing/avatar-with-alpha.gif'}
            infinite={true}
            onLoaded={() => {
                pageLoadingStore.done('avatar');
            }}
        />
    );


    const canvas = (
        <TransparentVideo
            videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/q_70/v1648203083/output_y0svwb.webm'}
            imageUrl={''}
            infinite={true}
            fallback={
                <Image src={'/landing/screen-1-bg.png'}/>
            }

            onLoaded={() => {
                pageLoadingStore.done('canvas');
            }}
        />
    );

    return (
        <Block position={'relative'}>
            {isLargerThanXl && (
                <Box position={'absolute'} top={'10%'} right={'-20%'} w={'90%'} zIndex={0}>

                    {canvas}
                </Box>
            )}

            {isLargerThanXl && (
                <Box position={'absolute'} top={'15%'} right={'0%'} w={'60%'} zIndex={0}>
                    {avatar}
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

                        <Box as={'span'} position={'absolute'} top={'-24px'} left={'-24px'}
                             display={{base: 'none', xl: 'block'}}>
                            <RectangleShape/>
                        </Box>


                        <Box as={'span'} position={'absolute'} top={'-48px'} left={0}
                             display={{base: 'block', xl: 'none'}}>
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
                                imageUrl={'/landing/avatar-with-alpha.gif'}
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
    )
})