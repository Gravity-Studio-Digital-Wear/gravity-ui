import {Centered} from "../components/Common";
import {Flex, Text} from "@chakra-ui/react";
import {WhatsHappening} from "../components/WhatsHappening";
import {PolygonBorder} from "../components/PolygonBorder";
import {Routes} from "../../../app/routes";
import {Block} from "../components/Block";
import * as React from "react";
import {useHistory} from "react-router-dom";

export const Block5 = () => {
    const history = useHistory();

    return (
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
    )
}