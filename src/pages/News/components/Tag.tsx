import {Box, Text} from "@chakra-ui/react";
import * as React from "react";

export function Tag({ text, onClick, isActive }: {text: string, onClick?: () => void, isActive: boolean}) {
    return (
        <Box  height={'34px'} position={'relative'} cursor={onClick ? 'pointer' : 'initial'} onClick={() => onClick && onClick()}>
            <Box width={'100%'}
                 height={'100%'}
                 bgColor={'basic.500'}
                 position={'absolute'}
                 clipPath={'polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px);'}/>

            <Box width={'100%'}
                 height={'100%'}
                 bgColor={isActive ? 'primary.300' : 'basic.100'}
                 position={'absolute'}
                 clipPath={'polygon(10.5px 2px, calc(100% - 10.5px) 2px, calc(100% - 2px) 10.5px, calc(100% - 2px) calc(100% - 10.5px), calc(100% - 10.5px) calc(100% - 2px), 10.5px calc(100% - 2px), 2px calc(100% - 10.5px), 2px 10.5px)'}/>

            <Box width={'100%'}
                 height={'100%'}
                 textTransform={'uppercase'}
                 position={'absolute'} display={'flex'} userSelect={'none'} pointerEvents={'none'} justifyContent={'center'} lineHeight={'34px'}>
                <Text>
                    {text}
                </Text>
            </Box>

            <Box width={'100%'}
                 opacity={0}
                 px={'12px'}
                 height={'100%'}
                 textTransform={'uppercase'}
                 display={'flex'} justifyContent={'center'} lineHeight={'34px'}>
                <Text>
                    {text}
                </Text>
            </Box>
        </Box>
    )
}