import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Link, Stack, Text, useToken} from "@chakra-ui/react";
import {IconCart} from "../../components/icons/IconCart";
import {QtyControl} from "../../components/QtyControl";
import {useService} from "../../core/decorators/service";
import {WarehouseStore} from "../../stores/WarehouseStore";
import {RouteComponentProps} from "react-router";
import {PageSpinner} from "../../components/PageSpinner";
import {CartService} from "../../services/CartService";
import {formatPrice} from "../../utils/price";
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Link as RouterLink} from "react-router-dom";
import {Routes} from "../../app/routes";
import {IconBack} from "../../components/icons/IconBack";

// install Swiper modules
SwiperCore.use([Pagination]);


export const ProductPage = observer(function ProductPage({match}: RouteComponentProps<{ id: string }>) {
    const warehouseStore = useService(WarehouseStore)
    const cartService = useService(CartService)
    const [primary500, white] = useToken(
        'colors',
        ['primary.500', 'white']
    )
    React.useEffect(() => {
        warehouseStore.productItem.request(match.params.id)
    }, [])


    if (warehouseStore.productItem.requestStatus !== 'success' && !warehouseStore.productItem.result) {
        return <PageSpinner/>
    }

    const product = warehouseStore.productItem.result

    const cartItem = cartService.getProductCartItem(product)

    return (
        <Box>
            <Flex>
                <Link as={RouterLink} to={{pathname: Routes.main, state: {refresh: false}}}  fontSize={18} textTransform={'uppercase'}
                      textDecoration={'none'} display={'flex'} alignItems={'center'}>
                    <IconBack/>
                    <Text as={'span'} ml={'12px'}>Back to shopping</Text>
                </Link>
            </Flex>
            <Grid templateColumns={'repeat(12, 1fr)'} gridGap={'20px'} mt={'84px'}>
                <GridItem gridColumn={'span 7'}>
                    <Box maxH={'700px'}
                         overflow={'hidden'}
                         position={'relative'}
                         sx={{
                             '.swiper': {position: 'initial'},
                             '.swiper-pagination-vertical': {
                                 left: 0,
                                 right: 'auto'
                             },
                             '.swiper-pagination-bullet-active': {
                                 bg: primary500
                             }
                         }}>
                        <Swiper direction={'vertical'}
                                height={700}
                                pagination={{
                                    "clickable": true
                                }}
                        >
                            {product.images.slice(1).map((image: string) => {
                                return (
                                    <SwiperSlide key={image}>
                                        <Image
                                            key={image}
                                            width={'100%'}
                                            pointerEvents={'none'}
                                            src={image}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
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
                                    max={+product.__supply.remaningSupply}
                                    value={cartItem.quantity}
                                    onChange={(qty) => cartService.changeProductQty(product, qty)}
                                />

                                <Text fontSize={'16px'} color={'alert'} textTransform={'uppercase'}
                                      letterSpacing={'0.07em'}>{+product.__supply.remaningSupply || +product.__supply.maxSupply} pieces
                                    left</Text>
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
                                    isDisabled={+product.__supply.remaningSupply <= +cartService.getProductCartItem(product).quantity}
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
        </Box>
    )
})