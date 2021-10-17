import {IProfile} from "../../interfaces";
import {http} from "../../core/transport/http";
import {ENDPOINTS} from "./endpoints";

export function fetchProfile(): Promise<IProfile> {
    return http.get<IProfile>(ENDPOINTS.OAuth.profile);
}

export function updateProfile(body: Partial<IProfile>): Promise<IProfile> {
    return http.post<IProfile>(ENDPOINTS.OAuth.profile, body);
}

export function wardrobeItems(): Promise<any> {
    return http.get(ENDPOINTS.Wardrobe.items).then(res => {
        console.log(res)


        return []
    });
}