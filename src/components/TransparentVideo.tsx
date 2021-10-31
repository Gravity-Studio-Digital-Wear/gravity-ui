import * as React from 'react';
import {checkSupportForTransparency} from "../utils/video";
import {processImgUrl} from "../utils/imageUrl";
import seethru from 'seethru';
import {Box} from "@chakra-ui/react";
import cloudinary from 'cloudinary-core'


export const TransparentVideo = ({src}: { src: string }) => {
    const [isSupportTranperencyNatively, setSupport] = React.useState(false)

    src = src.replace('https://gravity-dev-images.easychain.dev/' , '/')

    React.useEffect(() => {
        checkSupportForTransparency()
            .then((is: boolean) => setSupport(is))
    }, [])


    return (
        <SafariTransparentVideo src={src}/>
    );
}

function SafariTransparentVideo({src}: { src: string }) {
    const ref = React.useRef(null)
    const videoUrl = src.replace('webm', 'mp4')

    React.useEffect( () => {
        // @ts-ignore
        let myCloudinary = new cloudinary.Cloudinary({cloud_name: 'demo'});
        let container = ref.current;
        myCloudinary.injectTransparentVideoElement(container, 'docs/transparent_girl', {
            loop: true,
            playsinline: true,
            max_timeout_ms: 15000,
            width: 400,
            quality: "auto:best"
        }).catch((err) => {
            console.log(err);
        });


        // getBlobFromURL(videoUrl, 10101010)
        //     .then(({payload}) => {
        //         let videoElement = createHiddenVideoTag({
        //             blobURL: payload.blobURL,
        //             videoURL: videoUrl, // for debugging/testing
        //             autoplay: true,
        //             playsinline : true ,
        //             loop: true,
        //         })
        //
        //         ref.current.appendChild(videoElement);
        //
        //         let seeThruInstance = seethru.create(videoElement).ready(() => {
        //             let canvasElement = seeThruInstance.getCanvas();
        //
        //             canvasElement.style.width = '100%';
        //             canvasElement.className += ' ' + 'customClass';
        //
        //
        //             seeThruInstance.play()
        //         })
        //     })
    }, [])


    return (
        <>
           <div ref={ref}/>
        </>
    )
}



function getBlobFromURL(urlToLoad, max_timeout_ms) {
    return new Promise((resolve, reject) => {
        let timerID = setTimeout(() => {
            reject({
                status: 'error',
                message: 'Timeout loading Blob URL'
            });
        }, max_timeout_ms);

        let xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function (response) {
            clearTimeout(timerID); // clear timeout reject error
            resolve({
                status: 'success',
                payload: {
                    blobURL: URL.createObjectURL(xhr.response)
                }
            });
        };

        xhr.onerror = function () {
            clearTimeout(timerID); // clear timeout reject error
            reject({
                status: 'error',
                message: 'Error loading Blob URL'
            });
        };
        xhr.open('GET', urlToLoad, true);
        xhr.send();
    });
}


function createHiddenVideoTag(videoOptions) {
    let { autoplay, playsinline, loop, muted, poster, blobURL, videoURL} = videoOptions;

    let el = document.createElement('video');
    el.style.visibility = 'hidden';
    el.position = 'absolute';
    el.x = 0;
    el.y = 0;
    el.src = blobURL;
    el.setAttribute('data-video-url', videoURL); // for debugging/testing

    autoplay && el.setAttribute('autoplay', autoplay);
    playsinline && el.setAttribute('playsinline', playsinline);
    loop && el.setAttribute('loop', loop);
    muted && el.setAttribute('muted', muted);
    muted && (el.muted = muted); // this is also needed for autoplay, on top of setAttribute
    poster && el.setAttribute('poster', poster);

    // Free memory at the end of the file loading.
    el.onload = () => {
        URL.revokeObjectURL(blobURL);
    };

    return el;
}