import * as React from 'react';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue,
    useToken,
} from '@chakra-ui/react';
import {observer} from "mobx-react";
import {ReactComponent as Rune} from './rune.svg'
import {NavLink as RouterLink} from 'react-router-dom';
import {NavLink} from "./NavLink";
import {Routes} from "../../app/routes";
import {useService} from "../../core/decorators/service";
import {CartStore} from "../../stores/CartStore";
import {AuthService, MagicOAuthProvider} from "../../services/AuthService";
import {ModalService} from "../../services/ModalService";
import {CartService} from "../../services/CartService";

const navLinks = [
    ['shop', Routes.main],
    ['how it work', Routes.howItWorks],
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


function ProfileIcon() {
    const [primary500, white] = useToken(
        'colors',
        ['primary.500', 'white']
    )
    return (
        <svg width="30" height="29" viewBox="0 0 30 29" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <circle cx="14.9999" cy="8.21428" r="8.21428" fill={primary500}/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M8.43307 15.1939C4.55981 17.0737 1.61345 20.5646 0.465091 24.7955C-0.113582 26.9275 1.73138 28.75 3.94052 28.75H26.0596C28.2687 28.75 30.1137 26.9275 29.535 24.7955C28.3866 20.5645 25.4403 17.0736 21.567 15.1938C19.8517 16.8083 17.5414 17.7975 15 17.7975C12.4586 17.7975 10.1483 16.8083 8.43307 15.1939Z"
                  fill={primary500}/>
        </svg>
    )
}


function ActiveMenuIcon() {
    const [alert] = useToken(
        'colors',
        ['alert']
    )

    return (
        <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4.5" r="4" fill={alert}/>
        </svg>
    )
}


export const Navigation = observer(function Navigation() {
    const cartService = useService(CartService);
    const authService = useService(AuthService);
    const modalService = useService(ModalService);
    const magicOAuthProvider = useService(MagicOAuthProvider);

    const logout = () => {
        magicOAuthProvider.logout();
        authService.unauthenticate();
        authService.clear();
    }

    const isAuthorized = authService.isAuthorized;


    const [primary500, white] = useToken(
        'colors',
        ['primary.500', 'white']
    )

    return (
        <Box bg={'white'} position={'relative'}>
            <Flex position={'absolute'} alignItems={'center'} height={'100%'} top={'0'} left={'0'}>
                <Rune/>
            </Flex>

            <Flex position={'absolute'} alignItems={'center'} height={'100%'} top={'0'} right={'0'}>
                <svg width="72" height="4" viewBox="0 0 72 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2H113" stroke={primary500} strokeWidth="4"/>
                </svg>
            </Flex>

            <Stack color={useColorModeValue('basic.500', 'basic.500')}
                   height={'60px'}
                   width={'100vw'}
                   justify={'center'}>
                <Flex marginLeft={'auto'} width={'100%'} marginRight={'auto'} maxW={'1160px'}>
                    <Navigator/>

                    <HStack marginLeft={'auto'} spacing={'27px'}>
                        {!isAuthorized
                            ? (
                                <Box onClick={() => modalService.open('login')}>
                                    <ProfileIcon/>
                                </Box>
                            )
                            : (
                                <Menu>
                                    <MenuButton as={IconButton} icon={<ProfileIcon/>} variant="unstyled"/>

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
                            <svg width="30" height="32" viewBox="0 0 30 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M11.1603 6.86958H18.5437C18.5432 4.83109 16.8905 3.17871 14.852 3.17871C12.8134 3.17871 11.1607 4.83109 11.1603 6.86958ZM9.16026 6.86958H5.8911C4.872 6.86958 4.01587 7.63585 3.90333 8.64871L1.81813 27.4155C1.6865 28.6002 2.61388 29.6364 3.8059 29.6364H25.8981C27.0901 29.6364 28.0175 28.6002 27.8859 27.4155L25.8007 8.64872C25.6881 7.63585 24.832 6.86958 23.8129 6.86958H20.5437C20.5432 3.72652 17.9951 1.17871 14.852 1.17871C11.7088 1.17871 9.16071 3.72652 9.16026 6.86958Z"
                                      fill={primary500}/>

                                <text x="11" y="23" fontSize={'14px'} fill={white}>{cartService.productsCount}</text>
                            </svg>
                        </Box>
                    </HStack>
                </Flex>
            </Stack>
        </Box>
    );
})


