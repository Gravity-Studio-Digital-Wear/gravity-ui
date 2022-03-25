import * as React from 'react';
import {Flex, HStack, LinkBox} from "@chakra-ui/react";
import {ReactComponent as Logo} from '../assets/logo.svg';
import {ConnectButton} from "./ConnectButton";


export function Header() {
    return (
        <Flex height={'78px'} alignItems={'center'}>
            <Logo/>

            <HStack
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

            <ConnectButton ml={'auto'}/>
        </Flex>
    )
}