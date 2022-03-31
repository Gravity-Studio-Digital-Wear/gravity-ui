import * as React from 'react';
import {observer} from "mobx-react";
import {sendAmplitudeData} from '../utils/amplitude'
import {Route, Switch, useHistory} from "react-router-dom";
import {Routes} from "./routes";
import {TermsOfService} from "../pages/TermsOfService";
import {Privacy} from "../pages/Privacy";
import {Landing} from "../pages/LandingV2/Landing";
import {WhatsHappening} from "../pages/News/WhatsHappening";
import {BlogPost} from "../pages/News/BlogPost";
import {PageResolver} from "../core/Page";

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
        <PageResolver>
            {(Route) => (
                <Switch>
                    <Route path={Routes.news + '/:id'} component={BlogPost}/>
                    <Route path={Routes.news} exact={true} component={WhatsHappening}/>

                    <Route path={Routes.privacy} component={Privacy}/>
                    <Route path={Routes.termsOfService} component={TermsOfService}/>

                    <Route path={Routes.main} component={Landing} exact={true}/>
                </Switch>
            )}
        </PageResolver>
    )
})