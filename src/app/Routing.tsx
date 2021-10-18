import * as React from 'react';
import {observer} from "mobx-react";
import {Route, Switch} from "react-router-dom";
import {AuthorizedContainer} from "../components/AuthorizedContainer";
import {ShopPage} from "../pages/Shop/ShopPage";
import {ProductPage} from "../pages/Product/ProductPage";
import {CartPage} from "../pages/Cart/CartPage";
import {Routes} from "./routes";
import {ProfilePage} from "../pages/Profile/ProfilePage";
import {OAuthCallbackPage} from "../pages/OAuth/OAuthCallbackPage";
import {ProfileEditPage} from "../pages/Profile/ProfileEditPage";
import {ProfileItemPage} from "../pages/Profile/ProfileItemPage";
import {MyItemsPage} from "../pages/Profile/MyItemsPage";
import {CheckoutPage} from "../pages/Cart/CheckoutPage";


export const Routing = observer(function Routing() {
    return (
        <AuthorizedContainer>
            <Switch>
                {/*<Route path={Routes.login} component={LoginPage}/>*/}
                <Route path={Routes.authCallback} component={OAuthCallbackPage}/>
                <Route path={Routes.productPage} component={ProductPage}/>
                <Route path={Routes.profile} render={({match}) => {
                    return (
                        <Switch>
                            <Route path={match.path + '/edit'} component={ProfileEditPage}/>
                            <Route path={match.path + '/items'} render={({match}) => {
                                return (
                                    <Switch>
                                        <Route path={match.path + '/my'} component={MyItemsPage}/>
                                        <Route path={match.path + '/:id'} component={ProfileItemPage}/>
                                    </Switch>
                                )
                            }}/>
                            <Route exact={true} path={match.path} component={ProfilePage}/>
                        </Switch>
                    )
                }}/>

                <Route path={Routes.checkout} component={CheckoutPage}/>
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


