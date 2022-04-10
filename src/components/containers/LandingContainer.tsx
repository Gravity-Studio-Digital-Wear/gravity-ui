import * as React from 'react';
import {Box, Stack} from "@chakra-ui/react";
import {Footer} from "./elements/Footer";
import {Centered} from "./elements/Centered";
import {Header, OverlayMenu} from "./elements/Header";

export const LandingContainer = (props: React.PropsWithChildren<{}>) => {

    const {isOpen} = React.useContext(OverlayMenu)

    return (
        <Stack spacing={0} fontFamily={'Montserrat'} overflow={'hidden'} color={'white'}>
            <Centered zIndex={2}>
                <Header/>
            </Centered>

            <Box w="100%" justifyContent={'center'} position={'relative'} overflowX={'hidden'}
                 opacity={isOpen ? 0 : 1}
            >
                <Box mt={0} width={'100%'} minHeight={'100vh'}>
                    {props.children}
                </Box>
            </Box>

            <Centered zIndex={2} pb={'60px'}>
                <Footer/>
            </Centered>
        </Stack>
    )
}