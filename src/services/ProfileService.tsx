import {IProfile, TRequestStatus} from "../interfaces";
import {action, makeAutoObservable, observable} from "mobx";
import {ServiceContainer} from "../core/ServiceContainer";
import {fetchProfile, myItems, updateProfile} from "./api/profile";
import {ApiRequest} from "../core/ApiRequest";

export class ProfileService {
    public profileService: ProfileService;

    @observable profile: IProfile;
    @observable requestStatus: TRequestStatus = 'initial';
    @observable error: any;

    public myItems = new ApiRequest(() => myItems())

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this);

        this.profileService = sc.get(ProfileService);
    }

    @action
    getProfile() {
        this.requestStatus = 'pending'
        this.error = null;

        return fetchProfile()
            .then((res) => {
                this.profile = res
                this.requestStatus = 'success'


                return Promise.resolve(res)
            })
            .catch((err) => {
                this.requestStatus = "error"
                this.error = err;

                return Promise.reject(err)
            })
    }

    @action
    updateProfile(patch: Partial<IProfile>) {
        this.error = null;
        return updateProfile(patch)
            .then((res) => {
                this.requestStatus = 'success'
                this.profile = res

                return Promise.resolve(res)
            })
            .catch((err) => {
                this.requestStatus = "error"
                this.error = err;

                return Promise.reject(err)
            })
    }
}