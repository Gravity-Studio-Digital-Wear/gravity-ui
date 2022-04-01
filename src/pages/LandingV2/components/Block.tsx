import {Box, BoxProps} from "@chakra-ui/react";
import * as React from "react";

export const Block = (props: BoxProps) => {
    return (
        <Box height={'auto'} zIndex={2}  {...props}>
            {props.children}
        </Box>
    )
}