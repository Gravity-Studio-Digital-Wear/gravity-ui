import {Box, BoxProps, Image} from "@chakra-ui/react";
import * as React from "react";

export function Background(props: BoxProps) {
    return (
        <Box {...props}>
            <Image src={'/landing/bg-1-min.jpg'}/>
            <Image src={'/landing/bg-2-min.jpg'}/>
            <Image src={'/landing/bg-3-min.jpg'}/>
            <Image src={'/landing/bg-4-min.jpg'}/>
            <Image src={'/landing/bg-5-min.jpg'}/>
            <Image src={'/landing/bg-6-min.jpg'}/>
            <Image src={'/landing/bg-7-min.jpg'}/>
            <Image src={'/landing/bg-8-min.jpg'}/>
        </Box>
    )
}