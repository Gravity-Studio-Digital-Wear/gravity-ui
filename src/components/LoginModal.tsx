import * as React from 'react';
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Link,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
    Text,
    useMediaQuery,
    useToken
} from "@chakra-ui/react";
import {IconGoogle} from "./icons/IconGoogle";
import {IconMetamask} from "./icons/IconMetamask";
import {observer} from "mobx-react";
import {useService} from "../core/decorators/service";
import {AuthService, InjectedAuthProvider, MagicOAuthProvider} from "../services/AuthService";
import {OAuthProvider} from "@magic-ext/oauth";
import {useModalProps} from "../core/modal/modal";
import {ProfileService} from "../services/ProfileService";
import {GravityApplication} from "../app/Application";
import {sendAmplitudeData} from '../utils/amplitude'
import {isMetamaskAvailable} from "../utils/ethereum";
import {ModalService} from "../services/ModalService";

export const LoginModal = observer(function LoginModal() {
    const magicOAuthProvider = useService(MagicOAuthProvider);
    const injectedProvider = useService(InjectedAuthProvider);
    const gravityApplication = useService(GravityApplication);

    const authService = useService(AuthService);
    const profileService = useService(ProfileService);
    const modalService = useService(ModalService)

    const modalProps = useModalProps();

    const [md] = useToken(
        'breakpoints',
        ['md']
    );

    const [isLargerThanMd] = useMediaQuery(`(min-width: ${md})`)

    const isMetamask = React.useMemo(() => isMetamaskAvailable(), []);

    const login = (provider: OAuthProvider) => {
        gravityApplication.setCachedProvider('magic');

        sendAmplitudeData('E_LOGIN_ATTEMPT', {
            type: provider
        })

        setTimeout(() => {
            magicOAuthProvider.authenticate(provider);
        })
    }

    const loginWithMetamask = async () => {
        sendAmplitudeData('E_LOGIN_ATTEMPT', {
            type: 'metamask'
        })

        await injectedProvider.authenticate();
        await authService.authenticate(injectedProvider.publicAddress);
        await profileService.getProfile()

        authService.ensureAuthSuccess();

        gravityApplication.setCachedProvider('injected');

        sendAmplitudeData('E_LOGIN_SUCCESS', {
            type: 'metamask'
        })

        modalProps.onClose()
    }

    return (
        <Modal {...modalProps}>
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton/>

                <Flex flexDirection={'column'} alignItems={'center'} padding={'30px'} position={'relative'} py={'60px'}>
                    {isLargerThanMd && (
                        <Box position={'absolute'} left={'0'}>
                            <LoginSvg/>
                        </Box>
                    )}

                    <Heading fontSize={70} fontWeight={'bold'} letterSpacing={'0.05em'} textTransform={'uppercase'}>
                        Login
                    </Heading>

                    <Text fontSize={16} my={'32px'}>
                        To purchase, you need to log in
                    </Text>

                    <Box mb={'32px'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
                        <Button w={'316px'}
                                isDisabled={!isMetamask}
                                border={'1px solid'}
                                borderColor={'basic.500'}
                                bg={'#F6851B'}
                                _disabled={{
                                    bg: '#F6851B',
                                    opacity: .7,
                                    _hover: {
                                        cursor: 'initial'
                                    }
                                }}
                                onClick={() => loginWithMetamask()}
                                letterSpacing={'0.02em'}
                                leftIcon={<IconMetamask/>}
                        >
                            Login with metamask
                        </Button>


                        {!isMetamask && <Text mt={'16px'}>Available only through Desktop Google Chrome browser</Text>}
                    </Box>

                    <Divider width={'160px'} bg={'basic.100'}/>

                    <Stack spacing={'16px'} mt={'32px'}>
                        <Button w={'316px'}
                                border={'1px solid'}
                                borderColor={'basic.500'}
                                onClick={() => login('google')}
                                bg={'#fffff'}
                                letterSpacing={'0.02em'} color={'basic.500'} leftIcon={<IconGoogle/>}>Login with
                            google</Button>
                    </Stack>


                    <Link onClick={() => modalService.open('whatthediff')} textTransform={'uppercase'}
                          letterSpacing={'0.07em'} color={'primary.500'} mt={'32px'}>
                        <Text as={'span'} borderBottom={'1px solid'} borderColor={'primary.500'}>WHAT THE
                            DIFFERENCE?</Text>
                    </Link>
                </Flex>
            </ModalContent>
        </Modal>
    )
})


export function WhatTheDifferenceModal() {
    const modalProps = useModalProps();

    return (
        <Modal {...modalProps}>
            <ModalOverlay/>
            <ModalContent>
                <ModalCloseButton/>

                <Box py={'88px'} textTransform={'uppercase'}>
                    <Text fontWeight={'bold'} fontSize={25} mb={'24px'}>What the difference?</Text>

                    <Text mb={'16px'} fontWeight={'bold'} fontSize={18} letterSpacing={'0.02em'}>Metamask Account
                        (Recommended)</Text>

                    <Text mb={'24px'}>A crypto-wallet that sits securely in your web browser.
                        If you would like to set up your own Metamask wallet, please the following instructions. This
                        wallet
                        will allow you to enjoy the full GravityTheStudio experience.
                    </Text>

                    <Text mb={'16px'} fontWeight={'bold'} fontSize={18} letterSpacing={'0.02em'}>
                        Google and Facebook Account
                    </Text>

                    <Text>We create you a cloud crypto-wallet.
                        Note: This wallet cannot be exported from GravityTheStudio, Hence you will not be able to use
                        this
                        wallet when trying to buy/sell NFTs in a 3rd party marketplace.</Text>
                </Box>
            </ModalContent>
        </Modal>
    )
}


function LoginSvg() {
    return (
        <svg width="166" height="424" viewBox="0 0 166 424" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M129.48 413.251L129.48 414.251L130.48 414.251L130.48 413.251L129.48 413.251ZM49.3912 413.251L48.3912 413.251L48.3912 414.251L49.3912 414.251L49.3912 413.251ZM49.3912 396.166L49.3912 395.166L48.3912 395.166L48.3912 396.166L49.3912 396.166ZM114.495 396.166L114.495 397.166L115.495 397.166L115.495 396.166L114.495 396.166ZM114.495 366.197L114.495 365.197L113.495 365.197L113.495 366.197L114.495 366.197ZM129.48 366.197L130.48 366.197L130.48 365.197L129.48 365.197L129.48 366.197ZM129.48 412.251L49.3912 412.251L49.3912 414.251L129.48 414.251L129.48 412.251ZM50.3912 413.251L50.3912 396.166L48.3912 396.166L48.3912 413.251L50.3912 413.251ZM49.3912 397.166L114.495 397.166L114.495 395.166L49.3912 395.166L49.3912 397.166ZM115.495 396.166L115.495 366.197L113.495 366.197L113.495 396.166L115.495 396.166ZM114.495 367.197L129.48 367.197L129.48 365.197L114.495 365.197L114.495 367.197ZM128.48 366.197L128.48 413.251L130.48 413.251L130.48 366.197L128.48 366.197ZM68.9735 353.909L69.4702 353.042L69.4679 353.04L68.9735 353.909ZM53.9888 339.209L53.1267 339.715L53.128 339.718L53.9888 339.209ZM68.9735 283.413L69.468 284.282L69.4702 284.281L68.9735 283.413ZM127.38 334.611L128.295 335.013L128.299 335.005L127.38 334.611ZM118.582 347.552L119.282 348.267L119.285 348.263L118.582 347.552ZM105.527 356.123L105.913 357.046L105.915 357.045L105.527 356.123ZM106.776 335.462L107.471 336.181L107.474 336.178L106.776 335.462ZM106.776 301.917L106.077 302.633L106.077 302.633L106.776 301.917ZM72.4926 301.917L73.1883 302.635L73.1911 302.633L72.4926 301.917ZM89.6342 358.302C82.3097 358.302 75.595 356.547 69.4702 353.042L68.4768 354.777C74.915 358.462 81.974 360.302 89.6342 360.302L89.6342 358.302ZM69.4679 353.04C63.2987 349.531 58.4306 344.754 54.8495 338.699L53.128 339.718C56.888 346.075 62.0097 351.099 68.479 354.779L69.4679 353.04ZM54.8508 338.702C51.2729 332.616 49.483 325.961 49.483 318.718L47.483 318.718C47.483 326.308 49.3636 333.314 53.1267 339.715L54.8508 338.702ZM49.483 318.718C49.483 311.436 51.2734 304.763 54.8508 298.678L53.1267 297.664C49.3632 304.066 47.483 311.091 47.483 318.718L49.483 318.718ZM54.8508 298.678C58.4323 292.585 63.3002 287.791 69.468 284.282L68.4791 282.544C62.0082 286.225 56.8863 291.269 53.1267 297.664L54.8508 298.678ZM69.4702 284.281C75.595 280.776 82.3097 279.021 89.6343 279.021L89.6343 277.021C81.9741 277.021 74.915 278.861 68.4768 282.545L69.4702 284.281ZM89.6343 279.021C96.8812 279.021 103.558 280.775 109.685 284.281L110.678 282.545C104.242 278.862 97.2207 277.021 89.6343 277.021L89.6343 279.021ZM109.685 284.281C115.815 287.789 120.665 292.584 124.247 298.678L125.972 297.664C122.213 291.27 117.111 286.227 110.678 282.545L109.685 284.281ZM124.247 298.678C127.825 304.763 129.615 311.436 129.615 318.718L131.615 318.718C131.615 311.091 129.735 304.066 125.972 297.664L124.247 298.678ZM129.615 318.718C129.615 324.147 128.563 329.311 126.461 334.217L128.299 335.005C130.51 329.846 131.615 324.414 131.615 318.718L129.615 318.718ZM126.464 334.209C124.317 339.095 121.455 343.302 117.879 346.842L119.285 348.263C123.05 344.537 126.053 340.117 128.295 335.013L126.464 334.209ZM117.882 346.838C114.307 350.339 110.063 353.128 105.139 355.202L105.915 357.045C111.057 354.88 115.516 351.955 119.282 348.267L117.882 346.838ZM105.142 355.2C100.194 357.268 95.0273 358.302 89.6342 358.302L89.6342 360.302C95.2906 360.302 100.719 359.216 105.913 357.046L105.142 355.2ZM89.6342 343.33C96.5865 343.33 102.551 340.944 107.471 336.181L106.08 334.744C101.54 339.139 96.0774 341.33 89.6342 341.33L89.6342 343.33ZM107.474 336.178C112.36 331.41 114.814 325.57 114.814 318.718L112.814 318.718C112.814 325.034 110.576 330.357 106.077 334.747L107.474 336.178ZM114.814 318.718C114.814 311.83 112.362 305.97 107.474 301.201L106.077 302.633C110.575 307.021 112.814 312.362 112.814 318.718L114.814 318.718ZM107.474 301.201C102.555 296.4 96.5891 293.992 89.6343 293.992L89.6343 295.992C96.0749 295.992 101.537 298.201 106.077 302.633L107.474 301.201ZM89.6343 293.992C82.6794 293.992 76.7138 296.4 71.7942 301.201L73.1911 302.633C77.7316 298.201 83.1937 295.992 89.6343 295.992L89.6343 293.992ZM71.797 301.199C66.8364 306.002 64.3408 311.861 64.3408 318.718L66.3408 318.718C66.3408 312.407 68.6132 307.065 73.1883 302.635L71.797 301.199ZM64.3408 318.718C64.3408 325.573 66.8157 331.414 71.7404 336.181L73.1314 334.744C68.596 330.354 66.3408 325.031 66.3408 318.718L64.3408 318.718ZM71.7404 336.181C76.6617 340.945 82.6458 343.33 89.6342 343.33L89.6342 341.33C83.1516 341.33 77.6701 339.137 73.1314 334.744L71.7404 336.181ZM68.9735 261.931L68.4751 262.797L68.4768 262.798L68.9735 261.931ZM53.9888 247.059L53.1241 247.562L53.1254 247.564L53.9888 247.059ZM52.0022 209.37L52.9144 209.78L52.9168 209.775L52.0022 209.37ZM61.5947 196.202L62.353 195.55L61.6971 194.787L60.9382 195.448L61.5947 196.202ZM72.3791 208.746L73.0432 209.494L73.779 208.84L73.1374 208.094L72.3791 208.746ZM76.92 247.116L76.4423 247.995L76.4489 247.998L76.92 247.116ZM102.349 247.116L102.82 247.998L102.83 247.993L102.349 247.116ZM113.417 217.487L112.481 217.84L113.417 217.487ZM108.535 210.052L107.847 210.777L107.848 210.778L108.535 210.052ZM101.213 206.873L101.227 205.873L100.213 205.859L100.213 206.873L101.213 206.873ZM101.213 228.385L101.213 229.385L102.213 229.385L102.213 228.385L101.213 228.385ZM87.4206 228.385L86.4206 228.385L86.4206 229.385L87.4206 229.385L87.4206 228.385ZM87.4206 187.234L87.4206 186.234L86.4206 186.234L86.4206 187.234L87.4206 187.234ZM120.285 198.132L119.574 198.835L120.285 198.132ZM128.061 210.449L129.001 210.108L129 210.104L128.061 210.449ZM127.38 242.405L128.298 242.802L128.301 242.794L127.38 242.405ZM118.582 255.46L119.285 256.171L118.582 255.46ZM105.527 264.144L105.915 265.066L105.921 265.063L105.527 264.144ZM89.6343 266.323C82.3097 266.323 75.595 264.568 69.4702 261.063L68.4768 262.798C74.915 266.483 81.9741 268.323 89.6343 268.323L89.6343 266.323ZM69.4719 261.064C63.3035 257.518 58.4345 252.685 54.8522 246.555L53.1254 247.564C56.8841 253.996 62.0049 259.078 68.4751 262.797L69.4719 261.064ZM54.8535 246.557C51.2744 240.395 49.483 233.644 49.483 226.285L47.483 226.285C47.483 233.986 49.3622 241.085 53.1241 247.562L54.8535 246.557ZM49.483 226.285C49.483 220.364 50.6295 214.866 52.9144 209.78L51.09 208.961C48.6827 214.319 47.483 220.098 47.483 226.285L49.483 226.285ZM52.9168 209.775C55.169 204.68 58.2811 200.412 62.2512 196.956L60.9382 195.448C56.7348 199.106 53.4519 203.617 51.0876 208.966L52.9168 209.775ZM60.8364 196.854L71.6209 209.398L73.1374 208.094L62.353 195.55L60.8364 196.854ZM71.7151 207.998C66.1026 212.983 63.2624 219.096 63.2624 226.285L65.2624 226.285C65.2624 219.7 67.8334 214.121 73.0432 209.494L71.7151 207.998ZM63.2624 226.285C63.2624 230.893 64.4468 235.125 66.8176 238.958L68.5185 237.906C66.3485 234.397 65.2624 230.532 65.2624 226.285L63.2624 226.285ZM66.8176 238.958C69.1821 242.78 72.3964 245.795 76.4423 247.995L77.3976 246.238C73.6484 244.199 70.6948 241.424 68.5185 237.906L66.8176 238.958ZM76.4489 247.998C80.4968 250.16 84.8975 251.238 89.6343 251.238L89.6343 249.238C85.2137 249.238 81.1382 248.235 77.391 246.234L76.4489 247.998ZM89.6343 251.238C94.3711 251.238 98.7718 250.16 102.82 247.998L101.878 246.234C98.1303 248.235 94.0548 249.238 89.6343 249.238L89.6343 251.238ZM102.83 247.993C106.836 245.793 110.047 242.781 112.447 238.964L110.754 237.899C108.538 241.424 105.58 244.201 101.867 246.239L102.83 247.993ZM112.447 238.964C114.858 235.131 116.063 230.897 116.063 226.285L114.063 226.285C114.063 230.528 112.96 234.392 110.754 237.899L112.447 238.964ZM116.063 226.285C116.063 223.207 115.49 220.155 114.353 217.135L112.481 217.84C113.538 220.647 114.063 223.46 114.063 226.285L116.063 226.285ZM114.353 217.135C113.205 214.086 111.495 211.478 109.223 209.326L107.848 210.778C109.889 212.712 111.434 215.061 112.481 217.84L114.353 217.135ZM109.224 209.326C106.871 207.095 104.197 205.915 101.227 205.873L101.199 207.873C103.603 207.907 105.81 208.845 107.847 210.777L109.224 209.326ZM100.213 206.873L100.213 228.385L102.213 228.385L102.213 206.873L100.213 206.873ZM101.213 227.385L87.4206 227.385L87.4206 229.385L101.213 229.385L101.213 227.385ZM88.4206 228.385L88.4206 187.234L86.4206 187.234L86.4206 228.385L88.4206 228.385ZM87.4206 188.234C94.6783 188.234 101.017 189.169 106.454 191.019L107.098 189.125C101.41 187.19 94.845 186.234 87.4206 186.234L87.4206 188.234ZM106.454 191.019C111.899 192.871 116.259 195.484 119.574 198.835L120.996 197.429C117.424 193.817 112.778 191.057 107.098 189.125L106.454 191.019ZM119.574 198.835C122.914 202.212 125.43 206.194 127.123 210.794L129 210.104C127.211 205.243 124.543 201.015 120.996 197.429L119.574 198.835ZM127.121 210.79C128.778 215.356 129.615 220.516 129.615 226.285L131.615 226.285C131.615 220.323 130.75 214.927 129.001 210.108L127.121 210.79ZM129.615 226.285C129.615 231.792 128.563 237.033 126.459 242.016L128.301 242.794C130.511 237.56 131.615 232.055 131.615 226.285L129.615 226.285ZM126.462 242.008C124.315 246.969 121.452 251.212 117.879 254.749L119.285 256.171C123.053 252.442 126.056 247.982 128.298 242.802L126.462 242.008ZM117.879 254.749C114.303 258.288 110.058 261.115 105.133 263.225L105.921 265.063C111.062 262.86 115.521 259.897 119.285 256.171L117.879 254.749ZM105.139 263.223C100.232 265.289 95.0661 266.323 89.6343 266.323L89.6343 268.323C95.3275 268.323 100.757 267.238 105.915 265.066L105.139 263.223Z"
                fill="#39373E"/>
            <path
                d="M129.48 69.4747L129.48 70.4747L130.48 70.4747L130.48 69.4747L129.48 69.4747ZM49.3912 69.4747L48.3912 69.4747L48.3912 70.4747L49.3912 70.4747L49.3912 69.4747ZM49.3912 53.9223L48.8937 53.0549L48.3912 53.343L48.3912 53.9223L49.3912 53.9223ZM97.2969 26.4503L97.7944 27.3178L101.051 25.4503L97.2969 25.4503L97.2969 26.4503ZM49.3912 26.4503L48.3912 26.4503L48.3912 27.4503L49.3912 27.4503L49.3912 26.4503ZM49.3912 9.36547L49.3912 8.36547L48.3912 8.36547L48.3912 9.36547L49.3912 9.36547ZM129.48 9.3655L130.48 9.3655L130.48 8.3655L129.48 8.3655L129.48 9.3655ZM129.48 24.634L129.978 25.501L130.48 25.2126L130.48 24.634L129.48 24.634ZM81.0067 52.5033L80.5082 51.6364L77.2611 53.5033L81.0067 53.5033L81.0067 52.5033ZM129.48 52.5034L130.48 52.5034L130.48 51.5034L129.48 51.5034L129.48 52.5034ZM129.48 68.4747L49.3912 68.4747L49.3912 70.4747L129.48 70.4747L129.48 68.4747ZM50.3912 69.4747L50.3912 53.9223L48.3912 53.9223L48.3912 69.4747L50.3912 69.4747ZM49.8886 54.7898L97.7944 27.3178L96.7994 25.5829L48.8937 53.0549L49.8886 54.7898ZM97.2969 25.4503L49.3912 25.4503L49.3912 27.4503L97.2969 27.4503L97.2969 25.4503ZM50.3912 26.4503L50.3912 9.36547L48.3912 9.36547L48.3912 26.4503L50.3912 26.4503ZM49.3912 10.3655L129.48 10.3655L129.48 8.3655L49.3912 8.36547L49.3912 10.3655ZM128.48 9.36549L128.48 24.634L130.48 24.634L130.48 9.3655L128.48 9.36549ZM128.982 23.7671L80.5082 51.6364L81.5051 53.3703L129.978 25.501L128.982 23.7671ZM81.0067 53.5033L129.48 53.5034L129.48 51.5034L81.0067 51.5033L81.0067 53.5033ZM128.48 52.5034L128.48 69.4747L130.48 69.4747L130.48 52.5034L128.48 52.5034Z"
                fill="#39373E"/>
            <path
                d="M81.3621 170.323H80.3621V171.323H81.3621V170.323ZM81.3621 90.2339V89.2339H80.3621V90.2339H81.3621ZM98.3334 90.2339H99.3334V89.2339H98.3334V90.2339ZM98.3334 170.323V171.323H99.3334V170.323H98.3334ZM82.3621 170.323L82.3621 90.2339H80.3621L80.3621 170.323H82.3621ZM81.3621 91.2339H98.3334V89.2339H81.3621V91.2339ZM97.3334 90.2339L97.3334 170.323H99.3334L99.3334 90.2339H97.3334ZM98.3334 169.323H81.3621V171.323H98.3334V169.323Z"
                fill="#39373E"/>
        </svg>
    )
}