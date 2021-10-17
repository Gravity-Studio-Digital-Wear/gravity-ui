import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Link, Stack, Text} from "@chakra-ui/react";
import {ChakraCarousel} from "../../components/Carousel";
import {IconCart} from "../../components/icons/IconCart";
import {QtyControl} from "../../components/QtyControl";
import {useService} from "../../core/decorators/service";
import {WarehouseStore} from "../../stores/WarehouseStore";
import {RouteComponentProps} from "react-router";
import {PageSpinner} from "../../components/PageSpinner";


export const ProductPage = observer(function ProductPage({match}: RouteComponentProps<{ id: string }>) {
    const warehouseStore = useService(WarehouseStore)
    const images = ['img_4_full.png', 'img_4_full.png', 'img_4_full.png'];

    React.useEffect( () => {
        warehouseStore.productItem.request(match.params.id)
    }, [])

    if (warehouseStore.productItem.requestStatus !== 'success') {
        return <PageSpinner/>
    }



    const imageCarousel = (
        <ChakraCarousel gap={32}>
            {images.map((image: string) => {
                return (
                    <Image boxSize={'80%'} pointerEvents={'none'} src={'/' + image} sx={{mixBlendMode: 'multiply'}}/>
                )
            })}
        </ChakraCarousel>
    )

    return (
        <Grid templateColumns={'repeat(12, 1fr)'} gridGap={'20px'} mt={'84px'}>
            <GridItem gridColumn={'span 1'}></GridItem>
            <GridItem gridColumn={'span 6'}>
                <Box maxH={'550px'}>{imageCarousel}</Box>
            </GridItem>
            <GridItem gridColumn={'span 5'}>
                <Stack spacing={'16px'}>
                    <Heading as={'h1'} fontSize={43} textTransform={'uppercase'}
                             letterSpacing={'0.01em'}>FRINGE</Heading>

                    <Text fontSize={'16px'}>This is a sample description about this product and that it’s digital.
                        And this is how our process works when you buy this item.</Text>

                    <Link color={'primary.500'} textTransform={'uppercase'} letterSpacing={'0.07em'}>
                        <Text as={'span'} borderBottom={'1px solid'} borderColor={'primary.500'}>How to wear it?</Text>
                    </Link>

                    <HStack>
                        <HStack spacing={'32px'}>
                            <QtyControl value={0} onInc={() => {}} onDec={() => {}}/>

                            <Text fontSize={'16px'} color={'alert'} textTransform={'uppercase'}
                                  letterSpacing={'0.07em'}>5 pieces left</Text>
                        </HStack>
                    </HStack>

                    <Flex w={'100%'} alignItems={'flex-end'}>
                        <Stack grow={1} spacing={'0'} alignItems={'flex-start'} textTransform={'uppercase'}>
                            <Text as={'span'}
                                  fontSize={'15px'}
                                  color={'alert'}
                                  lineHeight={1}
                                  textDecoration={'line-through'}>
                                1 283 $
                            </Text>
                            <Text as={'span'}
                                  fontSize={'25px'}
                                  fontWeight={'bold'}
                                  letterSpacing={'0.02em'}
                                  lineHeight={1}
                                  color={'basic.500'}>
                                1 283
                            </Text>
                        </Stack>

                        <Box marginLeft={'auto'}>
                            <Button
                                leftIcon={<IconCart/>}
                                colorScheme={'primary'}
                                textTransform={'uppercase'}
                                w={'265px'}>
                                Add To Cart
                            </Button>
                        </Box>
                    </Flex>
                </Stack>

            </GridItem>
        </Grid>
    )
})