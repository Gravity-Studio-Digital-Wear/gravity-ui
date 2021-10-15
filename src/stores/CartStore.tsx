import {ServiceContainer} from "../core/ServiceContainer";
import {makeAutoObservable} from "mobx";

export class CartStore {
    constructor(sc: ServiceContainer) {
        makeAutoObservable(this)
    }


    public get cartQty(): number {
        return 2;
    }
}