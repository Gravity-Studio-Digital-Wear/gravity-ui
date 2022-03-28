import {Box, BoxProps} from "@chakra-ui/react";
import * as React from "react";

export const Centered = ({children,...props} : BoxProps) => {
    return (
        <Box {...props}>
            <Box
                marginLeft={'auto'}
                marginRight={'auto'}
                maxW={{lg: '1160px', "2xl": '1160px'}}
                px={{base: '16px', xl: 0}}


            >
                {children}
            </Box>
        </Box>
    )
}