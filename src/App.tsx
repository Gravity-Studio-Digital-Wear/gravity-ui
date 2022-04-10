import React from 'react'
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {useProviders} from "./app/useProviders";
// import {useService} from "./core/decorators/service";
// import {GravityApplication} from "./app/Application";
import {GravityTheme} from "./app/Theme";
// import {ModalProvider} from "./core/modal/modal";
import {Routing} from "./app/Routing";
// import {createBreakpoints} from "@chakra-ui/theme-tools"
import {ScrollRestoration} from "./components/ScrollRestoration";
import {useService} from "./core/decorators/service";
import {GravityApplication} from "./app/Application";
import {ErrorBoundary} from "./components/ErrorBoundary";

const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1440px"
}

const theme = extendTheme({...GravityTheme, breakpoints})

function App() {
    const [RootProvider] = useProviders([
        <ChakraProvider resetCSS={true} theme={theme}/>,
        <BrowserRouter/>
    ])

    const application = useService(GravityApplication)

    React.useEffect(() => application.onBootstrap(), [])


    return (
        <ErrorBoundary>
            <RootProvider>

                <ScrollRestoration/>
                <Routing/>

            </RootProvider>
        </ErrorBoundary>
    )
}

export default App
