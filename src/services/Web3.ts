import {Magic} from "magic-sdk";
import {OAuthExtension} from "@magic-ext/oauth";
import Web3 from "web3";

const testNetwork = { // Test network
    rpcUrl: 'https://rpc-mumbai.matic.today',
    chainId: 80001,
};

const mainNetwork = {
    rpcUrl: 'https://rpc-mainnet.maticvigil.com/', // Polygon RPC URL
    chainId: 137, // Polygon chain id
}

export const magic = new Magic("pk_live_2F5A5F02878460F4", {
    extensions: [new OAuthExtension()],
    network: process.env.NODE_ENV === 'production' ? mainNetwork : testNetwork
});


//@ts-ignore
magic.network = 'matic';

export const web3 = new Web3();