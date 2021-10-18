import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Stack} from "@chakra-ui/react";
import {Navigation} from "./Navigation";
import {ListNav} from "./components/ListNav";
import {ProductList} from "./components/ProductList";
import {useService} from "../../core/decorators/service";
import {WarehouseStore} from "../../stores/WarehouseStore";
import {PageSpinner} from "../../components/PageSpinner";


export const ShopPage = observer(function ShopPage() {
    const products = useService(WarehouseStore).products

    React.useEffect(() => {
        products.request()
    }, [])


    return (
        <Box>
            <Stack spacing={9}>
                <Navigation/>
                <ListNav count={products.result?.length}/>
            </Stack>

            {products.isPending && <PageSpinner/>}
            {products.isSuccess && <ProductList/>}
        </Box>
    )
})