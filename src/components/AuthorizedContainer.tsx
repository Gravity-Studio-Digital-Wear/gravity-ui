import * as React from "react";
import {Navigation} from "./Navbar/Navbar";
import {Box, StylesProvider, useMediaQuery, useMultiStyleConfig, useToken} from "@chakra-ui/react";
import {observer} from "mobx-react";
import {Footer} from "./Footer";
import {useLocation} from "react-router-dom";

const contentBg = `
    #FFF8F5;
`

const bgLanding = 'conic-gradient(from 54.26deg at 31.74% 21.24%, #F2EDFF -144.13deg, #FFF8F5 33.04deg, #F2EDFF 215.87deg, #FFF8F5 393.04deg)'

function LandingContainer(props: React.PropsWithChildren<{}>) {
    const {children} = props;

    return (
        <Box w="100%" justifyContent={'center'} position={'relative'} overflowX={'hidden'} >
            <Box mt={0} width={'100%'} bg={bgLanding} minHeight={'100vh'}>
                <Box>{children}</Box>
            </Box>

            <Footer/>
        </Box>
    )
}

export const AuthorizedContainer = observer(function AuthorizedContainer(props: React.PropsWithChildren<{}>) {
    const {children} = props;

    const location = useLocation()

    const [xl] = useToken(
        'breakpoints',
        ['xl']
    );
    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)

    const styles = useMultiStyleConfig(
        'Navigator',
        { variant: location.pathname === '/__landing' && isLargerThanXl ?  'transparent' : 'default' }
    )


    if (location.pathname === '/__landing') {
        return (
            <StylesProvider value={styles}>
                <LandingContainer>{children}</LandingContainer>
            </StylesProvider>
        )
    }

    return (
        <StylesProvider value={styles}>
        <Box w="100%" justifyContent={'center'} position={'relative'} overflowX={'hidden'} >
            <Navigation/>

            <Box mt={0} width={'100%'} bg={contentBg} minHeight={'100vh'} pb={{base: '32px', md: '80px'}}>
                <Box pt={33} marginLeft={'auto'} marginRight={'auto'} maxW={{ lg: '1160px', "2xl": '1160px'}}>{children}</Box>
            </Box>

            <Footer/>
        </Box>
        </StylesProvider>
    )
})





