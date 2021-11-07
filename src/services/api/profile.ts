import {IProduct, IProfile, ITicket} from "../../interfaces";
import {http} from "../../core/transport/http";
import {ENDPOINTS} from "./endpoints";

export function fetchProfile(): Promise<IProfile> {
    return http.get<IProfile>(ENDPOINTS.OAuth.profile);
}

export function updateProfile(body: Partial<IProfile>): Promise<IProfile> {
    return http.post<IProfile>(ENDPOINTS.OAuth.profile, body);
}

export function myItems(): Promise<{ product: IProduct, supply: number }[]> {
    return http.get(ENDPOINTS.Warehouse.my)
}

export function wardrobe(): Promise<{ ticket: ITicket, items: {product:  IProduct, supply: number} | IProduct }[]> {
    return http.get(ENDPOINTS.Wardrobe.items)
}