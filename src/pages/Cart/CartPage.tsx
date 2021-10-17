import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Input, Stack, Text} from "@chakra-ui/react";
import {QtyControl} from "../../components/QtyControl";
import {IconClose} from "../../components/icons/IconClose";
import {useService} from "../../core/decorators/service";
import {CartService} from "../../services/CartService";
import {IProduct} from "../../interfaces";
import {processImgUrl} from "../../utils/imageUrl";

export const CartPage = observer(function CartPage() {
    const cartService = useService(CartService)


    return (
        <Stack spacing={'32px'}>
            <Heading as={'h1'} fontSize={70} textTransform={'uppercase'} fontWeight={'bold'} color={'basic.500'}
                     letterSpacing={'0.05em'}>My Cart</Heading>

            {cartService.productsCount === 0 && (
                <Box>
                    <Text textTransform={'uppercase'} fontSize={18} letterSpacing={'0.02em'}>Cart is empty</Text>
                </Box>
            )}

            {cartService.productsCount !== 0 && (
                <Grid templateColumns={'repeat(12, 1fr)'} gridGap={'32px'}>
                    <GridItem gridColumn={'span 8'}>


                        {[...cartService.cart.values()]
                            .map(({product, quantity}) =>
                                <CartItem
                                    key={product._id}
                                    product={product}
                                    quantity={quantity}
                                />
                            )
                        }
                    </GridItem>

                    <GridItem gridColumn={'span 4'}>
                        <Box p={'16px'} width={'100%'} justifyContent={'flex-start'} border={'1px solid'}
                             borderColor={'basic.500'}>
                            <Flex>
                                <Text>For {cartService.productsCount} items</Text>
                                <Text
                                    ml={'auto'}
                                    fontSize={18}
                                    textTransform={'uppercase'}
                                    fontWeight={'bold'}
                                    color={'basic.500'}
                                >
                                    {cartService.total / 100} $
                                </Text>
                            </Flex>

                            <HStack spacing={'12px'} mt={'20px'}>
                                <Input placeholder={'Enter a promo code'}/>
                                <Button textTransform={'uppercase'} w={'89px'}>Use</Button>
                            </HStack>

                            <Flex mt={'36px'}>
                                <Text>Total cost</Text>

                                <Stack spacing={'10px'} ml={'auto'}>
                                    <Text as={'span'}
                                          fontSize={'25px'}
                                          fontWeight={'bold'}
                                          letterSpacing={'0.02em'}
                                          lineHeight={1}
                                          color={'basic.500'}>
                                        {cartService.totalAfterDiscount / 100} $
                                    </Text>

                                    {/*<Text fontSize={'12px'} color={'alert'} textTransform={'uppercase'}*/}
                                    {/*      letterSpacing={'0.07em'}>Savings 1 000 $</Text>*/}
                                </Stack>
                            </Flex>

                            <Button textTransform={'uppercase'} w={'100%'} mt={'32px'}>Checkout</Button>
                        </Box>
                    </GridItem>
                </Grid>
            )}
        </Stack>
    )
})

function CartItem({product, quantity}: { product: IProduct, quantity: number }) {
    const cartService = useService(CartService)


    return (
        <HStack width={'100%'} justifyContent={'flex-start'}>
            <Flex p={'16px'} width={'100%'} justifyContent={'flex-start'} borderTop={'1px solid'}
                  borderColor={'basic.500'}>
                <Image boxSize={'265px'} height={'auto'} pointerEvents={'none'} src={processImgUrl(product.images[1])}
                       sx={{mixBlendMode: 'multiply'}}/>
                <Stack>
                    <Text as={'h3'} fontWeight={'bold'} fontSize={25} textTransform={'uppercase'}
                          letterSpacing={'0.02em'}>{product.name}</Text>

                    <Text fontSize={'12px'} color={'alert'} textTransform={'uppercase'}
                          letterSpacing={'0.07em'}>5 pieces left</Text>

                    <QtyControl
                        value={quantity}
                        onInc={() => cartService.add(product)}
                        onDec={() => cartService.remove(product)}
                    />
                </Stack>

                <HStack marginLeft={'auto'} spacing={'46px'} marginTop={'16px'} alignItems={'flex-start'}>
                    <Stack>
                        <Text as={'span'}
                              fontSize={'15px'}
                              color={'basic.500'}
                              lineHeight={1}
                              textDecoration={'line-through'}>
                            1 458 $
                        </Text>
                        <Text as={'span'}
                              fontSize={'25px'}
                              fontWeight={'bold'}
                              letterSpacing={'0.02em'}
                              lineHeight={1}
                              color={'basic.500'}>
                            {product.priceUSD / 100} $
                        </Text>
                        <Text as={'span'}
                              fontSize={'15px'}
                              color={'basic.500'}
                              lineHeight={1}>
                            {quantity} x {product.priceUSD / 100} $
                        </Text>
                    </Stack>

                    <Button variant={'square'} onClick={() => cartService.clear(product)}>
                        <IconClose/>
                    </Button>
                </HStack>
            </Flex>
        </HStack>
    )
}

