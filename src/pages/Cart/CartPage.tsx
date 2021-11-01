import * as React from 'react';
import {observer} from "mobx-react";
import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Input,
    Link,
    Stack,
    Text,
    useMediaQuery,
    useToken
} from "@chakra-ui/react";
import {QtyControl} from "../../components/QtyControl";
import {IconClose} from "../../components/icons/IconClose";
import {useService} from "../../core/decorators/service";
import {CartService} from "../../services/CartService";
import {IProduct} from "../../interfaces";
import {processImgUrl} from "../../utils/imageUrl";
import {formatPrice} from "../../utils/price";
import {Link as RouterLink, useHistory} from "react-router-dom";
import {Routes} from "../../app/routes";
import {IconBack} from "../../components/icons/IconBack";

export const CartPage = observer(function CartPage() {
    const cartService = useService(CartService)

    const [md] = useToken(
        'breakpoints',
        ['md']
    );

    const [isLargerThanMd] = useMediaQuery(`(min-width: ${md})`)

    const CartCmp = isLargerThanMd ? CartItem : CartItemMobile;

    return (
        <Stack spacing={'32px'} p={{base: '17px', md: 0}}>
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
                    <Text as={'span'} ml={'12px'}>Back to shopping</Text>
                </Link>
            </Flex>

            <Box position={'relative'}>
                {cartService.productsCount === 0 && (
                    <Flex width={'100%'} position={'absolute'} justify={'flex-end'} align={'center'}>
                        <Image src={'/empty_cart.png'} width={'360px'}/>
                    </Flex>
                )}

                <Stack spacing={'32px'}>
                    <Heading as={'h1'} fontSize={{base: 42, md: 70}} textTransform={'uppercase'} fontWeight={'bold'}
                             color={'basic.500'}
                             letterSpacing={'0.05em'}>My Cart</Heading>

                    {cartService.productsCount === 0 && <CartEmpty/>}
                    {cartService.productsCount !== 0 && (
                        <Grid templateColumns={'repeat(12, 1fr)'} gridGap={{md: '32px'}}>
                            <GridItem gridColumn={{base: 'span 12', md: 'span 8'}}>
                                {[...cartService.cart.values()]
                                    .map(({product, quantity}) =>
                                        <CartCmp
                                            key={product._id}
                                            product={product}
                                            quantity={quantity}
                                        />
                                    )
                                }
                            </GridItem>

                            <GridItem gridColumn={{base: 'span 12', md: 'span 4'}}>
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


                                    <Button
                                        textTransform={'uppercase'}
                                        w={'100%'}
                                        mt={'32px'}
                                        type={'submit'}
                                        onClick={() => cartService.checkout()}
                                    >
                                        Pay with a card (fiat)
                                    </Button>
                                    <Box w={'100%'} textAlign={'center'}>
                                        <Text mt={'12px'} lineHeight={'12px'}>
                                        or
                                        </Text>
                                    </Box>
                                    <a href="https://opensea.io/GravityTheStudioShop" target="_blank">
                                    <Button
                                        textTransform={'uppercase'}
                                        w={'100%'}
                                        mt={'12px'}
                                    >
                                        Buy on opensea (crypto)
                                    </Button>
                                    </a>
                                </Box>
                            </GridItem>
                        </Grid>
                    )}
                </Stack>
            </Box>
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
                          letterSpacing={'0.07em'}>
                        {+product.__supply.remaningSupply !== 0 ? `${product.__supply.remaningSupply}/${product.__supply.maxSupply} pieces left` : `SOLD OUT`}
                    </Text>

                    <QtyControl
                        value={quantity}
                        max={+product.__supply.remaningSupply}
                        onChange={(qty) => cartService.changeProductQty(product, qty)}
                    />
                </Stack>

                <HStack marginLeft={'auto'} spacing={'46px'} marginTop={'16px'} alignItems={'flex-start'}>
                    <Stack>
                        {/*<Text as={'span'}
                              fontSize={'15px'}
                              color={'basic.500'}
                              lineHeight={1}
                              textDecoration={'line-through'}>
                            {formatPrice(product.priceUSD * 1.5)} $
                        </Text>*/}
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

function CartItemMobile({product, quantity}: { product: IProduct, quantity: number }) {
    const cartService = useService(CartService)

    return (
        <HStack width={'100%'} justifyContent={'flex-start'}>
            <Stack p={'16px'}
                   width={'100%'}
                   spacing={'24px'}
                   justifyContent={'flex-start'}
                   borderTop={'1px solid'}
                   borderColor={'basic.500'}>

                <HStack alignItems={'flex-start'} width={'100%'}>
                    <Image boxSize={'84px'} height={'auto'} pointerEvents={'none'}
                           src={processImgUrl(product.images[1])}
                           sx={{mixBlendMode: 'multiply'}}/>

                    <Stack width={'100%'}>
                        <Text as={'h3'}
                              fontWeight={'bold'}
                              maxH={'100px'}
                              fontSize={25}
                              pr={'5%'}
                              whiteSpace={'normal'}
                              textTransform={'uppercase'}
                              letterSpacing={'0.02em'}>{product.name}</Text>

                        <Text fontSize={'12px'} color={'alert'} textTransform={'uppercase'}
                              letterSpacing={'0.07em'}>
                            {+product.__supply.remaningSupply !== 0 ? `${product.__supply.remaningSupply} pieces left` : `SOLD OUT`}
                        </Text>

                        <HStack spacing={'16px'} alignItems={'flex-start'}>
                            <Stack spacing={'8px'}>
                                {/*<Text as={'span'}
                                      pt={'5px'}
                                      fontSize={'15px'}
                                      color={'basic.500'}
                                      lineHeight={1}
                                      textDecoration={'line-through'}>
                                    {formatPrice(product.priceUSD * 1.5)} $
                                </Text>*/}
                                <Text as={'span'}
                                      fontSize={'15px'}
                                      color={'basic.500'}
                                      lineHeight={1}>
                                    {quantity} x {product.priceUSD / 100} $
                                </Text>
                            </Stack>

                            <Text as={'span'}
                                  fontSize={'25px'}
                                  fontWeight={'bold'}
                                  letterSpacing={'0.02em'}
                                  lineHeight={1}
                                  color={'basic.500'}>
                                {product.priceUSD / 100} $
                            </Text>
                        </HStack>
                    </Stack>


                    <Box grow={1}>
                        <Button variant={'square'} marginLeft={'auto'} onClick={() => cartService.clear(product)}>
                            <IconClose/>
                        </Button>
                    </Box>
                </HStack>

                <Box mt={'20px'}>
                    <QtyControl
                        value={quantity}
                        max={+product.__supply.remaningSupply}
                        onChange={(qty) => cartService.changeProductQty(product, qty)}
                    />
                </Box>
            </Stack>
        </HStack>
    )
}


function CartEmpty() {
    const history = useHistory()

    return (
        <Stack spacing={'16px'}>
            <Text fontSize={'16px'}>You have nothing in your shopping cart. Continue Shopping</Text>
            <Button w={'269px'} letterSpacing={'0.02em'} onClick={() => history.push(Routes.main)}>Go to
                shopping</Button>
        </Stack>
    )
}