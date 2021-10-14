import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Spinner, Stack} from "@chakra-ui/react";
import {Navigation} from "./Navigation";
import {ListNav} from "./components/ListNav";
import {ProductList} from "./components/ProductList";
import {useService} from "../../core/decorators/service";
import {WarehouseStore} from "../../stores/WarehouseStore";


export const ShopPage = observer(function ShopPage() {
    const products = useService(WarehouseStore).products

    React.useEffect(() => {
        products.fetch()
    }, [])


    return (
        <Box>
            <Stack spacing={9}>
                <Navigation/>
                <ListNav/>
            </Stack>

            {products.isPending && <Spinner/>}
            {products.isSuccess && <ProductList/>}
        </Box>
    )
})