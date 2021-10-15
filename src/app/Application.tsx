import {service} from "../core/decorators/service";
import {action, makeAutoObservable} from "mobx";
import {MAGIC, MagicInstance, WEB3_PROVIDER} from "../services/service-container";
import {ServiceContainer} from "../core/ServiceContainer";
import Web3 from "web3";
import {Magic} from "magic-sdk";
import {AuthService} from "../services/AuthService";

@service
export class GravityApplication implements IBootstrapper {
    public web3: Web3
    public magic: MagicInstance
    public authService: AuthService;

    constructor(private sc: ServiceContainer) {
        makeAutoObservable(this)

        this.web3 = this.sc.get(WEB3_PROVIDER)
        this.magic = this.sc.get(MAGIC);
        this.authService = this.sc.get(AuthService);
    }

    onBootstrap() {
        this.addHttpAuthMiddleware();
        this.checkAuth();
    }

    addHttpAuthMiddleware() {
        // http.use(async (req) => {
        //     req.headers.set('Content-Type', 'application/json')
        //
        //     if (req.path.startsWith(ENDPOINTS.OAuth.token)) {
        //         req.headers.set('Authorization', `Basic ZGVtby1jbGllbnQ6c2VjcmV0`)
        //         return req
        //     }
        //
        //     if (!this.authService.token) {
        //         return Promise.reject('no auth token provided')
        //     }
        //
        //     req.headers.set('Authorization', `Bearer ${this.authService.token}`)
        //
        //     return req;
        // })
    }

    @action
    async checkAuth() {
        const {magic} = this

        magic.user.isLoggedIn()
            .then(magicIsLoggedIn => {
                if (magicIsLoggedIn) {
                    magic.user.getMetadata().then((meta) => console.log(meta));
                    magic.user.generateIdToken()

                    this.authService.authStatus = 'success';
                    this.authService.status = 'authenticated';
                } else {

                    this.authService.status = 'guest'
                    this.authService.authStatus = 'success'
                }
            });
    }


}

interface IBootstrapper {
    onBootstrap(): void;
}
