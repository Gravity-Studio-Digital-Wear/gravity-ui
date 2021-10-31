export function checkSupportForTransparency() {
    return new Promise((resolve, reject) => {
        let video = document.createElement('video');
        let canPlay = video.canPlayType && video.canPlayType('video/webm; codecs="vp9"');
        resolve(canPlay === 'maybe' || canPlay === 'probably');
    });
}