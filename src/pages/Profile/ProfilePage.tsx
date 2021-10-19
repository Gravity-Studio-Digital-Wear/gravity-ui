import * as React from 'react';
import {observer} from "mobx-react";
import {Box, Button, Flex, Grid, GridItem, Heading, HStack, Image, Spinner, Stack, Text} from "@chakra-ui/react";
import {IconWallet} from "../../components/icons/IconWallet";
import {IconEdit} from "../../components/icons/IconEdit";
import {ItemCard} from "./ItemCard";
import {useService} from "../../core/decorators/service";
import {AuthService, MagicOAuthProvider} from "../../services/AuthService";
import {useHistory} from "react-router-dom";
import {Routes} from "../../app/routes";
import {ProfileService} from "../../services/ProfileService";
import {PageSpinner} from "../../components/PageSpinner";
import {WarehouseStore} from "../../stores/WarehouseStore";

function WalletAddress({address}: { address: string }) {
    return (
        <HStack>
            <IconWallet/>
            <Text textTransform={'uppercase'} letterSpacing={'0.02em'} color={'primary.500'} fontSize={18}>
                {address}
            </Text>
        </HStack>
    )
}

export const ProfilePage = observer(function ProfilePage() {
    const profile = useService(MagicOAuthProvider)
    const authService = useService(AuthService)
    const profileService = useService(ProfileService)
    const warehouseStore = useService(WarehouseStore)

    const history = useHistory()

    const handleClickEdit = () => {
        history.push(Routes.profileEdit);
    }
    const {wardrobe} = warehouseStore

    React.useEffect(() => {
        wardrobe.request()
    }, [])


    if (!wardrobe.isSuccess) {
        return <PageSpinner/>
    }

    const {name} = profileService.profile;

    return (
        <Grid templateColumns={'repeat(12, 1fr)'} gridGap={'32px'} mt={'60px'}>
            <GridItem gridColumn={'span 2'}>
                <HelloSvg/>
            </GridItem>

            <GridItem gridColumn={'span 10'}>
                <Flex bg={'white'} p={'40px'} position={'relative'}>
                    <Image boxSize={'100px'} src={'/avatar.png'}/>

                    <Stack ml={'30px'}>
                        <Text
                            letterSpacing={'0.02em'}
                            color={'basic.500'}
                            fontSize={25}
                            textTransform={'uppercase'}
                            fontWeight={'bold'}
                        >{name}</Text>

                        <Flex>
                            <WalletAddress address={profile.meta.publicAddress || ''}/>
                        </Flex>
                    </Stack>

                    <Button onClick={handleClickEdit} variant={'square'} position={'absolute'} top={'40px'}
                            right={'40px'}>
                        <IconEdit/>
                    </Button>
                </Flex>

                <Box mt={'40px'}>
                    <Heading textTransform={'uppercase'} fontSize={25} letterSpacing={'0.02em'}>
                        My items {wardrobe.isSuccess ? `(${wardrobe.result.length})` : ''}
                    </Heading>

                    {wardrobe.isSuccess
                        ? (
                            <Grid gridTemplateColumns={'repeat(3, 1fr)'} gap={'30px'}>
                                {wardrobe.result.map(({items: {product}, ticket}) => {
                                    return (
                                        <ItemCard
                                            key={ticket._id}
                                            onClick={() =>
                                                history.push(
                                                    Routes.myItem.replace(':id', ticket._id),
                                                    {prevUrl: history.location.pathname}
                                                )
                                            }
                                            product={product}
                                            ticket={ticket}
                                        />
                                    )
                                })}
                            </Grid>
                        )
                        : (
                            <Box p={8}>
                                <Spinner/>
                            </Box>
                        )
                    }
                </Box>
            </GridItem>
        </Grid>
    )
})

