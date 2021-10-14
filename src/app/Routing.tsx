import * as React from 'react';
import {AuthGuard} from "../core/guards/auth-guard";
import {observer} from "mobx-react";
import {Redirect, Route, Switch} from "react-router-dom";
import {LoginPage} from "../pages/Auth/LoginPage";
import {AuthorizedContainer} from "../components/AuthorizedContainer";
import {LoginContainer} from "../components/LoginContainer";
import {ShopPage} from "../pages/Shop/ShopPage";
import {ProductPage} from "../pages/Product/ProductPage";

export const Routing = observer(function Routing() {

    return (
        <AuthorizedContainer>
            <Switch>
                <Route path={"/login"} component={LoginPage}/>
                <Route path={'/product/:id'} component={ProductPage}/>

                <Route exact={true} path={"/"} component={ShopPage}/>
            </Switch>
        </AuthorizedContainer>
    )

    return (
        <AuthGuard fn={(s) => s === 'authenticated'}>
            {(authenticated) => {
                if (!authenticated) {
                    return (
                        <LoginContainer>
                            <Switch>
                                <Route path={"/login"} component={LoginPage}/>

                                <Redirect to={'/login'}/>
                            </Switch>
                        </LoginContainer>
                    )
                }

                return (
                    <>


                    </>
                )
            }}
        </AuthGuard>
    )
})


