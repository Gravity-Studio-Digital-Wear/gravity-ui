import {IProduct} from "../../interfaces";
import {Box, Button, HStack, Image, Stack, Text} from "@chakra-ui/react";
import {IconCart} from "../../components/icons/IconCart";
import * as React from "react";

export function ItemCard(props: IProduct & {onClick: () => void}) {
    return (
        <Stack display={'flex'}
               justifyContent={'flex-end'}
               position={'relative'}
               cursor={'pointer'}
               className={'g-card'}
               onClick={props.onClick}
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
                    {props.name}
                </Text>
            </Stack>

            <AddCart/>
        </Stack>
    )
}

function AddCart() {
    return (
        <Box>
            <Button leftIcon={<IconCart/>} colorScheme={'primary'} textTransform={'uppercase'} w={'100%'}>Add to cart</Button>
        </Box>
    )
}