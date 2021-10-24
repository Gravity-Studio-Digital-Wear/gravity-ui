import {ServiceContainer} from "../core/ServiceContainer";
import {action, makeAutoObservable, observable} from "mobx";
import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {TRequestStatus} from "../interfaces";
import {sendAmplitudeData} from '../utils/amplitude'

export class WaredrobeService {
    @observable requestStatus: TRequestStatus = 'initial';
    @observable error: any;

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this);
    }

    @action
    wear(ticket: string, imageLinks: string[]) {
        this.requestStatus = 'pending'
        return http.post(
            ENDPOINTS.Wardrobe.wear.replace(':id', ticket), {
                sourceImageLinks: imageLinks
            })
            .then(res => {
                console.log(res);
                sendAmplitudeData('E_WEARING_REQUEST_CREATED')
                this.requestStatus = 'success';
            })
    }
}