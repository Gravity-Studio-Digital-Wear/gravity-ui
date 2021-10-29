import * as React from 'react';
import {observer} from "mobx-react";
import {sendAmplitudeData} from '../utils/amplitude'
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
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
import {AuthGuard} from "../core/guards/auth-guard";
import {SustainabilityPage} from "../pages/Sustainability";
import {HowItWorksPage} from "../pages/HowItWorks";
import {TermsOfService} from "../pages/TermsOfService";
import {Privacy} from "../pages/Privacy";

export const Routing = observer(function Routing() {
    const history = useHistory()
    const trackPageView = () => {
        sendAmplitudeData('E_NAVIGATION', {
            page: window.location.pathname
        })
    }
    React.useEffect(() => {
        trackPageView()
        history.listen(trackPageView)
    })
    return (
        <AuthorizedContainer>
            <AuthGuard fn={s => s === 'authenticated'}>
                {(r, { protected: ProtectedRoute}) => {
                    return (
                        <Switch>
                            {/*<Route path={Routes.login} component={LoginPage}/>*/}
                            <Route path={Routes.authCallback} component={OAuthCallbackPage}/>
                            <Route path={Routes.productPage} component={ProductPage}/>
                            <ProtectedRoute path={Routes.profile} render={({match}) => {
                                if (!r) {


                                    return <Redirect to={Routes.main}/>
                                }

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

                            <Route path={Routes.sustainability} component={SustainabilityPage}/>
                            <Route path={Routes.howItWorks} component={HowItWorksPage}/>

                            <Route path={Routes.privacy} component={Privacy}/>
                            <Route path={Routes.termsOfService} component={TermsOfService}/>

                            <Route path={Routes.main} component={ShopPage} exact={true}/>
                        </Switch>
                    )
                }}
            </AuthGuard>
        </AuthorizedContainer>
    )
})