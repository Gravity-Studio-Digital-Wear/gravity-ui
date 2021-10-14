import {ServiceContainer} from "../core/ServiceContainer";
import {WarehouseService} from "../services/WarehouseService";
import {ApiRequest} from "../core/ApiRequest";
import {action, makeAutoObservable, observable} from "mobx";
import {TViewType} from "../interfaces";


export class WarehouseStore {
    @observable viewType: TViewType = localStorage.getItem('__viewType') as TViewType || 'chess';

    products = new ApiRequest(() => this.wareHouseService.getProducts())

    wareHouseService: WarehouseService;

    constructor(sc: ServiceContainer) {
        this.wareHouseService = sc.get(WarehouseService)

        makeAutoObservable(this)
    }

    @action
    setListViewType(type: TViewType) {
        this.viewType = type;
        localStorage.setItem('__viewType', this.viewType)
    }
}