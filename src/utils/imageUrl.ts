export function processImgUrl(url: string) {
    return url;
}


export function processUploadImgUrl(url: string) {
    return url.replace('https://res.cloudinary.com/easychain-img/', 'https://gravity-dev-image.easychain.dev/')
}