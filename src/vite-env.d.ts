/// <reference types="vite/client" />
interface EthereumProvider {
    isMetaMask?: boolean;
}

interface Window {
    ethereum: EthereumProvider & any;
    dataLayer: any;
    preloadedImages: any;
    DocumentTouch: any;
}

interface SvgrComponent
    extends React.FC<React.SVGAttributes<SVGElement>> {
}

declare module '*.svg' {
    const ReactComponent: SvgrComponent;

    export {ReactComponent};
}