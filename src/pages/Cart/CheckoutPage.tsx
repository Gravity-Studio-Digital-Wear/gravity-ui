import * as React from 'react';
import {observer} from "mobx-react";
import {PageSpinner} from "../../components/PageSpinner";
import {RouteChildrenProps, useHistory} from "react-router-dom";
import {useService} from "../../core/decorators/service";
import {CartService} from "../../services/CartService";
import {Routes} from "../../app/routes";
import {sendAmplitudeData} from '../../utils/amplitude'


export const CheckoutPage = observer(function CheckoutPage({location}: RouteChildrenProps) {
    const cartService = useService(CartService)

    const history = useHistory()

    React.useEffect(() => {
        const params = new URLSearchParams(location.search);

        const isSuccess = params.get('success')
        const isCanceled = params.get('canceled')

        if (isSuccess) {
            sendAmplitudeData('E_CHECKOUT_SUCCESS')
            setTimeout(() => {
                cartService.clear();

                history.push(Routes.profile)
            }, 1000);
            return
        } 
        
        if (isCanceled) {
            sendAmplitudeData('E_CHECKOUT_FAILED')
        }
    }, [location.search])

    return <PageSpinner/>
})