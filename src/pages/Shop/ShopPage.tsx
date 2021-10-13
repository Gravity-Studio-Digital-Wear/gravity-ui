import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Stack} from "@chakra-ui/react";
import {Navigation} from "./Navigation";
import {ListNav} from "./components/ListNav";
import {ProductList} from "./components/ProductList";


export const ShopPage = observer(function ShopPage() {


    return (
        <Box>
            <Stack spacing={9}>
                <Navigation/>
                <ListNav/>
            </Stack>

            <ProductList/>
        </Box>
    )
})