import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Flex, HStack, Text} from "@chakra-ui/react";
import {ViewToggle} from "./ViewToggle";

export const ListNav = observer(function ListNav() {
    return (
        <Flex justify={'space-between'} align={'center'} position={'relative'}>
            <Filter/>

            <Flex position={'absolute'} zIndex={0} width={'100%'} height={'100%'} justifyContent={'center'} align={'center'}>
                <Text textTransform={'uppercase'}>12 items</Text>
            </Flex>

            <HStack spacing={10} zIndex={1}>
                <Sort/>
                <ViewToggle/>
            </HStack>
        </Flex>
    )
})


function Filter() {
    return (
        <Flex zIndex={1}>
            <Box>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6 12.9844V11.0156H18V12.9844H6ZM3 6H21V8.01562H3V6ZM9.98438 18V15.9844H14.0156V18H9.98438Z"
                        fill="#39373E"/>
                </svg>
            </Box>

            <Text as={'span'} textTransform={'uppercase'}>Filter</Text>
        </Flex>
    )
}

function Sort() {
    return (
        <Flex grow={1}>
            <Text as={'span'} whiteSpace={'nowrap'} textTransform={'uppercase'}>Sort By</Text>

            <Box>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.70805 4L12.4161 7.76302H9.62416V14.4036H7.79195V7.76302H5L8.70805 4ZM15.2081 17.237H18L14.2919 21L10.5839 17.237H13.3758V10.5964H15.2081V17.237Z"
                        fill="#39373E"/>
                </svg>
            </Box>
        </Flex>

    )
}
