import * as React from 'react';
import {Suspense} from 'react';
import {observer} from "mobx-react";
import {sendAmplitudeData} from '../utils/amplitude'
import {Route, Switch, useHistory} from "react-router-dom";
import {Routes} from "./routes";
import {LandingContainer} from "../components/containers/LandingContainer";
import {LoaderOverlay} from "../components/LoaderOverlay";
import {Background} from "../components/containers/elements/Background";
import {BaseContainer} from "../components/containers/BaseContainer";
import {NFTDrop} from "../pages/NFTDrop";
import {Team} from "../pages/Team";

const Landing = React.lazy(() => import("../pages/LandingV2/Landing"))
const BlogPost = React.lazy(() => import("../pages/News/BlogPost")
    .then(({BlogPost}) => ({default: BlogPost}))
)
const WhatsHappening = React.lazy(() =>
    import("../pages/News/WhatsHappening")
        .then(({WhatsHappening}) => ({default: WhatsHappening}))
);

const Privacy = React.lazy(() =>
    import("../pages/Privacy")
        .then(({Privacy}) => ({default: Privacy}))
);

const TermsOfService = React.lazy(() =>
    import("../pages/TermsOfService")
        .then(({TermsOfService}) => ({default: TermsOfService}))
)

// const NFTDrop = React.lazy(() =>
//     import("../pages/NFTDrop/index")
//         .then(({NFTDrop}) => ({default: NFTDrop}))
// )



const Bg = React.lazy(() => {
    const preload = [
        '/landing/bg-1-min.jpg',
        '/landing/bg-2-min.jpg',
        '/landing/bg-3-min.jpg'
    ]

    function imageLoaded(src: string): Promise<any> {
        return new Promise((resolve) => {
            const img = new Image();

            img.src = src;

            img.onload = () => {
                resolve(img)
            };
        })
    }

    return Promise.all(preload.map(imageLoaded))
        .then(loaded => {
            window.preloadedImages = loaded;

            return {default: Background};
        });
})

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
        <Suspense fallback={''}>
            <Bg
                overflow={'hidden'}
                position={'fixed'}
                zIndex={0}
                top={0}
                left={0}
            />

            <LoaderOverlay/>

            <Suspense fallback={''}>
                <Switch>
                    <Route path={Routes.news + '/:id'} component={base(BlogPost)}/>
                    <Route path={Routes.news} exact={true} component={base(WhatsHappening)}/>

                    <Route path={Routes.privacy} component={base(Privacy)}/>
                    <Route path={Routes.termsOfService} component={base(TermsOfService)}/>

                    <Route path={Routes.team} component={() => {
                        return (
                            <LandingContainer>
                                <Team/>
                            </LandingContainer>
                        )
                    }}/>

                    <Route path={Routes.nftDrop} component={() => {
                        return (
                            <LandingContainer>
                                <NFTDrop/>
                            </LandingContainer>
                        )
                    }}/>

                    <Route path={Routes.main} component={() => {
                        return (
                            <LandingContainer>
                                <Landing/>
                            </LandingContainer>
                        )
                    }} exact={true}/>
                </Switch>
            </Suspense>
        </Suspense>

    )
})


function base(Cmp) {
    return (props) => (
        <BaseContainer>
            <Cmp {...props}/>
        </BaseContainer>
    )
}

function landing(Cmp) {
    return (props) => (
        <LandingContainer>
            <Cmp {...props}/>
        </LandingContainer>
    )
}