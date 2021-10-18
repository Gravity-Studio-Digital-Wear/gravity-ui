import {IProduct} from "../../interfaces";
import {Box, Button, Image, Stack, Text} from "@chakra-ui/react";
import * as React from "react";
import {observer} from "mobx-react";

export const ItemCard = observer(function ItemCard({product, onClick}: { product: IProduct, onClick: () => void }) {

    return (
        <Stack display={'flex'}
               justifyContent={'flex-end'}
               position={'relative'}
               cursor={'pointer'}
               className={'g-card'}
               onClick={onClick}
        >
            <Image
                boxSize="362px"
                objectFit="contain"
                src="/img_3.png"
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
                    {product.name}
                </Text>
            </Stack>

            <Box>
                <Button colorScheme={'primary'} textTransform={'uppercase'} w={'100%'}>
                    Wear
                </Button>
            </Box>
        </Stack>
    )
})