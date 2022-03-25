import * as React from 'react';
import {Box, Flex, Grid, GridItem, Image, Text} from "@chakra-ui/react";


export function OurPartners() {
    return (
        <Flex mr={'40px'}>
            <Box flexGrow={1}>
                <Text
                    fontFamily={'All Round Gothic'}
                    fontSize={54}
                    color={'white'}
                    lineHeight={'68px'}
                    position={'relative'}
                >
                    Our Partners
                </Text>
            </Box>
            <Grid
                flexGrow={1}
                ml={'auto'}
                templateColumns={{base: 'repeat(3, 1fr)'}}
                gridColumnGap={'30px'}
            >
                <GridItem>
                    <Image src={'/partner_1.png'}
                           mixBlendMode={'multiply'}
                           width={164}/>
                </GridItem>
                <GridItem>
                    <Image src={'/partner_2.png'}
                           mixBlendMode={'multiply'}
                           width={164}/>
                </GridItem>
                <GridItem>
                    <Image src={'/partner_3.png'}
                           mixBlendMode={'multiply'}
                           width={164}/>
                </GridItem>
            </Grid>
        </Flex>
    )
}
