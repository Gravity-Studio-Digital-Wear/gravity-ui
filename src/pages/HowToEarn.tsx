import * as React from 'react';
import {Box, Text} from "@chakra-ui/react";


export function HowToEarn() {
    const boxRef = React.useRef<HTMLDivElement>(null)

    const [frameH, setFrameH] = React.useState(0)

    React.useEffect(() => {
        const {width} = boxRef.current?.getBoundingClientRect()

        setFrameH(width * (569 / 960));
    }, [])


    return (
        <Box p={{base: '17px', md: 0}} ref={boxRef}>
            <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vSlkZlbPtulkX9z5kNKdC0s1ZpB6M37c-sWqQM-X6M8bsJrmMu2Nzh45dOpd0xIYOWKNImjShR1ZzqN/embed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="100%"
                height={frameH}
                allowFullScreen
                // @ts-ignore
                webkitallowfullscreen="true"/>
        </Box>
    )
}