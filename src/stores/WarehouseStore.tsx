import {ServiceContainer} from "../core/ServiceContainer";
import {WarehouseService} from "../services/WarehouseService";
import {ApiRequest} from "../core/ApiRequest";
import {action, makeAutoObservable, observable} from "mobx";
import {TViewType} from "../interfaces";
import {wardrobe} from "../services/api/profile";


export class WarehouseStore {
    @observable viewType: TViewType = localStorage.getItem('__viewType') as TViewType || 'chess';

    products = new ApiRequest(() => {
        return this.wareHouseService.getProducts()
            .then(async res => {
                const supplyList = res.map(i => {
                    return this.wareHouseService.getProductSupply(i._id)
                })

                const supplies = await Promise.all(supplyList)

                return res.map((r, index) => {
                    r.__supply = supplies[index]

                    return r;
                })
            })
    })

    productItem = new ApiRequest((id: string) => this.wareHouseService.getProductById(id).then(async res => {
        res.__supply = await this.wareHouseService.getProductSupply(res._id)
        return res;
    }))

    wardrobe = new ApiRequest(() => wardrobe())


    getProductSupply() {
        return new ApiRequest((id: string) => this.wareHouseService.getProductSupply(id))
    }

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