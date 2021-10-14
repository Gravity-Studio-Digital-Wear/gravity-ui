import {http} from "../core/transport/http";
import {ENDPOINTS} from "./api/endpoints";
import {IProduct} from "../interfaces";

export class WarehouseService {
    public getProducts(): Promise<IProduct[]> {
        return http.get<IProduct[]>(ENDPOINTS.Warehouse.products);
    }


    public getProductById(): Promise<IProduct[]> {
        return http.get<IProduct[]>(ENDPOINTS.Warehouse.products);
    }
}