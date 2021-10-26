export function isMetamaskAvailable(): boolean {
    return Boolean(window.ethereum && window.ethereum.isMetaMask)
}