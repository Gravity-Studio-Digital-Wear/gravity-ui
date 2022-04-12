import * as React from 'react';
import {Box, Flex, Link, Text} from "@chakra-ui/react";
import {Page} from "../core/Page";
import {Link as RouterLink} from "react-router-dom";
import {Routes} from "../app/routes";
import {IconBack} from "../components/icons/IconBack";


export const WhitePaperBusiness = () => {
    const boxRef = React.useRef<HTMLDivElement>(null)

    const [frameH, setFrameH] = React.useState(0)

    React.useEffect(() => {
        const {width} = boxRef.current?.getBoundingClientRect()

        setFrameH(width * (569 / 960));
    }, [])


    return (
        <Box>
            <Flex>
                <Link as={RouterLink}
                      to={{pathname: Routes.main}}
                      fontSize={18}
                      textTransform={'uppercase'}
                      textDecoration={'none'}
                      display={'flex'}
                      alignItems={'center'}
                >
                    <IconBack/>
                    <Text as={'span'} ml={'12px'}>Go Back</Text>
                </Link>
            </Flex>

            <Box p={{base: '17px', md: 0}} mt={'16px'} ref={boxRef}>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vTM5ScR2sOD_6q5_dWJny2LnLE6HZmOWgYWrnGe1NDvxoNZevhVMbDPEUsjXauH8ULxM564Xe2abMt3/embed?start=false&loop=false&delayms=3000"
                    frameBorder="0"
                    width="100%"
                    height={frameH}
                    allowFullScreen
                    // @ts-ignore
                    webkitallowfullscreen="true"/>
            </Box>
        </Box>


    )
}


export const WhitePaperTechnical = () => {
    const boxRef = React.useRef<HTMLDivElement>(null)

    const [frameH, setFrameH] = React.useState(0)

    React.useEffect(() => {
        const {width} = boxRef.current?.getBoundingClientRect()

        setFrameH(width * (569 / 960));
    }, [])


    return (
        <Box>
            <Flex>
                <Link as={RouterLink}
                      to={{pathname: Routes.main}}
                      fontSize={18}
                      textTransform={'uppercase'}
                      textDecoration={'none'}
                      display={'flex'}
                      alignItems={'center'}
                >
                    <IconBack/>
                    <Text as={'span'} ml={'12px'}>Go Back</Text>
                </Link>
            </Flex>

            <Box p={{base: '17px', md: 0}} mt={'16px'} ref={boxRef}>
                <iframe
                    src="https://docs.google.com/presentation/d/e/2PACX-1vShlqb1d29CbjqkDbV2LRu0E_GYWi641_sOQQ-AW1YVu2MSAbnj36f3iIAjZFN7z4R248qX6shNIA70/embed?start=false&loop=false&delayms=3000"
                    frameBorder="0"
                    width="100%"
                    height={frameH}
                    allowFullScreen
                    // @ts-ignore
                    webkitallowfullscreen="true"/>
            </Box>
        </Box>


    )
}

