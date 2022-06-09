import * as React from 'react';
import {
    Box,
    BoxProps,
    Drawer,
    DrawerBody,
    DrawerContent,
    Flex,
    HStack,
    LinkBox,
    Link as ChakraLink,
    Stack,
    Text,
    UseDisclosureReturn,
    useMediaQuery,
    useToken
} from "@chakra-ui/react";
import {ReactComponent as Logo} from '../../../pages/LandingV2/assets/logo.svg';
import {Routes} from "../../../app/routes";
import {Link, useHistory} from "react-router-dom";
import {DiscordIcon, InstaIcon, MediumIcon, TelegramIcon, TwitterIcon, YouTubeIcon} from "../../icons/IconSocial";

export const OverlayMenu = React.createContext<UseDisclosureReturn>(null);


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

            <Box cursor={'pointer'} onClick={() => history.push(Routes.main)}>
                <Logo/>
            </Box>

            {isDesktop && (
                <>
                    <HStack
                        ml={'60px'}
                        textTransform={'uppercase'}
                        color={'white'}
                        letterSpacing={'0.03em'}
                        spacing={'24px'}
                        fontSize={'14px'}
                    >
                        <LinkBox>
                            <Link to={Routes.main}>About</Link>
                        </LinkBox>

                        <LinkBox>
                            <Link to={Routes.nftDrop}>Drop</Link>
                        </LinkBox>

                        <LinkBox>
                            <Link to={Routes.team}>Meet the team</Link>
                        </LinkBox>

                    </HStack>
                    {/*<ConnectButton display={'none'} ml={'auto'}/>*/}
                </>
            )}


            {!isDesktop && (
                <BurgerButton ml={'auto'}/>
            )}
        </Flex>
    )
}


function BurgerButton(props: BoxProps) {
    const {onOpen, onClose, isOpen} = React.useContext(OverlayMenu)

    return (<>
            <Box {...props} onClick={onOpen}>
                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H24" stroke="white" strokeWidth="2"/>
                    <path d="M10 9H24" stroke="white" strokeWidth="2"/>
                    <path d="M0 17L24 17" stroke="white" strokeWidth="2"/>
                </svg>
            </Box>
            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                <DrawerContent bgColor={'transparent'} top={'78px!important'} height={'100%'}>
                    <DrawerBody bgColor={'transparent'} height={'100%'} position={'relative'}>
                        <Stack
                            ml={'60px'}
                            textTransform={'uppercase'}
                            color={'white'}
                            letterSpacing={'0.03em'}
                            spacing={'24px'}
                            fontSize={'24px'}
                            mt={'100px'}
                        >

                            <LinkBox  onClick={onClose}>
                                <Link to={Routes.main}>About</Link>
                            </LinkBox>

                            <LinkBox  onClick={onClose}>
                                <Link to={Routes.nftDrop}>Drop</Link>
                            </LinkBox>

                            <LinkBox onClick={onClose}>
                                <Link to={Routes.team}>Meet the team</Link>
                            </LinkBox>
                        </Stack>

                        <Stack spacing={'16px'} position={'absolute'} bottom={'100px'}>
                            <Text color={'white'} letterSpacing={'0.03em'}>FOLLOW US</Text>

                            <HStack
                                spacing={'10px'}
                                sx={{
                                    '--social-icon-fill': '#39373E'
                                }}
                            >
                                <ChakraLink href={'https://t.me/gravitythestudiogroup'} isExternal>
                                    <TelegramIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                </ChakraLink>
                                <ChakraLink href={'https://discord.gg/Ejh4jEPRDC'} isExternal>
                                    <DiscordIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                </ChakraLink>
                                <ChakraLink href="https://www.instagram.com/gravitylayer/" isExternal>
                                    <InstaIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                </ChakraLink>
                                <ChakraLink href="https://www.youtube.com/channel/UCKrbhUFFqg-Q2nyrfxN9xjQ" isExternal>
                                    <YouTubeIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                </ChakraLink>
                                <ChakraLink href="https://twitter.com/Gravityskins" isExternal>
                                    <TwitterIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                </ChakraLink>

                                <ChakraLink href="https://medium.com/gravity-the-studio" isExternal>
                                    <MediumIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                                </ChakraLink>
                            </HStack>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>

    )
}