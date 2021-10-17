import {action, computed, makeAutoObservable, observable} from 'mobx'
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {ServiceContainer} from "../core/ServiceContainer";
import {MAGIC, MagicInstance, WEB3_PROVIDER} from "./service-container";
import {OAuthProvider} from "@magic-ext/oauth";
import {Routes} from "../app/routes";
import {MagicUserMetadata} from "magic-sdk";
import Web3 from "web3";
import {IProfile} from "../interfaces";

export type AuthStatus = 'guest' | 'authenticated';

export type TToken = {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    jti: string;
};

interface IGrant {
    type: string;

    getBody(): { [key: string]: any, grant_type: string };
}

export class CredentialsGrant implements IGrant {
    public type = 'password'

    constructor(private username: string, private password: string) {
    }

    getBody(): any {

        return {
            username: this.username,
            password: this.password,
            grant_type: this.type
        }
    }
}


export class PersistentStorage {
    public setItem(key: string, value: any) {
        localStorage.setItem(key, value);
    }

    public getItem(key: string): string {
        return localStorage.getItem(key) as string
    }

    public deleteItem(...keys: string[]) {
        for (const key of keys) {
            localStorage.removeItem(key);
        }
    }
}


export class MagicOAuthProvider {
    magic: MagicInstance

    @observable meta: MagicUserMetadata;

    constructor(private sc: ServiceContainer) {
        this.sc = sc;
        this.magic = this.sc.get(MAGIC)
    }

    @action authenticate(provider: OAuthProvider) {
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
            const meta = await this.magic.user.getMetadata()
            const idToken = await this.magic.user.generateIdToken()

            console.log(meta)
            this.meta = meta;
            // TODO id token unused?
        } catch (e) {

            console.error('getMetadata error=', e);
        }
    }
}


export class AuthService {
    @observable status: AuthStatus = 'guest';

    @computed
    public get isAuthorized() {
        return this.status === 'authenticated'
    } ;

    @observable token: string;
    @observable refreshToken: string;

    @observable authStatus: 'initial' | 'pending' | 'success' | 'error' = 'initial'
    @observable requestStatus: 'initial' | 'pending' | 'success' | 'error' = 'initial'

    private magicOAuth: MagicOAuthProvider;
    private web3: Web3;

    constructor(
        private sc: ServiceContainer,
        private persistentStorage: PersistentStorage = new PersistentStorage()
    ) {
        this.refreshToken = this.persistentStorage.getItem('refresh_token')
        this.token = this.persistentStorage.getItem('auth_token')

        this.magicOAuth = this.sc.get(MagicOAuthProvider)
        this.web3 = this.sc.get(WEB3_PROVIDER)

        makeAutoObservable(this)
    }

    @action
    async authenticate(address: string) {
        this.requestStatus = 'pending'

        try {
            const {challenge} = await http.post<{ challenge: string }>(ENDPOINTS.OAuth.challenge, {address})
            const signature = await this.web3.eth.sign(challenge, address)
            const {token} = await http.post<{ token: string, address: string }>(ENDPOINTS.OAuth.login, {
                signature,
                address
            })

            this.requestStatus = 'success'
            this.token = token
            this.persistentStorage.setItem('auth_token', token)
        } catch (e) {
            this.requestStatus = 'error';
        }
    }

    @action
    unauthenticate() {
        this.status = 'guest'
    }

    @action
    clear() {
        this.token = null;
        this.refreshToken = null;

        this.status = 'guest'
        this.persistentStorage.deleteItem('auth_token', 'refresh_token')
    }
}