import * as React from 'react';
import {
    Box,
    Button,
    chakra,
    Flex,
    HStack,
    IconButton,
    IconProps,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
    useMediaQuery,
    useToken,
} from '@chakra-ui/react';
import {observer} from "mobx-react";
import {ReactComponent as Rune} from './rune.svg'
import {NavLink as RouterLink, useHistory} from 'react-router-dom';
import {NavLink} from "./NavLink";
import {Routes} from "../../app/routes";
import {useService} from "../../core/decorators/service";
import {AuthService, MagicOAuthProvider} from "../../services/AuthService";
import {ModalService} from "../../services/ModalService";
import {CartService} from "../../services/CartService";
import {GravityApplication} from "../../app/Application";
import {InstaIcon, TwitterIcon, YouTubeIcon} from "../icons/IconSocial";
import {BurgerButton} from "./BurgerButton";

const navLinks = [
    ['shop', Routes.main],
    ['how it works', Routes.howItWorks],
    ['sustainability', Routes.sustainability]
]

function Navigator() {
    return (
        <HStack>
            {navLinks.map(([text, to]) => (
                <NavLink
                    exact
                    key={to}
                    as={RouterLink}
                    activeClassName={'g-nav-active'}
                    to={to}>
                    {text}
                </NavLink>
            ))}
        </HStack>
    )
}


function NavigatorMobile(props: { onClick: () => void }) {
    return (
        <Stack px={'17px'} mt={'90px'}>
            {navLinks.map(([text, to]) => (
                <NavLink
                    fontSize={25}
                    fontWeight={'bold'}
                    py={'32px'}
                    w={'100%'}
                    textAlign={'center'}
                    _first={{borderTop: '1px solid'}}
                    borderBottom={'1px solid'}
                    exact
                    key={to}
                    onClick={props.onClick}
                    as={RouterLink}
                    activeClassName={'g-nav-active'}
                    to={to}>
                    {text}
                </NavLink>
            ))}
        </Stack>
    )
}

function SocialLinks() {
    return (
        <Stack>
            <HStack spacing={'10px'}>
                <Link><InstaIcon/></Link>
                <Link><YouTubeIcon/></Link>
                <Link><TwitterIcon/></Link>
            </HStack>
        </Stack>
    )
}


const SvgWrapper = chakra(chakra.svg, {
    baseStyle: {
        color: 'primary.500',
        _hover: {
            color: 'alert'
        }
    }
})

function LoginButtonIcon() {
    return (
        <SvgWrapper width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.00035" cy="4.92857" r="4.92857" fill="currentColor"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M5.05997 9.11632C3.21175 10.0133 1.71528 11.5217 0.833469 13.3786C-0.114185 15.3742 1.75532 17.25 3.96446 17.25H14.0359C16.245 17.25 18.1145 15.3742 17.1669 13.3786C16.2851 11.5217 14.7886 10.0133 12.9404 9.11632C11.9112 10.085 10.525 10.6785 9.00016 10.6785C7.47532 10.6785 6.08911 10.085 5.05997 9.11632Z"
                  fill="currentColor"/>
        </SvgWrapper>
    )
}

function ProfileIcon() {
    return (
        <SvgWrapper
            width={{base: '20px', md: '30px'}}
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="14.9999"
                cy="8.21428"
                r="8.21428"
                fill={'currentColor'}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.43307 15.1939C4.55981 17.0737 1.61345 20.5646 0.465091 24.7955C-0.113582 26.9275 1.73138 28.75 3.94052 28.75H26.0596C28.2687 28.75 30.1137 26.9275 29.535 24.7955C28.3866 20.5645 25.4403 17.0736 21.567 15.1938C19.8517 16.8083 17.5414 17.7975 15 17.7975C12.4586 17.7975 10.1483 16.8083 8.43307 15.1939Z"
                fill="currentColor"
            />
        </SvgWrapper>
    )
}

function CartIcon({count}: { count: number }) {
    const [_, white] = useToken(
        'colors',
        ['primary.500', 'white']
    )

    return (
        <SvgWrapper
            width={{base: '22px', md: '30px'}}
            viewBox="0 0 30 32"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M11.1603 6.86958H18.5437C18.5432 4.83109 16.8905 3.17871 14.852 3.17871C12.8134 3.17871 11.1607 4.83109 11.1603 6.86958ZM9.16026 6.86958H5.8911C4.872 6.86958 4.01587 7.63585 3.90333 8.64871L1.81813 27.4155C1.6865 28.6002 2.61388 29.6364 3.8059 29.6364H25.8981C27.0901 29.6364 28.0175 28.6002 27.8859 27.4155L25.8007 8.64872C25.6881 7.63585 24.832 6.86958 23.8129 6.86958H20.5437C20.5432 3.72652 17.9951 1.17871 14.852 1.17871C11.7088 1.17871 9.16071 3.72652 9.16026 6.86958Z"
                  fill="currentColor"/>

            <text y="20" x="50%" dominantBaseline="middle" textAnchor="middle" fontSize={'14px'}
                  fill={white}>{count}</text>
        </SvgWrapper>
    )
}

