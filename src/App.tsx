import React from 'react'
import {BrowserRouter} from "react-router-dom"

import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {useProviders} from "./app/useProviders";
import {Routing} from "./app/Routing";
import {useService} from "./core/decorators/service";
import {GravityApplication} from "./app/Application";
import {GravityTheme} from "./app/Theme";

const theme = extendTheme(GravityTheme)

console.log(theme);

function App() {
    const [RootProvider] = useProviders([
        <ChakraProvider resetCSS={true} theme={theme}/>,
        <BrowserRouter/>
    ])

    const application = useService(GravityApplication)

    React.useEffect(() => application.onBootstrap(), [])

    return (
        <RootProvider>
            <Routing/>
        </RootProvider>
    )
}

export default App
