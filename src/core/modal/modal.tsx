import React from "react";
import {useService} from "../decorators/service";
import {ModalService} from "../../services/ModalService";
import {observer} from "mobx-react";
import {LoginModal} from "../../components/LoginModal";

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


function getModalName(r) {
    const modalToken = ((r.type as any).displayName as string).toLowerCase();

    const modalName = modalToken.slice(0, modalToken.indexOf('modal'))

    return modalName;
}

export const ModalProvider = observer(function ModalProvider(props: React.PropsWithChildren<{}>) {
    const modals = useService(ModalService);

    const predefinedModals: React.ReactElement[] = React.useMemo(() => [
        <LoginModal/>
    ], [])


    return (
        <>
            {
                modals.opened.map((modal) => {
                    const openPredefined = predefinedModals
                        .find((r: React.ReactElement) => modal === getModalName(r))

                    if (openPredefined) {
                        const modalKey = getModalName(openPredefined)

                        return (
                            <ModalItem modalKey={modalKey}>
                                {openPredefined}
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