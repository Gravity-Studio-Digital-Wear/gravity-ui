import * as React from 'react';
import {processImgUrl} from "../utils/imageUrl";
import {Image} from "@chakra-ui/react";
import {useService} from "../core/decorators/service";
import {GravityApplication} from "../app/Application";
import {observer} from "mobx-react";


export const TransparentVideo = observer(({
                                              imageUrl,
                                              videoUrl,
                                              infinite = false
                                          }: { imageUrl: string, videoUrl: string, infinite?: boolean }) => {
    const app = useService(GravityApplication)

    const ref = React.useRef();

    React.useEffect(() => {
        if (infinite) {


            (ref.current as any).play()
        }


    }, [])

    return (
        app.isSafari
            ? (<Image src={processImgUrl(imageUrl)}/>)
            : (
                <figure>
                    <video
                        ref={ref}
                        playsInline
                        muted
                        autoPlay={infinite}
                        loop={infinite}
                        onMouseOver={(event) => {
                            if (infinite) {
                                return;
                            }

                            (event.target as any).play()
                        }}
                        onMouseOut={event => {
                            if (infinite) {
                                return;
                            }
                            (event.target as any).pause();
                            (event.target as any).currentTime = 0
                        }}>
                        <source src={processImgUrl(videoUrl)} type="video/webm"/>
                    </video>
                </figure>
            )
    )
});