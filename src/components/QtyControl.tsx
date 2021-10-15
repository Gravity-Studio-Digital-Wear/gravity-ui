import * as React from 'react';
import {Box, HStack, Input} from "@chakra-ui/react";


export function QtyControl() {
    return (
        <HStack>
            <Box cursor={'pointer'}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="34" height="34" rx="17" fill="#523774"/>
                    <path
                        d="M18.5625 17.3125H24.1875V18.6875H18.5625L17.4375 18.6875H11.8125V17.3125H17.4375H18.5625Z"
                        fill="white"/>
                    <rect x="1" y="1" width="34" height="34" rx="17" stroke="#39373E"/>
                </svg>
            </Box>

            <Input defaultValue={'0'}
                   width={'74px'}
                   borderRadius={0}
                   bg={'white'}
                   border={'1px solid'}
                   borderColor={'basic.500'}
                   textAlign={'center'}
            />

            <Box cursor={'pointer'}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="34" height="34" rx="17" fill="#523774"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M17.3125 17.3125V10.4375H18.6875V17.3125H25.5625V18.6875H18.6875V25.5625H17.3125V18.6875H10.4375V17.3125H17.3125Z"
                          fill="white"/>
                    <rect x="1" y="1" width="34" height="34" rx="17" stroke="#39373E"/>
                </svg>
            </Box>
        </HStack>
    )
}