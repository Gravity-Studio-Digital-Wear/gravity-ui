import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Stack} from "@chakra-ui/react";
import {Navigation} from "./Navigation";
import {ListNav} from "./components/ListNav";
import {ProductList} from "./components/ProductList";
import {useService} from "../../core/decorators/service";
import {WarehouseStore} from "../../stores/WarehouseStore";
import {PageSpinner} from "../../components/PageSpinner";
import {RouteChildrenProps} from "react-router-dom";


export const ShopPage = observer(function ShopPage({location}: RouteChildrenProps<{}, { refresh: boolean }>) {
    const products = useService(WarehouseStore).products
    React.useEffect(() => {
        if (location.state && !location.state.refresh) {
            return;
        }
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