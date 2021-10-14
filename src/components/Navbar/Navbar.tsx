import * as React from 'react';
import {Box, chakra, Flex, HStack, Link, Stack, useColorModeValue,} from '@chakra-ui/react';
import {observer} from "mobx-react";
import {useService} from "../../core/decorators/service";
import {AuthService} from "../../services/AuthService";
import {ReactComponent as Rune} from './rune.svg'

const NavLink = chakra(Link, {
    baseStyle: {
        textTransform: 'uppercase',
        _hover: {
            textDecoration: 'none',

            ':after,:before': {
                opacity: 1
            },
        },

        ':after,:before': {
            opacity: 0,
            transition: 'ease-out .1s all',
        },

        ':after': {
            content: '"\\00a0]"',
            display: 'inline-block',
        },

        ':before': {
            content: '"[\\00a0"',
            display: 'inline-block'
        }
    }
})

export const Navigation = observer(function Navigation() {
    const authService = useService(AuthService)

    return (
        <Box bg={'white'} position={'relative'}>
            <Flex position={'absolute'} alignItems={'center'} height={'100%'} top={'0'} left={'0'}>
                <Rune/>
            </Flex>
            <Stack color={useColorModeValue('basic.500', 'basic.500')}
                height={'60px'}
                width={'100vw'}
                justify={'center'}>
                <Flex marginLeft={'auto'} width={'100%'} marginRight={'auto'} maxW={'1160px'}>
                    <Navigator/>

                    <HStack marginLeft={'auto'} spacing={'27px'}>
                        <Box cursor={'pointer'}>
                            <svg width="30" height="29" viewBox="0 0 30 29" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14.9999" cy="8.21428" r="8.21428" fill="#523774"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M8.43307 15.1939C4.55981 17.0737 1.61345 20.5646 0.465091 24.7955C-0.113582 26.9275 1.73138 28.75 3.94052 28.75H26.0596C28.2687 28.75 30.1137 26.9275 29.535 24.7955C28.3866 20.5645 25.4403 17.0736 21.567 15.1938C19.8517 16.8083 17.5414 17.7975 15 17.7975C12.4586 17.7975 10.1483 16.8083 8.43307 15.1939Z"
                                      fill="#523774"/>
                            </svg>
                        </Box>

                        <Box cursor={'pointer'}>
                            <svg width="30" height="32" viewBox="0 0 30 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11.1603 6.86958H18.5437C18.5432 4.83109 16.8905 3.17871 14.852 3.17871C12.8134 3.17871 11.1607 4.83109 11.1603 6.86958ZM9.16026 6.86958H5.8911C4.872 6.86958 4.01587 7.63585 3.90333 8.64871L1.81813 27.4155C1.6865 28.6002 2.61388 29.6364 3.8059 29.6364H25.8981C27.0901 29.6364 28.0175 28.6002 27.8859 27.4155L25.8007 8.64872C25.6881 7.63585 24.832 6.86958 23.8129 6.86958H20.5437C20.5432 3.72652 17.9951 1.17871 14.852 1.17871C11.7088 1.17871 9.16071 3.72652 9.16026 6.86958Z"
                                      fill="#523774"/>
                                <path
                                    d="M13.238 16.2296L16.178 15.0676V24.3076H14.75V17.0136L13.238 17.5596V16.2296Z"
                                    fill="white"/>
                            </svg>
                        </Box>
                    </HStack>
                </Flex>
            </Stack>
        </Box>
    );
})

function Navigator() {
    return (
        <HStack>
            <NavLink>shop</NavLink>
            <NavLink>how it work</NavLink>
            <NavLink>sustainability</NavLink>
        </HStack>
    )
}

