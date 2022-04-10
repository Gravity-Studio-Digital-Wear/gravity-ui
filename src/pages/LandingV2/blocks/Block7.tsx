import * as React from "react";

import {Block, Centered} from "../components/Common";
import {Box, Text, useMediaQuery, useToken} from "@chakra-ui/react";
import {PolygonBorder} from "../components/PolygonBorder";
import {sendAmplitudeData} from "../../../utils/amplitude";

export const Block7 = () => {
    const [md, xl] = useToken(
        'breakpoints',
        ['lg', 'xl']
    );

    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)


    const joinWhitelist = () => {
        sendAmplitudeData('E_MINT-BTN_FOLLOW')
        window.open('https://www.premint.xyz/gravity-the-studio/ ', '_blank')
    }
    return (
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
                        Be who you want <br/> wherever you go
                    </Text>

                    {/*<Text*/}
                    {/*    fontFamily={'All Round Gothic'}*/}
                    {/*    css={{*/}
                    {/*        color: 'transparent',*/}
                    {/*        WebkitTextStroke: isLargerThanXl ? '2px' : '1px',*/}
                    {/*        WebkitTextStrokeColor: 'white',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    Metaverse*/}
                    {/*</Text>*/}

                    <PolygonBorder mt={'40px'} w={'269px'} onClick={joinWhitelist}>JOIN THE
                        WHITELIST</PolygonBorder>
                </Box>
            </Centered>
    </Block>
    )
}