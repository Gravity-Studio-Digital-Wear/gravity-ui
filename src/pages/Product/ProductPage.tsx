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
    Link,
    Stack,
    Text,
    useMediaQuery,
    useToken
} from "@chakra-ui/react";
import {IconCart} from "../../components/icons/IconCart";
import {QtyControl} from "../../components/QtyControl";
import {useService} from "../../core/decorators/service";
import {WarehouseStore} from "../../stores/WarehouseStore";
import {RouteComponentProps} from "react-router";
import {PageSpinner} from "../../components/PageSpinner";
import {CartService} from "../../services/CartService";
import {formatPrice} from "../../utils/price";
import SwiperCore, {Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {Link as RouterLink} from "react-router-dom";
import {Routes} from "../../app/routes";
import {IconBack} from "../../components/icons/IconBack";
import {processImgUrl} from "../../utils/imageUrl";
import {TransparentVideo} from "../../components/TransparentVideo";
import {GravityApplication} from "../../app/Application";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Navigation, Keyboard]);


export const ProductPage = observer(function ProductPage({match}: RouteComponentProps<{ id: string }>) {
    const warehouseStore = useService(WarehouseStore)
    const cartService = useService(CartService)
    const app = useService(GravityApplication)
    const [primary500, white] = useToken(
        'colors',
        ['primary.500', 'white']
    )

    const [md] = useToken(
        'breakpoints',
        ['md']
    );

    const [isLargerThanMd] = useMediaQuery(`(min-width: ${md})`)


    React.useEffect(() => {
        warehouseStore.productItem.request(match.params.id)
    }, [])


    if (warehouseStore.productItem.requestStatus !== 'success' && !warehouseStore.productItem.result) {
        return <PageSpinner/>
    }

    const product = warehouseStore.productItem.result

    const cartItem = cartService.getProductCartItem(product)

    const images = app.isSafari ? product.images.slice(1) : product.images;

    return (
        <Box px={{base: '17px', md: 0}}>
            <Flex>
                <Link as={RouterLink} to={{pathname: Routes.main}} fontSize={18} textTransform={'uppercase'}
                      textDecoration={'none'} display={'flex'} alignItems={'center'}>
                    <IconBack/>
                    <Text as={'span'} ml={'12px'}>Back to shopping</Text>
                </Link>
            </Flex>


            <Grid templateColumns={'repeat(12, 1fr)'} gridGap={'20px'} mt={{base: '33px', md: '84px'}}>
                <GridItem gridColumn={{base: 'span 12', md: 'span 7'}}>
                    <Box maxH={{base: '380px', md: '700px'}}
                         overflow={'hidden'}
                         position={'relative'}
                         sx={{
                             '.swiper-container': {position: 'initial'},
                             '.swiper-pagination-bullets': {
                                 left: 0,
                                 right: 'auto'
                             },
                             '.swiper-pagination-bullet': {
                                 w: isLargerThanMd ? '6px' : '24px',
                                 h: isLargerThanMd ? '24px' : '6px',
                                 borderRadius: 0,
                                 right: 'auto',
                                 bg: 'linear-gradient(180deg, #7B61FF 0%, #523774 94.9%)'
                             },
                             '.swiper-pagination-bullet-active': {
                                 bg: primary500
                             }
                         }}>
                        <Swiper
                            direction={isLargerThanMd ? 'vertical' : 'horizontal'}
                            height={700}
                            slidesPerView={1}
                            mousewheel
                            pagination={{
                                "clickable": true
                            }}
                        >
                            {images.map((image: string) => {
                                return (
                                    <SwiperSlide key={image}>
                                        {image.slice(-4) === 'webm'
                                            ? (
                                                <figure>
                                                    <video
                                                        playsInline muted
                                                        onMouseOver={(event) => (event.target as any).play()}
                                                        onMouseOut={event => {
                                                            (event.target as any).pause();
                                                            (event.target as any).currentTime = 0
                                                        }}
                                                    >
                                                        <source src={processImgUrl(image)} type="video/webm"/>
                                                    </video>
                                                </figure>
                                            )
                                            : (
                                                <Image
                                                    key={image}
                                                    width={'100%'}
                                                    src={image}
                                                />
                                            )}
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Box>
                </GridItem>
                <GridItem gridColumn={{base: 'span 12', md: 'span 5'}}>
                    <Stack
                        spacing={'16px'}
                        bg={{base: 'white', md: 'transparent'}}
                        mx={{base: '-17px', md: 0}}
                        p={{base: '16px', md: 0}}
                        pb={{base: '84px', md: 0}}
                    >
                        <Heading as={'h1'} fontSize={43} textTransform={'uppercase'}
                                 letterSpacing={'0.01em'}>{product.name}</Heading>

                        {!isLargerThanMd && (
                            <>
                                <Flex width={'100%'} spacing={'32px'}>
                                    <HStack grow={1} spacing={'10px'} alignItems={'flex-end'}
                                            textTransform={'uppercase'}>
                                        {/*<Text as={'span'}
                                              fontSize={'15px'}
                                              color={'alert'}
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
                                            {formatPrice(product.priceUSD)} $
                                        </Text>
                                    </HStack>

                                    <Text fontSize={'16px'}
                                          ml={'auto'}
                                          color={'alert'}
                                          textTransform={'uppercase'}
                                          letterSpacing={'0.07em'}>
                                        {+product.__supply.remaningSupply !== 0 ? `${product.__supply.remaningSupply}/${product.__supply.maxSupply} pieces left` : `SOLD OUT`}
                                    </Text>
                                </Flex>

                                <QtyControl
                                    max={+product.__supply.remaningSupply}
                                    value={cartItem.quantity}
                                    onChange={(qty) => cartService.changeProductQty(product, qty)}
                                />

                                <Box>
                                    <Button
                                        isDisabled={+product.__supply.remaningSupply <= +cartService.getProductCartItem(product).quantity}
                                        leftIcon={<IconCart/>}
                                        colorScheme={'primary'}
                                        textTransform={'uppercase'}
                                        onClick={() => cartService.add(product)}
                                        w={'100%'}
                                        maxW={'100%'}
                                    >
                                        Add To Cart
                                    </Button>
                                </Box>

                                <Text fontSize={'16px'}>
                                    {product.description}
                                </Text>

                                <Link href={Routes.howItWorks} color={'primary.500'} textTransform={'uppercase'}
                                      letterSpacing={'0.07em'}>
                                    <Text as={'span'} borderBottom={'1px solid'} borderColor={'primary.500'}>How to wear
                                        it?</Text>
                                </Link>
                            </>
                        )}

                        {isLargerThanMd && (
                            <>
                                <Text fontSize={'16px'}>
                                    {product.description}
                                </Text>

                                <Link href={Routes.howItWorks} color={'primary.500'} textTransform={'uppercase'}
                                      letterSpacing={'0.07em'}>
                                    <Text as={'span'} borderBottom={'1px solid'} borderColor={'primary.500'}>How to wear
                                        it?</Text>
                                </Link>

                                <HStack>
                                    <HStack spacing={'32px'}>
                                        <QtyControl
                                            max={+product.__supply.remaningSupply}
                                            value={cartItem.quantity}
                                            onChange={(qty) => cartService.changeProductQty(product, qty)}
                                        />

                                        <Text fontSize={'16px'} color={'alert'} textTransform={'uppercase'}
                                              letterSpacing={'0.07em'}>
                                            {+product.__supply.remaningSupply !== 0 ? `${product.__supply.remaningSupply}/${product.__supply.maxSupply} pieces left` : `SOLD OUT`}
                                        </Text>
                                    </HStack>
                                </HStack>

                                <Flex w={'100%'} alignItems={'flex-end'}>
                                    <Stack grow={1} spacing={'0'} alignItems={'flex-start'} textTransform={'uppercase'}>
                                        {/*<Text as={'span'}
                                              fontSize={'15px'}
                                              color={'alert'}
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
                            </>
                        )}
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    )
})