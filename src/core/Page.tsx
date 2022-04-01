import * as React from 'react';
import {ReactElement} from 'react';
import {Route as BaseRoute, RouteProps} from "react-router-dom";
import {useRouteLoading} from "./loadables/context";
import {observable, observe} from "mobx";
import {observer} from "mobx-react";

export interface Page extends React.FunctionComponent {
    getPageContainer: ({children}: { children: any }) => ReactElement<any, any> | null
}

export const PageResolver = observer(
    ({children}) => {
        const routeLoading = useRouteLoading()








        const Route = (props: RouteProps) => {
            let Container;

            // TODO POC suspense
            console.log('cmp', (props.component as any)._payload._status)

            if (routeLoading.isLoading) {
                const Cmp = props.component as any;

                return <Cmp/>
            }





            if ((props.component as Page).getPageContainer !== undefined) {
                Container = (props.component as Page).getPageContainer

                const Cmp = props.component as any;


                console.log(Container)


                const component = ({children, ...rest}) => {
                    return (
                        <>
                            <Container>
                                <Cmp {...rest}/>
                            </Container>
                        </>
                    )
                }

                return <BaseRoute
                    {...props}
                    component={component}
                />
            }

            return <BaseRoute{...props}/>
        }


        return children(Route);
    }
)



