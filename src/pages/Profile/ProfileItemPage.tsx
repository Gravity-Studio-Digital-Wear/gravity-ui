import * as React from 'react';
import {observer} from "mobx-react";
import {useService} from "../../core/decorators/service";
import {WarehouseStore} from "../../stores/WarehouseStore";
import {RouteChildrenProps} from "react-router-dom";
import {PageSpinner} from "../../components/PageSpinner";

export const ProfileItemPage = observer(function ProfileItemPage({match}: RouteChildrenProps<{ id: string }>) {
    const warehouseStore = useService(WarehouseStore)

    React.useEffect(() => {
        warehouseStore.productItem.request(match.params.id)
    }, []);

    if (!warehouseStore.productItem.isSuccess) {
        return <PageSpinner/>
    }

    return <>ProfileItemPage</>
})