function HelloSvg() {
    return (
        <svg width="166" height="517" viewBox="0 0 166 517" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M129.48 424.903L129.48 425.903L130.48 425.903L130.48 424.903L129.48 424.903ZM49.3912 424.903L48.3912 424.903L48.3912 425.903L49.3912 425.903L49.3912 424.903ZM49.3912 407.932L49.3912 406.932L48.3912 406.932L48.3912 407.932L49.3912 407.932ZM82.0284 407.932L82.0284 408.932L83.0284 408.932L83.0284 407.932L82.0284 407.932ZM82.0284 379.438L83.0284 379.438L83.0284 378.438L82.0284 378.438L82.0284 379.438ZM49.3912 379.438L48.3912 379.438L48.3912 380.438L49.3912 380.438L49.3912 379.438ZM49.3912 362.24L49.3912 361.24L48.3912 361.24L48.3912 362.24L49.3912 362.24ZM129.48 362.24L130.48 362.24L130.48 361.24L129.48 361.24L129.48 362.24ZM129.48 379.438L129.48 380.438L130.48 380.438L130.48 379.438L129.48 379.438ZM97.2969 379.438L97.2969 378.438L96.2969 378.438L96.2969 379.438L97.2969 379.438ZM97.2969 407.932L96.2969 407.932L96.2969 408.932L97.2969 408.932L97.2969 407.932ZM129.48 407.932L130.48 407.932L130.48 406.932L129.48 406.932L129.48 407.932ZM129.48 423.903L49.3912 423.903L49.3912 425.903L129.48 425.903L129.48 423.903ZM50.3912 424.903L50.3912 407.932L48.3912 407.932L48.3912 424.903L50.3912 424.903ZM49.3912 408.932L82.0284 408.932L82.0284 406.932L49.3912 406.932L49.3912 408.932ZM83.0284 407.932L83.0284 379.438L81.0284 379.438L81.0284 407.932L83.0284 407.932ZM82.0284 378.438L49.3912 378.438L49.3912 380.438L82.0284 380.438L82.0284 378.438ZM50.3912 379.438L50.3912 362.24L48.3912 362.24L48.3912 379.438L50.3912 379.438ZM49.3912 363.24L129.48 363.24L129.48 361.24L49.3912 361.24L49.3912 363.24ZM128.48 362.24L128.48 379.438L130.48 379.438L130.48 362.24L128.48 362.24ZM129.48 378.438L97.2969 378.438L97.2969 380.438L129.48 380.438L129.48 378.438ZM96.2969 379.438L96.2969 407.932L98.2969 407.932L98.2969 379.438L96.2969 379.438ZM97.2969 408.932L129.48 408.932L129.48 406.932L97.2969 406.932L97.2969 408.932ZM128.48 407.932L128.48 424.903L130.48 424.903L130.48 407.932L128.48 407.932ZM129.48 342.233L129.48 343.233L130.48 343.233L130.48 342.233L129.48 342.233ZM49.3912 342.233L48.3912 342.233L48.3912 343.233L49.3912 343.233L49.3912 342.233ZM49.3912 291.546L49.3912 290.546L48.3912 290.546L48.3912 291.546L49.3912 291.546ZM64.3759 291.546L65.3759 291.546L65.3759 290.546L64.3759 290.546L64.3759 291.546ZM64.3759 325.261L63.3759 325.261L63.3759 326.261L64.3759 326.261L64.3759 325.261ZM82.6528 325.261L82.6528 326.261L83.6528 326.261L83.6528 325.261L82.6528 325.261ZM82.6528 295.746L82.6528 294.746L81.6528 294.746L81.6528 295.746L82.6528 295.746ZM97.4105 295.746L98.4105 295.746L98.4105 294.746L97.4105 294.746L97.4105 295.746ZM97.4105 325.261L96.4105 325.261L96.4105 326.261L97.4105 326.261L97.4105 325.261ZM114.495 325.261L114.495 326.261L115.495 326.261L115.495 325.261L114.495 325.261ZM114.495 290.524L114.495 289.524L113.495 289.524L113.495 290.524L114.495 290.524ZM129.48 290.524L130.48 290.524L130.48 289.524L129.48 289.524L129.48 290.524ZM129.48 341.233L49.3912 341.233L49.3912 343.233L129.48 343.233L129.48 341.233ZM50.3912 342.233L50.3912 291.546L48.3912 291.546L48.3912 342.233L50.3912 342.233ZM49.3912 292.546L64.3759 292.546L64.3759 290.546L49.3912 290.546L49.3912 292.546ZM63.3759 291.546L63.3759 325.261L65.3759 325.261L65.3759 291.546L63.3759 291.546ZM64.3759 326.261L82.6528 326.261L82.6528 324.261L64.3759 324.261L64.3759 326.261ZM83.6528 325.261L83.6528 295.746L81.6528 295.746L81.6528 325.261L83.6528 325.261ZM82.6528 296.746L97.4105 296.746L97.4105 294.746L82.6528 294.746L82.6528 296.746ZM96.4105 295.746L96.4105 325.261L98.4105 325.261L98.4105 295.746L96.4105 295.746ZM97.4105 326.261L114.495 326.261L114.495 324.261L97.4105 324.261L97.4105 326.261ZM115.495 325.261L115.495 290.524L113.495 290.524L113.495 325.261L115.495 325.261ZM114.495 291.524L129.48 291.524L129.48 289.524L114.495 289.524L114.495 291.524ZM128.48 290.524L128.48 342.233L130.48 342.233L130.48 290.524L128.48 290.524Z"
                fill="#39373E"/>
            <path
                d="M129.48 174.082L129.48 175.082L130.48 175.082L130.48 174.082L129.48 174.082ZM49.3912 174.082L48.3912 174.082L48.3912 175.082L49.3912 175.082L49.3912 174.082ZM49.3912 156.997L49.3912 155.997L48.3912 155.997L48.3912 156.997L49.3912 156.997ZM114.495 156.997L114.495 157.997L115.495 157.997L115.495 156.997L114.495 156.997ZM114.495 127.027L114.495 126.027L113.495 126.027L113.495 127.027L114.495 127.027ZM129.48 127.027L130.48 127.027L130.48 126.027L129.48 126.027L129.48 127.027ZM129.48 173.082L49.3912 173.082L49.3912 175.082L129.48 175.082L129.48 173.082ZM50.3912 174.082L50.3912 156.997L48.3912 156.997L48.3912 174.082L50.3912 174.082ZM49.3912 157.997L114.495 157.997L114.495 155.997L49.3912 155.997L49.3912 157.997ZM115.495 156.997L115.495 127.027L113.495 127.027L113.495 156.997L115.495 156.997ZM114.495 128.027L129.48 128.027L129.48 126.027L114.495 126.027L114.495 128.027ZM128.48 127.027L128.48 174.082L130.48 174.082L130.48 127.027L128.48 127.027ZM68.9735 114.74L69.4702 113.872L69.468 113.871L68.9735 114.74ZM53.9888 100.039L53.1267 100.546L53.1281 100.548L53.9888 100.039ZM68.9735 44.2436L69.468 45.1128L69.4702 45.1115L68.9735 44.2436ZM127.38 95.4414L128.295 95.8437L128.299 95.8354L127.38 95.4414ZM118.582 108.383L119.282 109.097L119.285 109.094L118.582 108.383ZM105.527 116.954L105.913 117.876L105.915 117.875L105.527 116.954ZM106.776 96.2928L107.471 97.0114L107.474 97.0085L106.776 96.2928ZM106.776 62.7475L106.077 63.4631L106.078 63.4632L106.776 62.7475ZM72.4927 62.7475L73.1883 63.4659L73.1911 63.4631L72.4927 62.7475ZM89.6343 119.132C82.3098 119.132 75.595 117.377 69.4702 113.872L68.4768 115.608C74.915 119.292 81.9741 121.132 89.6343 121.132L89.6343 119.132ZM69.468 113.871C63.2987 110.361 58.4306 105.585 54.8495 99.5299L53.1281 100.548C56.888 106.905 62.0097 111.929 68.4791 115.609L69.468 113.871ZM54.8509 99.5322C51.2729 93.446 49.483 86.7915 49.4831 79.5485L47.4831 79.5485C47.483 87.1389 49.3637 94.1447 53.1267 100.546L54.8509 99.5322ZM49.4831 79.5485C49.4831 72.2667 51.2734 65.5934 54.8509 59.5081L53.1267 58.4945C49.3632 64.8964 47.4831 71.9212 47.4831 79.5485L49.4831 79.5485ZM54.8509 59.5081C58.4323 53.4159 63.3002 48.6214 69.468 45.1128L68.4791 43.3744C62.0082 47.0554 56.8863 52.0994 53.1267 58.4945L54.8509 59.5081ZM69.4702 45.1115C75.595 41.6064 82.3098 39.8514 89.6343 39.8514L89.6343 37.8514C81.9741 37.8514 74.915 39.6912 68.4768 43.3757L69.4702 45.1115ZM89.6343 39.8514C96.8813 39.8514 103.558 41.6055 109.685 45.1115L110.678 43.3757C104.242 39.6921 97.2207 37.8514 89.6343 37.8514L89.6343 39.8514ZM109.685 45.1115C115.815 48.6198 120.665 53.4145 124.247 59.5081L125.972 58.4945C122.213 52.1009 117.111 47.0571 110.678 43.3757L109.685 45.1115ZM124.247 59.5081C127.825 65.5935 129.615 72.2668 129.615 79.5485L131.615 79.5485C131.615 71.9213 129.735 64.8964 125.972 58.4945L124.247 59.5081ZM129.615 79.5485C129.615 84.9778 128.563 90.1413 126.461 95.0475L128.299 95.8354C130.51 90.6761 131.615 85.2443 131.615 79.5485L129.615 79.5485ZM126.464 95.0392C124.317 99.9254 121.455 104.133 117.879 107.672L119.285 109.094C123.05 105.367 126.053 100.947 128.295 95.8437L126.464 95.0392ZM117.882 107.668C114.307 111.17 110.063 113.959 105.139 116.032L105.915 117.875C111.057 115.71 115.516 112.786 119.282 109.097L117.882 107.668ZM105.142 116.031C100.194 118.099 95.0273 119.132 89.6343 119.132L89.6343 121.132C95.2906 121.132 100.719 120.047 105.913 117.876L105.142 116.031ZM89.6343 104.161C96.5865 104.161 102.551 101.774 107.471 97.0113L106.08 95.5743C101.54 99.969 96.0775 102.161 89.6343 102.161L89.6343 104.161ZM107.474 97.0085C112.36 92.2408 114.814 86.4009 114.814 79.5485L112.814 79.5485C112.814 85.8646 110.576 91.1876 106.078 95.5771L107.474 97.0085ZM114.814 79.5485C114.814 72.6601 112.362 66.8008 107.474 62.0318L106.078 63.4632C110.575 67.8515 112.814 73.1929 112.814 79.5485L114.814 79.5485ZM107.474 62.0318C102.555 57.2303 96.5891 54.8227 89.6343 54.8227L89.6343 56.8227C96.0749 56.8227 101.537 59.0316 106.077 63.4631L107.474 62.0318ZM89.6343 54.8227C82.6795 54.8227 76.7138 57.2303 71.7942 62.0318L73.1911 63.4631C77.7316 59.0316 83.1937 56.8227 89.6343 56.8227L89.6343 54.8227ZM71.7971 62.029C66.8364 66.8322 64.3409 72.6911 64.3409 79.5485L66.3409 79.5485C66.3409 73.2376 68.6132 67.8957 73.1883 63.4659L71.7971 62.029ZM64.3409 79.5485C64.3409 86.4035 66.8157 92.2442 71.7404 97.0113L73.1314 95.5743C68.596 91.1841 66.3409 85.8619 66.3409 79.5485L64.3409 79.5485ZM71.7404 97.0113C76.6617 101.775 82.6458 104.161 89.6343 104.161L89.6343 102.161C83.1516 102.161 77.6702 99.9678 73.1314 95.5743L71.7404 97.0113ZM113.984 23.6124L114.713 22.927L114.712 22.9265L113.984 23.6124ZM113.984 9.42228L114.712 10.1081L114.719 10.1011L113.984 9.42228ZM127.834 9.42228L127.1 10.1012L127.106 10.1081L127.834 9.42228ZM127.834 23.6124L128.555 24.3052L128.562 24.2982L127.834 23.6124ZM49.3912 25.3719L48.3912 25.3719L48.3912 26.4144L49.4328 26.371L49.3912 25.3719ZM49.3912 7.43565L49.4328 6.43651L48.3912 6.39314L48.3912 7.43565L49.3912 7.43565ZM105.3 9.76285L106.3 9.76285L106.3 8.80359L105.342 8.7637L105.3 9.76285ZM105.3 23.0447L105.342 24.0439L106.3 24.004L106.3 23.0447L105.3 23.0447ZM120.852 25.5071C118.353 25.5071 116.331 24.6467 114.713 22.927L113.256 24.2977C115.27 26.4377 117.828 27.5071 120.852 27.5071L120.852 25.5071ZM114.712 22.9265C113.037 21.1488 112.203 19.0309 112.203 16.5173L110.203 16.5173C110.203 19.5284 111.224 22.1405 113.257 24.2982L114.712 22.9265ZM112.203 16.5173C112.203 14.0038 113.037 11.8858 114.712 10.1081L113.257 8.73648C111.224 10.8941 110.203 13.5062 110.203 16.5173L112.203 16.5173ZM114.719 10.1011C116.384 8.29975 118.408 7.41398 120.852 7.41398L120.852 5.41398C117.848 5.41398 115.293 6.53373 113.25 8.74341L114.719 10.1011ZM120.852 7.41398C123.382 7.41398 125.44 8.30613 127.1 10.1011L128.568 8.74342C126.519 6.52738 123.924 5.41398 120.852 5.41398L120.852 7.41398ZM127.106 10.1081C128.781 11.8858 129.615 14.0038 129.615 16.5173L131.615 16.5173C131.615 13.5062 130.595 10.8941 128.562 8.73649L127.106 10.1081ZM129.615 16.5173C129.615 19.0309 128.781 21.1488 127.106 22.9266L128.562 24.2982C130.595 22.1405 131.615 19.5285 131.615 16.5173L129.615 16.5173ZM127.113 22.9195C125.457 24.6432 123.395 25.5071 120.852 25.5071L120.852 27.5071C123.911 27.5071 126.503 26.4413 128.555 24.3052L127.113 22.9195ZM50.3912 25.3719L50.3912 7.43565L48.3912 7.43565L48.3912 25.3719L50.3912 25.3719ZM49.3496 8.43477L105.259 10.762L105.342 8.7637L49.4328 6.43651L49.3496 8.43477ZM104.3 9.76285L104.3 23.0447L106.3 23.0447L106.3 9.76285L104.3 9.76285ZM105.259 22.0456L49.3496 24.3728L49.4328 26.371L105.342 24.0439L105.259 22.0456Z"
                fill="#39373E"/>
            <path
                d="M73.4187 270.098H72.4187V271.098H73.4187V270.098ZM73.4187 190.009V189.009H72.4187V190.009H73.4187ZM90.5036 190.009H91.5036V189.009H90.5036V190.009ZM90.5036 255.113H89.5036V256.113H90.5036V255.113ZM120.473 255.113H121.473V254.113H120.473V255.113ZM120.473 270.098V271.098H121.473V270.098H120.473ZM74.4187 270.098L74.4187 190.009H72.4187L72.4187 270.098H74.4187ZM73.4187 191.009H90.5036V189.009H73.4187V191.009ZM89.5036 190.009L89.5036 255.113H91.5036L91.5036 190.009H89.5036ZM90.5036 256.113H120.473V254.113H90.5036V256.113ZM119.473 255.113V270.098H121.473V255.113H119.473ZM120.473 269.098H73.4187V271.098H120.473V269.098Z"
                fill="#39373E"/>
        </svg>
    )
}