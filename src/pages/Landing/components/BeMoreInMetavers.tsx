import {useHistory} from "react-router-dom";
import {Box, Button, Stack, Text} from "@chakra-ui/react";
import {Routes} from "../../../app/routes";
import * as React from "react";

export function BeMore() {
    const history = useHistory();

    return (
        <Box

            position={'relative'}
            height={'587px'}
            width={'100%'}
            bg={'conic-gradient(from -8.13deg at 7.03% 80.47%, #78B2FA -16.65deg, #B89DDA 79.78deg, #F07DAD 180.82deg, #78B2FA 343.35deg, #B89DDA 439.78deg)'}
        >
            <Box
                position={'absolute'}
                width={'100%'}
                height={'100%'}
                bg={'rgba(255, 255, 255, 0.2);'}
                backdropFilter={'blur(134px)'}

                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Stack spacing={'30px'}>
                    <Text textAlign={'center'} textTransform={'uppercase'} fontSize={{base: 53, xl: 80}}
                          fontWeight={'700'} color={'white'}
                          letterSpacing={'0.05em'} lineHeight={1.1}>Be more in the <br/>Metaverse</Text>

                    <Box justifyContent={'center'} display={'flex'}>
                        <Button onClick={() => history.push(Routes.shop)}>Discover now</Button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}