export const Navigation = observer(function Navigation() {
    const cartService = useService(CartService);
    const authService = useService(AuthService);
    const modalService = useService(ModalService);
    const magicOAuthProvider = useService(MagicOAuthProvider);
    const application = useService(GravityApplication);
    const history = useHistory();

    const {isOpen, onOpen, onClose} = useDisclosure()

    const [md] = useToken(
        'breakpoints',
        ['md']
    );

    const [isLargerThanMd] = useMediaQuery(`(min-width: ${md})`)

    const logout = () => {
        magicOAuthProvider.logout();
        authService.clear();
        application.setCachedProvider(null)
    }

    const isAuthorized = authService.isAuthorized;

    const [primary500] = useToken(
        'colors',
        ['primary.500', 'white']
    )

    return (
        <>
            <Box
                position={'fixed'}
                w={'100vw'}
                bg={'white'}
                zIndex={1000}
                h={'calc(100% - 60px)'}
                transition={'all ease-in .2s'}
                transform={isOpen ? 'translateY(calc(100% + 120px))' : 'translateY(0)'}
                top={'-100%'}
            >
                <NavigatorMobile onClick={onClose}/>

                <Box w={'100%'} display={'flex'} flexDirection={'column'} alignItems={'center'} position={'absolute'}
                     bottom={'57px'}>
                    <Text mb={4} color={'basic.500'} textTransform={'uppercase'} fontSize={18}>Follow us</Text>

                    <SocialLinks/>
                </Box>
            </Box>

            <Box zIndex={1001} bg={'white'} position={'relative'}>
                <Flex
                    position={'absolute'}
                    alignItems={'center'}
                    justify={{base: 'center', md: 'flex-start'}}
                    w={{base: '100%'}}
                    height={'100%'}
                    top={'0'}
                    onClick={() => !isLargerThanMd && history.push(Routes.main)}
                    left={'0'}>
                    <Rune/>
                </Flex>

                <Stack color={useColorModeValue('basic.500', 'basic.500')}
                       height={'60px'}
                       width={'100vw'}
                       justify={'center'}>
                    <Flex
                        marginLeft={'auto'}
                        width={'100%'}
                        marginRight={'auto'}
                        alignItems={'center'}
                        maxW={{md: 'calc(100vw - 126px - 72px - 64px)', "2xl": '1160px'}}
                        zIndex={2}
                        px={{base: '26px', md: 0}}
                    >
                        {!isLargerThanMd && (
                            <BurgerButton
                                isOpen={isOpen}
                                color={primary500}
                                onClick={() => isOpen ? onClose() : onOpen()}
                            />
                        )}

                        <Box display={{base: 'none', md: "flex"}} zIndex={2}>
                            <Navigator/>
                        </Box>

                        <HStack marginLeft={'auto'} spacing={'27px'} zIndex={2}>
                            {!isAuthorized
                                ? (
                                    isLargerThanMd ? (
                                        <Button
                                            leftIcon={<LoginButtonIcon/>}
                                            size={'sm'}
                                            _hover={{bg: 'primary.500', color: 'white'}}
                                            color={'primary.500'}
                                            bg={'transparent'}
                                            border={'1px solid'}
                                            onClick={() => modalService.open('login')}
                                            borderColor={'primary.500'}> Log in</Button>
                                    ) : (
                                        <Box onClick={() => modalService.open('login')}>
                                            <Spinner/>


                                            {/*<LoginButtonIcon/>*/}
                                        </Box>
                                    )
                                )
                                : (
                                    <Menu>
                                        <MenuButton as={IconButton}
                                                    icon={<ProfileIcon/>}
                                                    variant="unstyled"/>

                                        <MenuList zIndex={10}>
                                            <MenuItem as={RouterLink} to={Routes.profile}>Profile</MenuItem>
                                            <MenuItem as={RouterLink} to={Routes.myItems}
                                                // icon={<ActiveMenuIcon/>}
                                            >My items</MenuItem>
                                            <MenuItem>Notifications</MenuItem>
                                            <MenuItem onClick={() => logout()}>Log Out</MenuItem>
                                        </MenuList>
                                    </Menu>
                                )}

                            <Box as={RouterLink} to={Routes.cart} cursor={'pointer'}>
                                <CartIcon count={cartService.productsCount}/>
                            </Box>
                        </HStack>
                    </Flex>
                </Stack>


                <Flex
                    display={{base: 'none', md: "flex"}}
                    position={'absolute'} alignItems={'center'}
                    height={'100%'}
                    top={'0'}
                    right={'0'}
                    zIndex={1}
                >
                    <svg width="72" height="4" viewBox="0 0 72 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 2H113" stroke={primary500} strokeWidth="4"/>
                    </svg>
                </Flex>
            </Box>
        </>
    );
})





