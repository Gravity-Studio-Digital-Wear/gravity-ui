import * as React from 'react';
import {processImgUrl} from "../utils/imageUrl";
import {useService} from "../core/decorators/service";
import {GravityApplication} from "../app/Application";
import {observer} from "mobx-react";
import {Image} from "@chakra-ui/react";


export const TransparentVideo = observer((props: { imageUrl: string, videoUrl: string, infinite?: boolean, fallback?: any }) => {
    const {
        imageUrl,
        videoUrl,
        infinite = false
    } = props;

    const app = useService(GravityApplication)
    const ref = React.useRef();

    React.useEffect(() => {
        if (infinite && ref.current) {
            (ref.current as any).play()
        }

    }, [ref])

    return (
        true
            ? (props.fallback ? props.fallback : <Image src={imageUrl}/>)
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
})