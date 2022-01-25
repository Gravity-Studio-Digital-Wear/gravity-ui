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

        return hubspotApi
            .get(ENDPOINTS.HubSpot.posts + '?hapikey=17c0097f-bd91-45f7-93fe-ab7595ec72d8', {init: {mode: 'no-cors'}})
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