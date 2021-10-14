import {action, computed, makeAutoObservable, observable} from "mobx";
import {TRequestStatus} from "../interfaces";

export class ApiRequest<T, P extends any[]> {
    @observable requestStatus: TRequestStatus = 'initial';
    @observable error: any;
    @observable result: T;

    constructor(private fetchFn: (...args: P) => Promise<T>) {
        makeAutoObservable(this)
    }

    @action
    fetch(...args: P) {
        this.requestStatus = 'pending'
        this.error = null;

        return this.fetchFn(...args)
            .then(res => {
                this.requestStatus = 'success'
                this.result = res
            })
            .catch((err) => {
                this.requestStatus = "error"
                this.error = err;
            })
    }


    @computed get isPending() {
        return this.requestStatus === 'pending'
    }

    @computed get isSuccess() {
        return this.requestStatus === 'success'
    }
}
