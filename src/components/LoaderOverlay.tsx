import * as React from "react";
import {Box, Progress, Stack} from "@chakra-ui/react";
import {ReactComponent as Logo} from '../assets/logo-xl.svg';
import {observer} from "mobx-react";
import {Background} from "./containers/elements/Background";
import {useService} from "../core/decorators/service";
import {GravityApplication} from "../app/Application";

function ticker(value: number) {
    return -(value * .05) + value + 20;
}


export const LoaderOverlay = observer(() => {
    const app = useService(GravityApplication)

    const [progress, setProgress] = React.useState(app.isLoaded ? 100 : 20);
    const isLoaded = app.isLoaded || progress >= 100;

    React.useEffect(() => {
        if (isLoaded) {
            app.setAppLoaded();
        }
    }, [isLoaded])

    React.useEffect(() => {
        if (isLoaded) {
            return;
        }

        const int = window.setInterval(() => {
            setProgress((prev) => {
                if (progress >= 100) {
                    console.log('end')

                    app.setAppLoaded();

                    clearInterval(int);

                    return;
                }

                return Math.min(ticker(prev), 100)
            })
        }, 150);

        return () => clearInterval(int);
    }, [])

    return (
        <>
            <Stack
                opacity={isLoaded ? 0 : 1}
                transition={'all ease-out .3s'}
                pointerEvents={'none'}
                w={'100vw'}
                height={'100vh'}
                position={'fixed'}
                bgColor={'transparent'}
                zIndex={3}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Background
                    overflow={'hidden'}
                    position={'fixed'}
                    zIndex={0}
                    top={0}
                    left={0}
                />

                <Stack zIndex={3}
                       spacing={'48px'} justifyContent={'center'} alignItems={'center'}>
                    <Logo/>

                    <Box w={'238px'} mt={'48px'}>
                        <Progress size='sm' isAnimated={true} value={progress}/>
                    </Box>
                </Stack>
            </Stack>

        </>
    )
})
