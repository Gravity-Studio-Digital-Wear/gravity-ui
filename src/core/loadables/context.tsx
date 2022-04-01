import * as React from "react";
import {ComponentType} from "react";
// alias RouteComponentStore
import {action, makeAutoObservable, observable} from "mobx";
import {useService} from "../decorators/service";
import {sc} from "../../services/service-container";
import {Page} from "../Page";

type TRouteLoadingContext = {
    isLoading: boolean;
    loadStart: () => void
    loadEnded: () => void;
    effect: () => () => void;
}

export function useRouteLoading() {
    return useService(RCLStore);
}

export class RCLStore implements TRouteLoadingContext {
    @observable isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    @action
    loadStart() {
        this.isLoading = true;
    }

    @action
    loadEnded() {

        console.log('ended')

        this.isLoading = false
    }

    effect = () => {
        this.loadStart()

        return () => this.loadEnded()
    }
}

export function loadComponent<T>(factory: () => Promise<{ default: ComponentType<T> }>) {
    const rcl = sc.get(RCLStore);

    rcl.loadStart();

    return React.lazy(
        () => factory()
            .then((res) => {
                rcl.loadEnded();

                if ((res as any as Page).getPageContainer !== undefined) {


                    Object.defineProperty(res.default, 'getPageContainer', (res as any).getPageContainer)
                }

                return res;
            })
    )
}