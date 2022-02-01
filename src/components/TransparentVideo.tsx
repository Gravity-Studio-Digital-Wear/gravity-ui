import * as React from 'react';
import {processImgUrl} from "../utils/imageUrl";
import {Image} from "@chakra-ui/react";
import {useService} from "../core/decorators/service";
import {GravityApplication} from "../app/Application";
import {observer} from "mobx-react";


export const TransparentVideo = observer(({imageUrl, videoUrl}: { imageUrl: string, videoUrl: string }) => {
    const app = useService(GravityApplication)

    return (
        app.isSafari
            ? (<Image src={processImgUrl(imageUrl)}/>)
            : (
                <figure>
                    <video playsInline muted
                           onMouseOver={(event) => (event.target as any).play()}
                           onMouseOut={event => {
                               (event.target as any).pause();
                               (event.target as any).currentTime = 0
                           }}>
                        <source src={processImgUrl(videoUrl)} type="video/webm"/>
                    </video>
                </figure>
            )
    )
});