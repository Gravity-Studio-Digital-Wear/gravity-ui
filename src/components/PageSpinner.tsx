import * as React from 'react';
import {Flex, Spinner} from "@chakra-ui/react";

export function PageSpinner() {
    return (
        <Flex minW={'350px'} height={'100%'} justify={'center'} align={'center'} mt={10}>
            <Spinner size={'xl'}/>
        </Flex>
    )
}