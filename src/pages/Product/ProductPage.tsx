import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Input, Link, Stack, Text} from "@chakra-ui/react";
import {ChakraCarousel} from "../../components/Carousel";
import {IconCart} from "../../components/icons/IconCart";


export const ProductPage = observer(function ProductPage() {
    const images = ['img_4_full.png', 'img_4_full.png', 'img_4_full.png'];

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
                    <Heading as={'h1'} fontSize={43} textTransform={'uppercase'} letterSpacing={'0.01em'}>FRINGE</Heading>

                    <Text fontSize={'16px'}>This is a sample description about this product and that it’s digital.
                        And this is how our process works when you buy this item.</Text>

                    <Link color={'primary.500'}  textTransform={'uppercase'} letterSpacing={'0.07em'}>
                        <Text as={'span'} borderBottom={'1px solid'} borderColor={'primary.500'}>How to wear it?</Text>
                    </Link>

                    <HStack>
                        <HStack>
                            <Box cursor={'pointer'}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="34" height="34" rx="17" fill="#523774"/>
                                    <path d="M18.5625 17.3125H24.1875V18.6875H18.5625L17.4375 18.6875H11.8125V17.3125H17.4375H18.5625Z" fill="white"/>
                                    <rect x="1" y="1" width="34" height="34" rx="17" stroke="#39373E"/>
                                </svg>
                            </Box>

                            <Input value={'0'}
                                   width={'74px'}
                                   borderRadius={0}
                                   bg={'white'}
                                   border={'1px solid'}
                                   borderColor={'basic.500'}
                                   textAlign={'center'}
                            />

                            <Box cursor={'pointer'}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="34" height="34" rx="17" fill="#523774"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3125 17.3125V10.4375H18.6875V17.3125H25.5625V18.6875H18.6875V25.5625H17.3125V18.6875H10.4375V17.3125H17.3125Z" fill="white"/>
                                    <rect x="1" y="1" width="34" height="34" rx="17" stroke="#39373E"/>
                                </svg>
                            </Box>
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
                                1 283 $
                            </Text>
                        </Stack>

                        <Box marginLeft={'auto'}>
                            <Button
                                leftIcon={<IconCart/>}
                                colorScheme={'primary'}
                                textTransform={'uppercase'}
                                w={'100%'}>
                                Add To Cart
                            </Button>
                        </Box>
                    </Flex>
                </Stack>

            </GridItem>
        </Grid>
    )
})