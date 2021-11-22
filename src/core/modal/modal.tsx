import React from "react";
import {useService} from "../decorators/service";
import {ModalService} from "../../services/ModalService";
import {observer} from "mobx-react";
import {LoginModal, WhatTheDifferenceModal} from "../../components/LoginModal";

export function useModalProps() {
    return React.useContext(ModalContext);
}

export const ModalContext = React.createContext({
    isOpen: true, onClose: () => {
    }
});

function ModalItem({modalKey, children}: React.PropsWithChildren<{ modalKey: string }>) {
    const [isOpen, setOpen] = React.useState(true);
    const modals = useService(ModalService);

    const onClose = () => {
        modals.close(modalKey)
    }

    return (
        <ModalContext.Provider value={{isOpen, onClose}}>
            {children}
        </ModalContext.Provider>
    )
}

export const ModalProvider = observer(function ModalProvider(props: React.PropsWithChildren<{}>) {
    const modals = useService(ModalService);

    const predefinedModals: { key: string, component: React.ReactElement }[] = React.useMemo(() => [
        {
            key: 'login',
            component: <LoginModal/>
        },
        {
            key: 'whatthediff',
            component: <WhatTheDifferenceModal/>
        }
    ], [])

    return (
        <>
            {
                modals.opened.map((modal) => {
                    const openPredefined = predefinedModals
                        .find(({key}) => modal === key)

                    if (openPredefined) {
                        return (
                            <ModalItem key={openPredefined.key} modalKey={openPredefined.key}>
                                {openPredefined.component}
                            </ModalItem>
                        );
                    }

                    return null
                })
            }
            {props.children}
        </>
    )
})