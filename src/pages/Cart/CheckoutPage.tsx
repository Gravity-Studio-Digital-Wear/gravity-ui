import * as React from 'react';
import {observer} from "mobx-react";
import {PageSpinner} from "../../components/PageSpinner";
import {RouteChildrenProps, useHistory} from "react-router-dom";
import {useService} from "../../core/decorators/service";
import {CartService} from "../../services/CartService";
import {Routes} from "../../app/routes";


export const CheckoutPage = observer(function CheckoutPage({location}: RouteChildrenProps) {
    const cartService = useService(CartService)

    const history = useHistory()

    React.useEffect(() => {
        const params = new URLSearchParams(location.search);

        const isSuccess = params.get('success')
        const isCanceled = params.get('canceled')

        if (isSuccess) {
            cartService.clear();
            history.push(Routes.profile)
            return
        }
    }, [location.search])

    return <PageSpinner/>
})