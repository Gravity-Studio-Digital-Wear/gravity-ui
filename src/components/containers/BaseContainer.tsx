import * as React from 'react';
import {Box, Stack} from "@chakra-ui/react";
import {Footer} from "./elements/Footer";
import {Background} from "./elements/Background";
import {Centered} from "./elements/Centered";
import {Header} from "./elements/Header";

export const BaseContainer = (props: React.PropsWithChildren<{}>) => {
    return (
        <Stack spacing={0} fontFamily={'Montserrat'} overflow={'hidden'} color={'white'}>
            <Background
                overflow={'hidden'}
                position={'fixed'}
                zIndex={0}
                top={0}
                left={0}
            />

            <Centered zIndex={2}>
                <Header/>
            </Centered>

            <Box
                mt={0}
                width={'100%'}
                bg={'transparent'}
                minHeight={'100vh'}
                pb={{base: '32px', md: '80px'}}
                zIndex={2}
            >
                <Box
                    zIndex={2}
                    pt={33}
                    marginLeft={'auto'}
                    marginRight={'auto'}
                    maxW={{lg: '1160px', "2xl": '1160px'}}
                >
                    {props.children}
                </Box>
            </Box>

            <Centered zIndex={2} pb={'60px'}>
                <Footer/>
            </Centered>
        </Stack>
    )
}