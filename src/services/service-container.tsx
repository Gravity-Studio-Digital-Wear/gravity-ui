import {AuthService, MagicOAuthProvider, PersistentStorage} from "./AuthService";
import {InjectionToken, ServiceContainer} from "../core/ServiceContainer";
import {GravityApplication} from "../app/Application";
import {WarehouseStore} from "../stores/WarehouseStore";
import {WarehouseService} from "./WarehouseService";
import {CartStore} from "../stores/CartStore";
import {magic, web3} from "./Web3";
import Web3 from "web3";
import {ModalService} from "./ModalService";

export type MagicInstance = typeof magic;


export const WEB3_PROVIDER = new InjectionToken<Web3>('WEB3_TOKEN')
export const MAGIC = new InjectionToken<MagicInstance>('MAGIC_TOKEN')

export const sc = new ServiceContainer()

// Magic
sc.set(MAGIC, magic);
sc.set(WEB3_PROVIDER, web3);

// Services and stores
sc.set(new AuthService(new PersistentStorage()))

sc.set(new MagicOAuthProvider(sc));
sc.set(new WarehouseService());
sc.set(new WarehouseStore(sc));
sc.set(new CartStore(sc));
sc.set(new ModalService(sc))

//Application
sc.set(new GravityApplication(sc))