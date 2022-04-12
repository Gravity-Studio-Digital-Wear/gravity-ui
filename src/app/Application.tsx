import {service} from "../core/decorators/service";
import {action, makeAutoObservable, observable} from "mobx";
import {ServiceContainer} from "../core/ServiceContainer";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "../services/api/endpoints";
import {initAmplitude} from "../utils/amplitude"

import {persist} from "mobx-persist";
import {hotjar, initGa} from "../utils/gtag";

@service
export class GravityApplication implements IBootstrapper {
    @persist
    @observable
    public isSubscribedEmail: boolean;

    @persist
    @observable
    public cachedAuthProviderKey: string;

    public isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    @action
    public setCachedProvider(key: string) {
        this.cachedAuthProviderKey = key;

        localStorage.setItem('GRAVITY_CACHED_AUTH_PROVIDER', key)
    }


    @action
    public persistSubscribe() {
        this.isSubscribedEmail = true;
        localStorage.setItem('IS_SUBSCRIBED_EMAIL', 'true');
    }

    // public web3: Web3
    // public magic: MagicInstance
    // public authService: AuthService;

    // public magicOAuth: MagicOAuthProvider;
    // public injectedAuth: InjectedAuthProvider;

    // public profileService: ProfileService;

    constructor(private sc: ServiceContainer) {
        makeAutoObservable(this)

        // this.web3 = this.sc.get(WEB3_PROVIDER)
        // this.magic = this.sc.get(MAGIC);
        // this.authService = this.sc.get(AuthService);
        // this.profileService = this.sc.get(ProfileService);
        // this.magicOAuth = this.sc.get(MagicOAuthProvider);
        // this.injectedAuth = this.sc.get(InjectedAuthProvider);

        this.cachedAuthProviderKey = localStorage.getItem('GRAVITY_CACHED_AUTH_PROVIDER');
        this.isSubscribedEmail = localStorage.getItem('IS_SUBSCRIBED_EMAIL') === 'true';
    }

    onBootstrap() {
        initGa();
        hotjar();
        this.initAmplitude();
        this.addHttpAuthMiddleware();
        // this.checkAuth();
    }

    addHttpAuthMiddleware() {
        http.use(async (req) => {
            req.headers.set('Content-Type', 'application/json')

            if (req.path.startsWith(ENDPOINTS.OAuth.login) || req.path.startsWith(ENDPOINTS.OAuth.challenge)) {
                // req.headers.set('Authorization', `Basic ZGVtby1jbGllbnQ6c2VjcmV0`)
                return req
            }

            // if (!this.authService.token) {
            //     return Promise.reject('no auth token provided')
            // }

            // req.headers.set('Authorization', `Bearer ${this.authService.token}`)

            return req;
        })
    }

    // @action
    // async checkAuth() {
    //     const {magic, web3, cachedAuthProviderKey, authService} = this;
    //
    //     if (authService.token) {
    //         this.authService.authStatus = 'success';
    //         this.authService.status = 'authenticated';
    //     } else {
    //         this.authService.authStatus = 'initial';
    //         this.authService.status = 'guest'
    //     }
    //
    //     if (!cachedAuthProviderKey) {
    //         return;
    //     }
    //
    //     // if (cachedAuthProviderKey === 'injected') {
    //     //     this.web3.setProvider(this.injectedAuth.provider)
    //     //
    //     //     const address = await this.injectedAuth.authenticate()
    //     //
    //     //     try {
    //     //         await this.authService.authenticate(address)
    //     //         await this.profileService.getProfile();
    //     //
    //     //         this.authService.authStatus = 'success';
    //     //         this.authService.status = 'authenticated';
    //     //     } catch (e) {
    //     //         console.error('auth error=', e)
    //     //
    //     //         this.authService.status = 'guest'
    //     //         this.authService.authStatus = 'success'
    //     //         this.setCachedProvider(null)
    //     //     }
    //     // }
    //
    //     if (cachedAuthProviderKey === 'magic') {
    //         this.web3.setProvider(this.magicOAuth.provider)
    //
    //         magic.user.isLoggedIn()
    //             .then(async magicIsLoggedIn => {
    //                 if (magicIsLoggedIn) {
    //                     console.log(`On magicIsLoggedIn=true`)
    //
    //                     await this.magicOAuth.getMetadata();
    //                     await this.authService.authenticate(this.magicOAuth.meta.publicAddress)
    //                     await this.profileService.getProfile();
    //
    //                     this.authService.authStatus = 'success';
    //                     this.authService.status = 'authenticated';
    //                 } else {
    //                     console.log(`On magicIsLoggedIn=false`)
    //
    //                     this.authService.status = 'guest'
    //                     this.authService.authStatus = 'success'
    //
    //                     this.setCachedProvider(null)
    //                 }
    //             });
    //     }
    // }

    initAmplitude() {
        initAmplitude()
    }
}

interface IBootstrapper {
    onBootstrap(): void;
}
