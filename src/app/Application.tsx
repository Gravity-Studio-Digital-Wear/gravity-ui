import {service} from "../core/decorators/service";
import {action, makeAutoObservable} from "mobx";
import {MAGIC, MagicInstance, WEB3_PROVIDER} from "../services/service-container";
import {ServiceContainer} from "../core/ServiceContainer";
import Web3 from "web3";
import {AuthService, MagicOAuthProvider} from "../services/AuthService";
import {http} from "../core/transport/http";
import {ENDPOINTS, NoAuth} from "../services/api/endpoints";
import {ProfileService} from "../services/ProfileService";
import {initAmplitude} from "../utils/amplitude"


import {matchPath} from 'react-router-dom'

@service
export class GravityApplication implements IBootstrapper {
    public web3: Web3
    public magic: MagicInstance
    public authService: AuthService;
    public magicOAuth: MagicOAuthProvider;
    public profileService: ProfileService;

    constructor(private sc: ServiceContainer) {
        makeAutoObservable(this)

        this.web3 = this.sc.get(WEB3_PROVIDER)
        this.magic = this.sc.get(MAGIC);
        this.authService = this.sc.get(AuthService);
        this.profileService = this.sc.get(ProfileService);
        this.magicOAuth = this.sc.get(MagicOAuthProvider)
    }

    onBootstrap() {
        this.initAmplitude();
        this.addHttpAuthMiddleware();
        this.checkAuth();
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

            req.headers.set('Authorization', `Bearer ${this.authService.token}`)

            return req;
        })
    }

    @action
    async checkAuth() {
        const {magic} = this

        magic.user.isLoggedIn()
            .then(async magicIsLoggedIn => {
                if (magicIsLoggedIn) {
                    console.log(`On magicIsLoggedIn=true`)
                    await this.magicOAuth.getMetadata();
                    await this.authService.authenticate(this.magicOAuth.meta.publicAddress)
                    await this.profileService.getProfile();

                    this.authService.authStatus = 'success';
                    this.authService.status = 'authenticated';
                } else {
                    console.log(`On magicIsLoggedIn=false`)
                    this.authService.status = 'guest'
                    this.authService.authStatus = 'success'
                }
            });
    }

    initAmplitude() {
        initAmplitude()
    }
}

interface IBootstrapper {
    onBootstrap(): void;
}
