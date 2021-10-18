import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {IProduct, ISupply} from "../interfaces";

export class WarehouseService {
    public getProducts(): Promise<IProduct[]> {
        return http.get<IProduct[]>(ENDPOINTS.Warehouse.products)
    }

    public getProductById(id: string): Promise<IProduct> {
        return http.get<IProduct>(ENDPOINTS.Warehouse.product.replace(':id', id));
    }

    public getProductSupply(id: string) {
        return http.get<ISupply>(ENDPOINTS.Warehouse.supply.replace(':id', id));
    }

}