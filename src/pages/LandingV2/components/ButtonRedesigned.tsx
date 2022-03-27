import * as React from 'react';
import {Box, Button, ButtonProps, ComponentWithAs, Text} from "@chakra-ui/react";

const FilledPolygon = `
0 0, 
calc(100% - 18px) 0, 
100% 18px, 
100% calc(100% - 8px), 
calc(100% - 8px) 100%, 
8px 100%, 
0 calc(100% - 8px)
`

export const ButtonRedesigned = ({children, ...props}: ButtonProps) => {

console.log(props)
    return (
        <Button
            h={'56px'}
            w={'269px'}
            bg={'transparent'}
            _hover={{
                bg: 'transparent',
            }}
            sx={{
                '&:hover .gr-button__backside-border': {
                    top: '2.5px'
                },

                '&:hover .gr-button__fill': {
                    top: '2.5px'
                }
            }}
            position={'relative'}
            {...props}
        >
            <Box
                width={'100%'}
                height={'50px'}
                position={'absolute'}
                top={0}
                className={'gr-polygon-btn  gr-button__backside-border'}
                style={{
                    WebkitMask: 'paint(polygon-border)'
                }}
                bgColor={'white'}
                __css={{
                    transitionDelay: '300ms',
                    transition: 'top ease-out 100ms',
                }}
            />

            <Box
                position={'absolute'}
                className={'gr-button__fill'}
                bgColor={'#D4F23F'}
                top={'5px'}
                zIndex={1}
                h={'50px'}
                w={'100%'}
                justifyContent={'center'}
                display={'flex'}
                alignItems={'center'}
                _hover={{
                    bgColor: '#D9FF1D'
                }}
                __css={{
                    clipPath: `polygon(${FilledPolygon})`,
                    transitionDelay: '300ms',
                    transition: 'all ease-out 100ms',
                }}
            >
                <Text color={'basic.500'}
                      zIndex={2}
                      fontWeight={600}
                      position={'relative'}
                      letterSpacing={'0.08em'}
                >
                    {children}
                </Text>

                <Box
                    position={'absolute'}
                    w={'100%'}
                    h={'100%'}
                    style={{
                        // clipPath: 'polygon(var(--path))',
                        WebkitMask: 'paint(polygon-border)'
                    }}
                    bgColor={'black'}
                    class={'gr-polygon-btn'}
                />
            </Box>
        </Button>
    )
}