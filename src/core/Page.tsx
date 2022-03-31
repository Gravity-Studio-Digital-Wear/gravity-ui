import * as React from 'react';
import {ReactElement} from 'react';
import {Route as BaseRoute, RouteProps} from "react-router-dom";
import {LoaderOverlay} from "../components/LoaderOverlay";

export interface Page extends React.FunctionComponent {
    getPageContainer: ({children}: { children: any }) => ReactElement<any, any> | null
}

export const PageResolver = ({children}) => {
    const Route = (props: RouteProps) => {
        let Container;

        if ((props.component as Page).getPageContainer !== undefined) {
            Container = (props.component as Page).getPageContainer

            const Cmp = props.component as any;

            const component = ({children, ...rest}) => {
                return (
                    <>
                        <LoaderOverlay/>

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



