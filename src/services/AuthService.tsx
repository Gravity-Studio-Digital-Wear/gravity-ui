import {action, computed, makeAutoObservable, observable} from 'mobx'
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {ServiceContainer} from "../core/ServiceContainer";
import {MAGIC, MagicInstance, WEB3_PROVIDER} from "./service-container";
import {OAuthProvider} from "@magic-ext/oauth";
import {Routes} from "../app/routes";
import {MagicUserMetadata} from "magic-sdk";
import Web3 from "web3";
import {PersistentStorage} from "../core/PersistentStorage";

export type AuthStatus = 'guest' | 'authenticated';



interface IAuthProvider {
    publicAddress: string;

    provider(): any;
}

class UserRejectedException extends Error {
}

export class InjectedAuthProvider implements IAuthProvider {
    @observable publicAddress: string;

    private web3: Web3;

    constructor(private sc: ServiceContainer) {
        this.web3 = this.sc.get(WEB3_PROVIDER)
    }

    @action
    async authenticate() {
        this.web3.setProvider(this.provider);

        const accounts = await (this.web3.currentProvider as any).request({method: 'eth_requestAccounts'})

        const address = accounts[0] || this.web3.defaultAccount;

        if (!address) {
            throw new UserRejectedException();
        }

        this.publicAddress = address

        return address;
    }

    public get provider(): any {
        return window.ethereum;
    }
}

export class MagicOAuthProvider implements IAuthProvider {
    magic: MagicInstance

    @observable meta: MagicUserMetadata;

    constructor(private sc: ServiceContainer) {
        this.sc = sc;
        this.magic = this.sc.get(MAGIC)
    }

    @computed
    public get publicAddress(): string {
        return this.meta.publicAddress
    }

    @action
    public authenticate(provider: OAuthProvider) {
        this.magic.oauth.loginWithRedirect({
            provider,
            redirectURI: new URL(Routes.authCallback, window.location.origin).href,
        });
    }

    @action logout() {
        return this.magic.user.logout()
    }

    @action
    async getMetadata() {
        try {
            this.meta = await this.magic.user.getMetadata()
        } catch (e) {

            console.error('getMetadata error=', e);
        }
    }

    public get provider(): any {
        return this.magic.rpcProvider
    }
}

export class AuthService {
    @observable status: AuthStatus = 'guest';

    @computed
    public get isAuthorized() {
        return this.status === 'authenticated'
    } ;

    @observable token: string;

    @observable authStatus: 'initial' | 'pending' | 'success' | 'error' = 'initial'
    @observable requestStatus: 'initial' | 'pending' | 'success' | 'error' = 'initial'

    private web3: Web3;

    constructor(
        private sc: ServiceContainer,
        private persistentStorage: PersistentStorage = new PersistentStorage()
    ) {
        this.token = this.persistentStorage.getItem('auth_token')

        this.web3 = this.sc.get(WEB3_PROVIDER)
        makeAutoObservable(this)
    }

    @action
    async authenticate(address: string) {
        this.requestStatus = 'pending'

        try {
            const {challenge} = await http.post<{ challenge: string }>(ENDPOINTS.OAuth.challenge, {address})

            const signature = await this.web3.eth.personal.sign(challenge, address, '')

            const {token} = await http.post<{ token: string, address: string }>(ENDPOINTS.OAuth.login, {
                signature,
                address
            })

            this.requestStatus = 'success'
            this.token = token
            this.persistentStorage.setItem('auth_token', token)
        } catch (e) {
            console.log('error=', e)

            this.requestStatus = 'error';
        }
    }

    @action
    public ensureAuthSuccess() {
        this.status = 'authenticated';
        this.authStatus = 'success'
    }

    @action
    clear() {
        this.token = null;

        this.status = 'guest'
        this.persistentStorage.deleteItem('auth_token', 'refresh_token')
    }
}