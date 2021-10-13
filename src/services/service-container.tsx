import {AuthService, PersistentStorage} from "./AuthService";
import {ServiceContainer} from "./ServiceContainer";
import {GravityApplication} from "../app/Application";

export const sc = new ServiceContainer()

sc.set(new AuthService(new PersistentStorage()))
sc.set(new GravityApplication(sc.get(AuthService)))