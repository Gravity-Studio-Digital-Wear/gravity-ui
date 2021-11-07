import * as React from 'react';
import {Box, Button, Grid, HStack, Image, Stack, Text} from "@chakra-ui/react";
import {IconCart} from "../../../components/icons/IconCart";
import {IProduct} from "../../../interfaces";
import {processImgUrl} from "../../../utils/imageUrl";
import {useService} from "../../../core/decorators/service";
import {CartService} from "../../../services/CartService";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {Routes} from "../../../app/routes";
import {formatPrice} from "../../../utils/price";


export const Wrapper = (props: React.PropsWithChildren<{}>) => {
    return (
        <Grid templateColumns={'repeat(4, 1fr)'} gridGap={'32px'} gridRowEnd={''}>
            {props.children}
        </Grid>
    )
}

export const Card = observer(function Card(props: IProduct & { onClickCard: () => void, onClickAdd: () => void }) {
    const isInCart = useService(CartService).getProductCartItem(props).quantity !== 0;

    const history = useHistory()

    const goToCart = () => {
        history.push(Routes.cart)
    }


    return (
        <Stack display={'flex'}
               justifyContent={'flex-end'}
               position={'relative'}
               cursor={'pointer'}
               className={'g-card'}
               onClick={props.onClickCard}
        >
            <Image
                boxSize="362px"
                objectFit="contain"
                src={processImgUrl(props.images[1])}
                sx={{
                    mixBlendMode: 'multiply'
                }}
            />

            <Stack left={0} bottom={'10px'} spacing={0} position={'relative'}>
                <Text textTransform={'uppercase'}
                      fontWeight={'bold'}
                      fontSize={25}
                      letterSpacing={'0.02em'}
                >
                    {props.name}
                </Text>


                <HStack spacing={'11px'} alignItems={'flex-end'} textTransform={'uppercase'}>
                    {/*<Text as={'span'}
                          fontSize={'15px'}
                          lineHeight={1}
                          textDecoration={'line-through'}>
                        {Math.round(props.priceUSD + (props.priceUSD * 0.5)) / 100} $
                    </Text>*/}
                    <Text as={'span'}
                          fontSize={'21px'}
                          lineHeight={1}
                          color={'alert'}>
                        {formatPrice(props.rentPriceUSD)} $
                    </Text>
                </HStack>


                {/*<Text fontSize={12}*/}
                {/*      lineHeight={1}*/}
                {/*      letterSpacing={'0.07em'}*/}
                {/*      color={'alert'}*/}
                {/*      position={'absolute'}*/}
                {/*      bottom={0}*/}
                {/*      right={0}*/}
                {/*      textTransform={'uppercase'}>*/}
                {/*    {+props.__supply.remaningSupply !== 0 ? `${props.__supply.remaningSupply}/${props.__supply.maxSupply} pieces left` : `SOLD OUT`}*/}
                {/*</Text>*/}
            </Stack>

            <Box>
                {isInCart
                    ? (
                        <Button
                            variant={'outline'}
                            textTransform={'uppercase'}
                            onClick={(e) => {
                                e.stopPropagation()
                                goToCart()
                            }}
                            w={'100%'}>
                            Go to cart
                        </Button>
                    )
                    : (
                        <Button
                            // isDisabled={+props.__supply.remaningSupply === 0}
                            leftIcon={<IconCart/>}
                            variant={'solid'}
                            textTransform={'uppercase'}
                            onClick={(e) => {
                                e.stopPropagation()
                                props.onClickAdd()
                            }}
                            w={'100%'}>
                            Add to cart
                        </Button>
                    )}
            </Box>
        </Stack>
    )
})


export const GridListView = {Wrapper, Card};