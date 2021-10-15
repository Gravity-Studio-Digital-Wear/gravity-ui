import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Input, Stack, Text} from "@chakra-ui/react";
import {QtyControl} from "../../components/QtyControl";

export const CartPage = observer(function CartPage() {
    return (
        <Stack spacing={'32px'}>
            <Heading as={'h1'} fontSize={70} textTransform={'uppercase'} fontWeight={'bold'} color={'basic.500'}
                     letterSpacing={'0.05em'}>My Cart</Heading>

            <Grid templateColumns={'repeat(12, 1fr)'} gridGap={'32px'}>
                <GridItem gridColumn={'span 8'}>
                    <CartItem/>
                    <CartItem/>
                </GridItem>

                <GridItem gridColumn={'span 4'}>
                    <Box p={'16px'} width={'100%'} justifyContent={'flex-start'} border={'1px solid'} borderColor={'basic.500'}>
                        <Flex>
                            <Text>For 3 items</Text>
                            <Text ml={'auto'} fontSize={18}  textTransform={'uppercase'} fontWeight={'bold'} color={'basic.500'}>3 783 $</Text>
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
                                    1 283 $
                                </Text>

                                <Text fontSize={'12px'} color={'alert'} textTransform={'uppercase'}
                                      letterSpacing={'0.07em'}>Savings 1 000 $</Text>
                            </Stack>
                        </Flex>

                        <Button textTransform={'uppercase'} w={'100%'} mt={'32px'}>Checkout</Button>
                    </Box>
                </GridItem>
            </Grid>
        </Stack>
    )
})

function CartItem() {
    return (
        <HStack width={'100%'} justifyContent={'flex-start'}>
            <Flex p={'16px'} width={'100%'} justifyContent={'flex-start'} borderTop={'1px solid'} borderColor={'basic.500'}>
                <Image boxSize={'265px'} height={'auto'} pointerEvents={'none'} src={'/img_4_full.png'}
                       sx={{mixBlendMode: 'multiply'}}/>
                <Stack>
                    <Text as={'h3'} fontWeight={'bold'} fontSize={25} textTransform={'uppercase'}
                          letterSpacing={'0.02em'}>Fringe</Text>

                    <Text fontSize={'12px'} color={'alert'} textTransform={'uppercase'}
                          letterSpacing={'0.07em'}>5 pieces left</Text>

                    <QtyControl/>
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
                            1 283 $
                        </Text>
                        <Text as={'span'}
                              fontSize={'15px'}
                              color={'basic.500'}
                              lineHeight={1}>
                            2 x 641$
                        </Text>
                    </Stack>


                    <Button
                        bg={'transparent'}
                        border={'1px solid'}
                        borderColor={'primary.500'}
                        width={'34px'}
                        height={'34px'}
                        p={0}
                        minWidth={'auto'}>
                        <CloseIcon/>
                    </Button>
                </HStack>
            </Flex>
        </HStack>
    )
}

function CloseIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M6 5.1248L10.375 0.749778L11.25 1.62478L6.875 5.9998L11.25 10.3748L10.375 11.2498L6 6.87481L1.62498 11.2498L0.749974 10.3748L5.125 5.9998L0.749974 1.62478L1.62498 0.749777L6 5.1248Z"
                  fill="#523774"/>
        </svg>
    )
}