import {Box, BoxProps} from "@chakra-ui/react";
import * as React from "react";

export const Block = (props: BoxProps) => {
    return (
        <Box height={'auto'} zIndex={2}  {...props}>
            {props.children}
        </Box>
    )
}


export const Centered = ({children}) => {
    return (
        <Box
            marginLeft={'auto'}
            marginRight={'auto'}
            maxW={{lg: '1160px', "2xl": '1160px'}}
            px={{base: '16px', xl: 0}}
        >
            {children}
        </Box>
    )
}