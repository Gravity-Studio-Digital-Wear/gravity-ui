import * as React from 'react';
import {processImgUrl} from "../utils/imageUrl";
import {useService} from "../core/decorators/service";
import {GravityApplication} from "../app/Application";
import {observer} from "mobx-react";
import {Image} from "@chakra-ui/react";
import {IS_ANY_SAFARI} from "../utils/userAgent";

export type MediaProps = {
    imageUrl: string,
    videoUrl: string,
    infinite?: boolean,
    fallback?: any

    onLoaded?: (ref: HTMLVideoElement | HTMLImageElement) => void;
}

export type VideoProps = {
    infinite: boolean;
    loop: boolean;
    sources: { src: string, type: string }[];
    onVideoLoaded?: (ref: HTMLVideoElement) => void;
}


export const TransparentVideo = observer((props: MediaProps) => {
    const {
        imageUrl,
        videoUrl,
        infinite = false,
        onLoaded: onLoadedMedia
    } = props;

    const app = useService(GravityApplication)
    const ref = React.useRef();

    React.useEffect(() => {
        if (infinite && ref.current) {
            (ref.current as any).play()
        }

    }, [ref])


    const onLoaded = React.useCallback((ref) => {
        onLoadedMedia && onLoadedMedia(ref)
    }, [])


    return (
        true
            ? <ImageFallback src={imageUrl} onImageLoaded={onLoaded}/>
            : (
                <Video
                    loop={true}
                    infinite={true}
                    onVideoLoaded={onLoaded}
                    sources={[
                        {
                            src: processImgUrl(videoUrl),
                            type: 'video/webm'
                        }
                    ]}
                />
            )
    )
})


function ImageFallback({src, onImageLoaded}: { src: string, onImageLoaded}) {
    return <Image src={src} onLoad={onImageLoaded}/>
}

function Video(props: VideoProps) {
    const {loop, sources, infinite, onVideoLoaded} = props;
    const videoRef = React.useRef(null)

    return (
        <figure>
            <video
                ref={videoRef}
                playsInline
                muted
                autoPlay={infinite}
                loop={infinite}
                onLoadedData={(e) => {
                    onVideoLoaded && onVideoLoaded(videoRef.current);
                }}
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
                {sources.map(({src, type}) => (
                    <source key={src} src={src} type={type}/>
                ))}
            </video>
        </figure>
    )
}