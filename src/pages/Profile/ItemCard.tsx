import {IProduct, ITicket} from "../../interfaces";
import {Box, Button, Image, Stack, Text} from "@chakra-ui/react";
import * as React from "react";
import {observer} from "mobx-react";
import {TicketStatus} from "./TicketStatus";
import {ComingSoon} from "../../components/icons/ComingSoon";

export const ItemCard = observer(function ItemCard(props: { product: IProduct, ticket: ITicket, onClick: () => void }) {
    const {product, onClick, ticket} = props;
    return (
        <Stack display={'flex'}
               justifyContent={'flex-start'}
               position={'relative'}
               cursor={'pointer'}
               className={'g-card'}
               onClick={onClick}
        >
            <Box position={'absolute'} top={4} right={4}>
                <TicketStatus status={ticket.status}/>
            </Box>

            <Image
                boxSize="362px"
                objectFit="contain"
                src={product.images[1]}
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
                <Stack spacing={'16px'}>
                    <Button isDisabled={ticket.status !== 'NEW'} colorScheme={'primary'} textTransform={'uppercase'} w={'100%'}>
                        Wear
                    </Button>

                    {ticket.status === 'DONE' && (
                        <Box position={'relative'}>
                            <Button isDisabled={true} variant={'outline'} colorScheme={'primary'}
                                    textTransform={'uppercase'} w={'100%'}>
                                Resell
                            </Button>
                            <Box position={'absolute'} top={'-24px'} right={'-10px'}>
                                <ComingSoon/>
                            </Box>
                        </Box>
                    )}
                </Stack>
            </Box>
        </Stack>
    )
})