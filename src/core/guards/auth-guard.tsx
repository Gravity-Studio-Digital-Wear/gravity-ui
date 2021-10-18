import * as React from 'react';
import {ReactNode} from 'react';
import {AuthService, AuthStatus} from "../../services/AuthService";
import {useService} from "../decorators/service";
import {observer} from "mobx-react";
import {Route, RouteProps} from "react-router-dom";
import {PageSpinner} from "../../components/PageSpinner";

type AuthGuardProps = {
    fn: (status: AuthStatus) => boolean
    children: (authorized: boolean, r: { protected: React.FC<RouteProps> }) => ReactNode | undefined
}

const ProtectedRoute = observer(function AuthRoute(routeProps: RouteProps) {
    const auth = useService(AuthService)
    const authorized = auth.isAuthorized

    if (auth.authStatus === 'initial' || auth.authStatus === 'pending') {
        return <PageSpinner/>
    }

    return <Route {...routeProps}/>
})


export const AuthGuard = observer(
    function AuthGuard(props: React.PropsWithChildren<AuthGuardProps>) {
        const {fn: authorize, children: renderChildren} = props;

        const auth = useService(AuthService)
        const authorized = auth.isAuthorized

        // if (auth.authStatus === 'initial' || auth.authStatus === 'pending') {
        //     return <PageSpinner/>;
        // }

        return <>{renderChildren(authorized, {protected: ProtectedRoute})}</>
    }
)

