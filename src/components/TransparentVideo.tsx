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
        app.isSafari
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
});


let counter = 0;

function SafariTransparentVideo({url}: { url: string }) {
    const ref = React.useRef(null)


    url = 'https://res.cloudinary.com/dxgophqoh/video/upload/v1648202298/output_hjoavx.mp4'

    const [blobUrl, setBlobUrl] = React.useState(null)


    const id = url.slice(url.length - 12).replace('.', '')


    React.useEffect(() => {
        fetch(url.replace('webm', 'mp4')).then((resp) => {
            return resp.blob().then(blob => {
               return Promise.resolve({
                   status: 'success',
                   payload: {
                       blobURL: URL.createObjectURL(blob)
                   }
               })
            })
        }).then(({status, payload}) => {
            if (status === 'success') {
                setBlobUrl(payload.blobURL)
            }
        })

    }, [])

    React.useEffect(() => {
        if (blobUrl === null) {
            return
        }

        try {
            const instance = window.seeThru.create('#'+ id).ready(() => {
                instance.play()
            });
        }catch (e) {
            console.log(e)
        }
    }, [blobUrl])

    return (
        <video id={id}
               autoPlay={true}
               loop
               playsInline={true}
               muted
               style={{'display': "none", width: '300px'}}
               src={blobUrl}
        >


            <source src={blobUrl} type={'video/mp4; codecs="avc1.42E01E"'}/>
        </video>
    )
}