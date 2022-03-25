import * as React from 'react';
import {Box, PropsOf, Text} from "@chakra-ui/react";

const edges = {



}

export function ConnectButton(props: PropsOf<typeof Box>) {
    const text = 'connect wallet';

    return (
        <Box
            height={'38px'}
            width={'162px'}
            position={'relative'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            cursor={'pointer'}
            __css={{
                transition: 'all ease-in .3s',
                clipPath: 'polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 0 100%)'
            }}
            _hover={{
                bgColor: '#D4F23F',
            }}
            {...props}
        >
            <Box
                width={'100%'}
                height={'100%'}
                position={'absolute'}
                className={'gr-connect-button'}
                style={{
                    // clipPath: 'polygon(var(--path))',
                    WebkitMask: 'paint(polygon-border)'
                }}

                bgColor={'#E7F4A5'}
            />

            <Text
                fontWeight={600}
                letterSpacing={'0.08em'}
                fontSize={'12px'}
                color={'white'}
                textTransform={'uppercase'}
            >
                {text}
            </Text>
        </Box>
    )
}