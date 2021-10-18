import {action, computed, makeAutoObservable, observable, runInAction} from "mobx";
import {TRequestStatus} from "../interfaces";

export class ApiRequest<T, P extends any[]> {
    @observable requestStatus: TRequestStatus = 'initial';
    @observable error: any;
    @observable result: T;

    constructor(private fetchFn: (...args: P) => Promise<T>) {
        makeAutoObservable(this)
    }

    @action
    request(...args: P): Promise<T> {
        this.requestStatus = 'pending'
        this.error = null;

        return this.fetchFn(...args)
            .then((res: T) => {

                runInAction(() => {
                    this.result = res
                    this.requestStatus = 'success'
                })


                return Promise.resolve(res)
            })
            .catch((err) => {
                this.requestStatus = "error"
                this.error = err;

                return Promise.reject(err)
            })
    }


    @computed get isPending() {
        return this.requestStatus === 'pending'
    }

    @computed get isSuccess() {
        return this.requestStatus === 'success'
    }
}
