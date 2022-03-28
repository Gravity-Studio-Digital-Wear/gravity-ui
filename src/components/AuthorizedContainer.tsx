import * as React from "react";
import {Navigation} from "./Navbar/Navbar";
import {Box, StylesProvider, useMediaQuery, useMultiStyleConfig, useToken} from "@chakra-ui/react";
import {observer} from "mobx-react";
import {Footer} from "./Footer";
import {useLocation} from "react-router-dom";
import {Routes} from "../app/routes";
import {BeMore} from "../pages/Landing/components/BeMoreInMetavers";

const contentBg = `
    #FFF8F5;
`

const bgLanding = `
conic-gradient(from 110.08deg at -26.41% 97.6%, #7468F6 -73.13deg, rgba(255, 255, 255, 0.36) 83.07deg, #ECC9F7 193.38deg, #74E3FF 217.15deg, #7468F6 286.87deg, rgba(255, 255, 255, 0.36) 443.07deg)
`

export function LandingContainer(props: React.PropsWithChildren<{}>) {
    const {children} = props;

    return (
        <Box w="100%" justifyContent={'center'} position={'relative'} overflowX={'hidden'} bg={bgLanding}>
            <Box mt={0} width={'100%'} minHeight={'100vh'}>
                {children}
            </Box>
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
        {variant: location.pathname === '/' && isLargerThanXl ? 'transparent' : 'default'}
    )

    const isNews = location.pathname.startsWith(Routes.news);

    if (location.pathname === '/') {
        return (
            <LandingContainer>{children}</LandingContainer>
        )
    }

    return (
        <StylesProvider value={styles}>
            <Box w="100%" justifyContent={'center'} position={'relative'} overflowX={'hidden'}>
                <Navigation/>

                <Box mt={0} width={'100%'} bg={contentBg} minHeight={'100vh'} pb={{base: '32px', md: '80px'}}>
                    <Box pt={33} marginLeft={'auto'} marginRight={'auto'}
                         maxW={{lg: '1160px', "2xl": '1160px'}}>{children}</Box>
                </Box>

                {isNews && <BeMore/>}
                <Footer/>
            </Box>
        </StylesProvider>
    )
})





