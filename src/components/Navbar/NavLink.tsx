import {chakra, Link} from "@chakra-ui/react";

export const NavLink = chakra(Link, {
    baseStyle: {
        textTransform: 'uppercase',
        '&.g-nav-active': {
            ':after,:before': {
                opacity: 1
            },
        },
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
    },
})
