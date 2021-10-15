import * as React from 'react';
import {observer} from "mobx-react";
import {Route, Switch} from "react-router-dom";
import {LoginPage} from "../pages/Auth/LoginPage";
import {AuthorizedContainer} from "../components/AuthorizedContainer";
import {ShopPage} from "../pages/Shop/ShopPage";
import {ProductPage} from "../pages/Product/ProductPage";
import {CartPage} from "../pages/Cart/CartPage";


export const Routes = {
    login: '/login',
    cart: '/cart',
    main: '/',

    productPage: '/product/:id'
}


export const Routing = observer(function Routing() {
    return (
        <AuthorizedContainer>
            <Switch>
                <Route path={Routes.login} component={LoginPage}/>
                <Route path={Routes.productPage} component={ProductPage}/>
                <Route path={Routes.cart} component={CartPage}/>
                <Route path={Routes.main} component={ShopPage} exact={true}/>
            </Switch>
        </AuthorizedContainer>
    )
    // return (
    //     <AuthGuard fn={(s) => s === 'authenticated'}>
    //         {(authenticated) => {
    //             if (!authenticated) {
    //                 return (
    //                     <LoginContainer>
    //                         <Switch>
    //                             <Route path={"/login"} component={LoginPage}/>
    //
    //                             <Redirect to={'/login'}/>
    //                         </Switch>
    //                     </LoginContainer>
    //                 )
    //             }
    //
    //             return (
    //                 <>
    //
    //
    //                 </>
    //             )
    //         }}
    //     </AuthGuard>
    // )
})


