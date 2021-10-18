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
import {CartService} from "../../services/CartService";
import {formatPrice} from "../../utils/price";


export const ProductPage = observer(function ProductPage({match}: RouteComponentProps<{ id: string }>) {
    const warehouseStore = useService(WarehouseStore)
    const cartService = useService(CartService)

    React.useEffect(() => {
        warehouseStore.productItem.request(match.params.id)
    }, [])

    if (warehouseStore.productItem.requestStatus !== 'success' && !warehouseStore.productItem.result) {
        return <PageSpinner/>
    }

    const product = warehouseStore.productItem.result

    const imageCarousel = (
        <ChakraCarousel gap={32}>
            {product.images.slice(1).map((image: string) => {
                return (
                    <Image
                        key={image}
                        boxSize={'80%'}
                        pointerEvents={'none'}
                        src={image}
                    />
                )
            })}
        </ChakraCarousel>
    )

    const cartItem = cartService.getProductCartItem(product)


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

                    <Text fontSize={'16px'}>
                        {product.description}
                    </Text>

                    <Link color={'primary.500'} textTransform={'uppercase'} letterSpacing={'0.07em'}>
                        <Text as={'span'} borderBottom={'1px solid'} borderColor={'primary.500'}>How to wear it?</Text>
                    </Link>

                    <HStack>
                        <HStack spacing={'32px'}>
                            <QtyControl
                                value={cartItem.quantity}
                                onInc={() => cartService.add(product)}
                                onDec={() => cartService.remove(product)}
                            />

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
                                {formatPrice(product.priceUSD * 1.5)} $
                            </Text>
                            <Text as={'span'}
                                  fontSize={'25px'}
                                  fontWeight={'bold'}
                                  letterSpacing={'0.02em'}
                                  lineHeight={1}
                                  color={'basic.500'}>
                                {formatPrice(product.priceUSD)} $
                            </Text>
                        </Stack>

                        <Box marginLeft={'auto'}>
                            <Button
                                leftIcon={<IconCart/>}
                                colorScheme={'primary'}
                                textTransform={'uppercase'}
                                onClick={() => cartService.add(product)}
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