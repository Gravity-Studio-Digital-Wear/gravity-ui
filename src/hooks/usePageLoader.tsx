import {useService} from "../core/decorators/service";
import {PageLoadingStore} from "../stores/PageLoadingStore";
import React from "react";


type UsePageLoaderOptions = {
    breakpoints: { [key: string]: number }
}

export function usePageLoader(options: UsePageLoaderOptions) {
    const store = useService(PageLoadingStore);

    React.useEffect(() => {
        for (const p of Object.keys(options.breakpoints)) {
            store.breakpoint(p, options.breakpoints[p]);
        }
    }, [])

    return store;
}