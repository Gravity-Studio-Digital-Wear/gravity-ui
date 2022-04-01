import * as React from "react";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {useService} from "../../core/decorators/service";
// import {MAGIC} from "../../services/service-container";
import {sendAmplitudeData} from '../../utils/amplitude'
import {PageSpinner} from "../../components/PageSpinner";
import {Routes} from "../../app/routes";

export const OAuthCallbackPage = observer(() => {
    const history = useHistory();

    // const magic = useService(MAGIC);

    // React.useEffect(() => {
    //     // On mount, we try to login with a Magic credential in the URL query.
    //
    //     magic.oauth.getRedirectResult()
    //         .then(e => {
    //             const provider = e.oauth.provider
    //             sendAmplitudeData('E_LOGIN_SUCCESS', {
    //                 type: provider
    //             })
    //         })
    //         .finally(() => {
    //             history.push(Routes.shop);
    //         });
    // }, []);

    return <PageSpinner/>;
})