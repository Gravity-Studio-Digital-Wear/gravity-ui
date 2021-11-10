import * as  React from 'react';
import { withRouter } from 'react-router-dom';

export function BaseScrollRestoration({ history }) {
    React.useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return null;
}

export const ScrollRestoration = withRouter(BaseScrollRestoration);