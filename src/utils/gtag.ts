import {getEnv} from "./env";

export function initGa() {
    install(getEnv('REACT_GA_MEASURMENT_ID', ''));
}


export const install = (trackingId, additionalConfigInfo = {}) => {
    const scriptId = 'ga-gtag';

    if (document.getElementById(scriptId)) return;

    const {head} = document;
    const script = document.createElement('script');
    script.id = scriptId;
    script.type = 'text/javascript';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    head.insertBefore(script, head.firstChild);

    window.dataLayer = window.dataLayer || [];

    gtag('js', new Date());
    gtag('config', trackingId, additionalConfigInfo);
};

export const gtag = function (...args: any[]) {
    // Can't use arrow func + destructuring as Google expects
    // arguments objects in dataLayer (not an array of arguments).
    window.dataLayer.push(...args);
};





export function hotjar() {
    if (process.env.NODE_ENV !== 'production') {
        return;
    }

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2804714,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
}