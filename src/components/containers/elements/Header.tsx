import * as React from 'react';
import {Box, BoxProps, Flex, HStack, LinkBox, useMediaQuery, useToken} from "@chakra-ui/react";
import {ReactComponent as Logo} from '../../../pages/LandingV2/assets/logo.svg';
import {Routes} from "../../../app/routes";
import {useHistory} from "react-router-dom";


export function Header() {
    const [md, xl] = useToken(
        'breakpoints',
        ['lg', 'xl']
    );

    const [isLargerThanMd] = useMediaQuery(`(min-width: ${md})`)
    const [isLargerThanXl] = useMediaQuery(`(min-width: ${xl})`)

    const isDesktop = isLargerThanXl;

    const history = useHistory();

    return (
        <Flex height={'78px'}
              alignItems={'center'}

              p={{base: '15px', xl: 0}}
        >

            <Box cursor={'pointer'} onClick={() =>  history.push(Routes.main)}>
                <Logo/>
            </Box>

            {isDesktop && (
                <>
                    <HStack
                        display={'none'}
                        ml={'60px'}
                        textTransform={'uppercase'}
                        color={'white'}
                        letterSpacing={'0.03em'}
                        spacing={'24px'}
                        fontSize={'14px'}
                    >
                        <LinkBox>NFT Drop</LinkBox>

                        <LinkBox>for fashion brands</LinkBox>
                        <LinkBox>for metaverse developers</LinkBox>

                        <LinkBox>MEET THE TEAM</LinkBox>
                    </HStack>

                    {/*<ConnectButton display={'none'} ml={'auto'}/>*/}
                </>
            )}


            {!isDesktop && (
                <BurgerButton display={'none'} ml={'auto'}/>
            )}
        </Flex>
    )
}


function BurgerButton(props: BoxProps) {
    return (
        <Box {...props}>
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1H24" stroke="white" strokeWidth="2"/>
                <path d="M10 9H24" stroke="white" strokeWidth="2"/>
                <path d="M0 17L24 17" stroke="white" strokeWidth="2"/>
            </svg>
        </Box>
    )
}