export function processImgUrl(url: string) {
    return url.replace('https://gravity-dev-image.easychain.dev/', 'https://res.cloudinary.com/easychain-img/')
}