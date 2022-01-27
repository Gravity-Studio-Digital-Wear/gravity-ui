import {http, hubspotApi} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {ServiceContainer} from "../core/ServiceContainer";
import {action, makeAutoObservable, observable} from "mobx";
import {IProfile, TRequestStatus} from "../interfaces";


export class BlogService {
    constructor(sc: ServiceContainer) {
        makeAutoObservable(this);
    }

    @observable posts: any = [];
    @observable requestStatus: TRequestStatus = 'initial';
    @observable error: any;

    @action
    fetchPosts() {
        this.requestStatus = 'pending'

        return http
            .get(ENDPOINTS.HubSpot.posts)
            .then((res) => {
                this.posts = res
                this.requestStatus = 'success'


                return Promise.resolve(res)
            })
            .catch((err) => {
                this.requestStatus = "error"
                this.error = err;

                return Promise.reject(err)
            })
    }
}