import {ServiceContainer} from "../core/ServiceContainer";
import {action, makeAutoObservable, observable} from "mobx";

export class ModalService {
    @observable opened = [];

    constructor(sc: ServiceContainer) {
        makeAutoObservable(this);
    }

    @action
    open(key: string) {
        if (this.opened.includes(key)) {
            return;
        }

        this.opened = [...this.opened, key]
    }

    @action
    close(key: string) {
        this.opened = [...this.opened.filter(r => r !== key)]
    }
}