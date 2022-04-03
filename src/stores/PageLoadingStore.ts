import {action, computed, makeAutoObservable, observable, reaction} from "mobx";

type LoadingBreakpoint = {
    name: string;
    value: number;
    done: boolean;
}

export class PageLoadingStore {
    @observable breakpoints = new Map<string, LoadingBreakpoint>();

    constructor() {
        makeAutoObservable(this);
    }

    @action
    breakpoint(name: string, value: number) {
        this.breakpoints.set(name, {
            name,
            value,
            done: false
        })
    }

    @action
    done(name: string) {
        const breakpoint = this.breakpoints.get(name)

        if (!breakpoint) {
            return;
        }

        breakpoint.done = true;

        this.breakpoints.set(name, breakpoint);
    }

    @action
    clear() {
        this.breakpoints.clear();
    }

    @computed
    public get maxValue() {
        let result = 0;
        for (const [key, breakpoint] of this.breakpoints.entries()) {

            result += breakpoint.value
        }

        return result > 0 ? result : 1;
    }

    @computed
    public get value() {
        let result = 0;
        for (const [key, breakpoint] of this.breakpoints.entries()) {
            if (breakpoint.done) {
                result += breakpoint.value
            }
        }

        return (result / this.maxValue) * 100;
    }

    @computed
    get isPageLoaded() {
        return this.value >= 100;
    }
}