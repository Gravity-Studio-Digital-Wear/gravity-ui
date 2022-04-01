import * as React from "react";
import {Box, Progress, Stack} from "@chakra-ui/react";
import {ReactComponent as Logo} from '../assets/logo-xl.svg';
import {observer} from "mobx-react";
import {Background} from "./containers/elements/Background";
import {useService} from "../core/decorators/service";
import {PageLoadingStore} from "../stores/PageLoadingStore";


export const LoaderOverlay = observer(() => {
    const pageLoadingStore = useService(PageLoadingStore);

    const isLoaded = pageLoadingStore.isPageLoaded;

    return (
        <>
            <Stack
                opacity={isLoaded ? 0 : 1}
                transition={'all ease-out .3s'}
                sx={{
                    transitionDelay: '500ms'
                }}
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
                        <Progress size='sm' isAnimated={true} value={pageLoadingStore.value}/>
                    </Box>
                </Stack>
            </Stack>

        </>
    )
})
