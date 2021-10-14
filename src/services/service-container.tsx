import {AuthService, PersistentStorage} from "./AuthService";
import {ServiceContainer} from "../core/ServiceContainer";
import {GravityApplication} from "../app/Application";
import {WarehouseStore} from "../stores/WarehouseStore";
import {WarehouseService} from "./WarehouseService";

export const sc = new ServiceContainer()

sc.set(new AuthService(new PersistentStorage()))
sc.set(new GravityApplication(sc.get(AuthService)))

sc.set(new WarehouseService())
sc.set(new WarehouseStore(sc))