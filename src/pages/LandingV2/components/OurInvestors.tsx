import * as React from 'react';
import {Box, Flex, Grid, GridItem, Image, Text} from "@chakra-ui/react";
import {Polygon} from "./Polygon";


export function OurInvestors() {
    return (
        <Box mt={{base: '120px', xl: '120px'}}>
            <Box flexGrow={1}>
                <Text
                    fontFamily={'All Round Gothic'}
                    fontSize={{base: 34, xl: 54}}
                    color={'white'}
                    lineHeight={{base: '44px', xl: '68px'}}
                    position={'relative'}
                >
                    Our Investors
                </Text>
            </Box>
            <Grid
                width={'100%'}
                flexGrow={1}
                ml={'auto'}
                templateColumns={{base: 'repeat(1, 372px)', xl: 'repeat(3, 372px)'}}
                templateRows={'181px 181px 181px'}
                gridColumnGap={'30px'}
                gridRowGap={'30px'}
                mt={{base: '36px', xl: '64px'}}
            >
                {/*<GridItem position={'relative'}>*/}
                {/*    <Polygon*/}
                {/*        zIndex={4}*/}
                {/*        position={'absolute'}*/}
                {/*        width={'100%'}*/}
                {/*        height={'100%'}*/}
                {/*        opacity={.2}*/}
                {/*        config={{*/}
                {/*            edges: [[21, 21], [21, 21], [21, 21], [21, 21]]*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        {data => (*/}
                {/*            <path*/}
                {/*                className={'gr-polygon-btn-outline'}*/}
                {/*                d={data.path + 'Z'}*/}
                {/*                fill="none"*/}
                {/*                stroke="#ffffff"*/}
                {/*                strokeWidth={'2px'}*/}
                {/*                fillRule="evenodd"*/}
                {/*                clipRule="evenodd"*/}
                {/*            />*/}
                {/*        )}*/}
                {/*    </Polygon>*/}


                {/*    <Flex justifyContent={'center'} alignItems={'center'} height={'100%'}>*/}
                {/*        <Image src={'/landing/investors/img.png'}*/}
                {/*               mixBlendMode={'multiply'}*/}
                {/*               width={230}/>*/}
                {/*    </Flex>*/}

                {/*</GridItem>*/}
                {/*<GridItem position={'relative'}>*/}
                {/*    <Polygon*/}
                {/*        zIndex={4}*/}
                {/*        position={'absolute'}*/}
                {/*        width={'100%'}*/}
                {/*        height={'100%'}*/}
                {/*        opacity={.2}*/}
                {/*        config={{*/}
                {/*            edges: [[21, 21], [21, 21], [21, 21], [21, 21]]*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        {data => (*/}
                {/*            <path*/}
                {/*                className={'gr-polygon-btn-outline'}*/}
                {/*                d={data.path + 'Z'}*/}
                {/*                fill="none"*/}
                {/*                stroke="#ffffff"*/}
                {/*                strokeWidth={'2px'}*/}
                {/*                fillRule="evenodd"*/}
                {/*                clipRule="evenodd"*/}
                {/*            />*/}
                {/*        )}*/}
                {/*    </Polygon>*/}
                {/*    <Flex justifyContent={'center'} alignItems={'center'} height={'100%'}>*/}
                {/*        <Image src={'/landing/investors/img_1.png'}*/}
                {/*               mixBlendMode={'multiply'}*/}
                {/*               width={230}/>*/}
                {/*    </Flex>*/}
                {/*</GridItem>*/}
                <GridItem position={'relative'}>
                    <Polygon
                        zIndex={4}
                        position={'absolute'}
                        width={'100%'}
                        height={'100%'}
                        opacity={.2}
                        config={{
                            edges: [[21, 21], [21, 21], [21, 21], [21, 21]]
                        }}
                    >
                        {data => (
                            <path
                                className={'gr-polygon-btn-outline'}
                                d={data.path + 'Z'}
                                fill="none"
                                stroke="#ffffff"
                                strokeWidth={'2px'}
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        )}
                    </Polygon>
                    <Flex justifyContent={'center'} alignItems={'center'} height={'100%'}>
                        <Image src={'/landing/investors/img_2.png'}
                               mixBlendMode={'multiply'}
                               width={230}/>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}
