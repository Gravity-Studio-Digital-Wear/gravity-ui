import * as React from 'react';
import {Box, chakra, HStack, Link, Stack, useColorModeValue,} from '@chakra-ui/react';
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
        <Box>
            <Stack
                bg={'white'}
                color={useColorModeValue('basic.500', 'basic.500')}
                height={'60px'}
                width={'100vw'}
                align={'flex-start'}
                justify={'center'}
            >
                <HStack spacing={30}>
                    <Rune/>
                    <Navigator/>
                </HStack>
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

