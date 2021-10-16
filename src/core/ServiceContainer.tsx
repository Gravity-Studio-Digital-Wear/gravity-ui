type constructor<T> = {
    new(...args: any[]): T;
};

export class InjectionToken<W = any> {
    constructor(public tokenString: string) {
    }
}


export class ServiceContainer {
    container: Map<any, any>;

    constructor() {
        this.container = new Map<string, any>();
    }

    public set(token: InjectionToken, instance: any): void
    public set(instance: any): void

    set(...args: any[]) {
        if (args.length === 2) {
            const [token, instance] = args

            this.container.set((token as InjectionToken).tokenString, instance);
        } else {
            const instance = args[0]

            this.container.set(instance.constructor, instance)
        }
    }

    public get<P>(token: InjectionToken<P>): P;
    public get<T>(token: constructor<T>): T;

    get(token: any): any {
        if (token instanceof InjectionToken) {
            return this.container.get(token.tokenString);
        }

        const constructor = token as constructor<any>;

        return this.container.get(constructor)
    }
}