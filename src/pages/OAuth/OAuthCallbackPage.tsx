import * as React from "react";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {useService} from "../../core/decorators/service";
import {MAGIC} from "../../services/service-container";
import {Spinner} from "@chakra-ui/react";
import {AuthService} from "../../services/AuthService";

export const OAuthCallbackPage = observer(() => {
    const history = useHistory();

    const magic = useService(MAGIC);
    const authService = useService(AuthService);


    React.useEffect(() => {
        // On mount, we try to login with a Magic credential in the URL query.
        magic.oauth.getRedirectResult().finally(() => {
            history.push("/");
        });
    }, []);

    return <Spinner/>;
})