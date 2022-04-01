import {Centered} from "../components/Common";
import {Flex, Text} from "@chakra-ui/react";
import {InstagramSlider} from "../components/InstagramSlider";
import {PolygonBorder} from "../components/PolygonBorder";
import {Block} from "../components/Block";
import * as React from "react";
import {sendAmplitudeData} from "../../../utils/amplitude";

export const Block4 = () => {
    const findUsInstagram = () => {
        sendAmplitudeData('E_INST-BTN_FOLLOW')

        window.open('https://www.instagram.com/gravitythestudio/ ', '_blank')
    }

    return (
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
    )
}