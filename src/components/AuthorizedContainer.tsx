import * as React from "react";
import {Navigation} from "./Navbar/Navbar";
import {Box} from "@chakra-ui/react";
import {observer} from "mobx-react";
import {Footer} from "./Footer";

const contentBg = `
    conic-gradient(from 54.26deg at 31.74% 21.24%, #F2EDFF -144.13deg, #FFF8F5 33.04deg, #F2EDFF 215.87deg, #FFF8F5 393.04deg);
`

export const AuthorizedContainer = observer(function AuthorizedContainer(props: React.PropsWithChildren<{}>) {
    const {children} = props

    return (
        <Box w="100%" justifyContent={'center'} position={'relative'} overflowX={'hidden'} >
            <Navigation/>

            <Box mt={0} width={'100%'} bg={contentBg} minHeight={'100vh'} pb={'80px'}>
                <Box pt={33} marginLeft={'auto'} marginRight={'auto'} maxW={'1160px'}>{children}</Box>
            </Box>

            <Footer/>
        </Box>
    )
})


