import * as React from 'react';
import {observer, useLocalObservable} from "mobx-react";
import {useService} from "../../core/decorators/service";
import {WarehouseStore} from "../../stores/WarehouseStore";
import {Link as RouterLink, RouteChildrenProps, useHistory} from "react-router-dom";
import {PageSpinner} from "../../components/PageSpinner";
import {
    Box,
    Button,
    Flex,
    FormControl,
    Grid,
    GridItem,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Text,
    useMediaQuery,
    useToken
} from "@chakra-ui/react";
import {useDropzone} from "react-dropzone";
import {WaredrobeService} from "../../services/WaredrobeService";
import {TicketStatus} from "./TicketStatus";
import {Routes} from "../../app/routes";
import {IconBack} from "../../components/icons/IconBack";
import {processImgUrl, processUploadImgUrl} from "../../utils/imageUrl";
import SwiperCore, {Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {sendAmplitudeData} from '../../utils/amplitude'
import {TransparentVideo} from "../../components/TransparentVideo";
import {GravityApplication} from "../../app/Application";

/// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Navigation, Keyboard]);

export const ProfileItemPage = observer(function ProfileItemPage({match}: RouteChildrenProps<{ id: string }>) {
    const warehouseStore = useService(WarehouseStore)
    const waredrobeService = useService(WaredrobeService)
    const history = useHistory<{ prevUrl: string }>();

    const [primary500, white] = useToken(
        'colors',
        ['primary.500', 'white']
    )


    const onDrop = React.useCallback(acceptedFiles => {
        console.log(acceptedFiles)

        // Do something with the files
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const imageStore = useLocalObservable(() => ({
        images: [] as string[],
        add: (img: { url: string }) => {
            imageStore.images = [...imageStore.images, processUploadImgUrl(img.url)]
        },
        remove: (imgUrl) => {
            imageStore.images = [...imageStore.images.filter(img => img !== imgUrl)];
        }
    }))

    const [widget] = React.useState((fn: (err, result) => void) => {
        // @ts-ignore
        return window.cloudinary.createUploadWidget(
            {
                cloudName: 'easychain-img',

                uploadPreset: 'default_upload_preset',
                sources: [
                    "local",
                    "url",
                    "camera",
                    "image_search",
                    "google_drive",
                    "facebook",
                    "dropbox",
                    "instagram",
                ],
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    if (imageStore.images.length === 0) {
                        sendAmplitudeData('E_WEARING_REQUEST_STARTED')
                    }
                    imageStore.add(result.info)
                    sendAmplitudeData('E_WEARING_REQUEST_PHOTO_ADDED')
                }
            }
        )
    })
    const app = useService(GravityApplication)
    const [md] = useToken(
        'breakpoints',
        ['md']
    );

    const [isLargerThanMd] = useMediaQuery(`(min-width: ${md})`)

    React.useEffect(() => {
        // warehouseStore.productItem.request(match.params.id)

        warehouseStore.wardrobe.request()
    }, []);


    if (!warehouseStore.wardrobe.isSuccess) {
        return <PageSpinner/>
    }

    const {ticket, items: {product}} = warehouseStore.wardrobe.result.find(({ticket}) => ticket._id === match.params.id)

    const images = app.isSafari ? product.images.slice(1) : product.images;


    const imageCarousel = (
        <Swiper
            direction={isLargerThanMd ? 'vertical' : 'horizontal'}
            height={700}
            slidesPerView={1}
            mousewheel
            pagination={{
                "clickable": true
            }}
        >
            {images.map((image: string) => {
                return (
                    <SwiperSlide key={image}>
                        {image.slice(-4) === 'webm'
                            ? (
                                <figure>
                                    <video
                                        playsInline muted
                                        onMouseOver={(event) => (event.target as any).play()}
                                        onMouseOut={event => {
                                            (event.target as any).pause();
                                            (event.target as any).currentTime = 0
                                        }}
                                    >
                                        <source src={processImgUrl(image)} type="video/webm"/>
                                    </video>
                                </figure>
                            )
                            : (
                                <Image
                                    key={image}
                                    width={'100%'}
                                    src={image}
                                />
                            )}
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )

    const uploadResult = () => {
        if (imageStore.images.length === 0) {
            return;
        }

        waredrobeService.wear(ticket._id, imageStore.images)
            .then(() => {
                warehouseStore.wardrobe.refetch()
            })
    }

    return (
        <Box px={{base: '17px', md: 0}} pb={{base: '80px', md: 0}}>
            <Flex>
                <Link as={RouterLink} to={history.location.state?.prevUrl || Routes.profile} fontSize={18}
                      textTransform={'uppercase'}
                      textDecoration={'none'} display={'flex'} alignItems={'center'}>
                    <IconBack/>
                    <Text as={'span'} ml={'12px'}>Go Back</Text>
                </Link>
            </Flex>
            <Grid templateColumns={'repeat(12, 1fr)'}
                  gridGap={'20px'}
                  mt={{base: '33px', md: '84px'}}
            >
                <GridItem gridColumn={{base: 'span 12', md: 'span 7'}}>
                    <Box position={'relative'}
                         maxH={{base: '380px', md: '700px'}}
                         overflow={'hidden'}
                         sx={{
                             '.swiper-container': {position: 'initial'},
                             '.swiper-pagination-bullets': {
                                 left: 0,
                                 right: 'auto'
                             },
                             '.swiper-pagination-bullet': {
                                 w: isLargerThanMd ? '6px' : '24px',
                                 h: isLargerThanMd ? '24px' : '6px',
                                 borderRadius: 0,
                                 right: 'auto',
                                 bg: 'linear-gradient(180deg, #7B61FF 0%, #523774 94.9%)'
                             },
                             '.swiper-pagination-bullet-active': {
                                 bg: primary500
                             }
                         }}
                    >
                        <Box position={'absolute'} top={0} right={{base: 2, md: 24}}>
                            <TicketStatus status={ticket.status}/>
                        </Box>

                        <Box overflow={'hidden'} maxH={'700px'}>
                            {imageCarousel}
                        </Box>
                    </Box>
                </GridItem>
                <GridItem gridColumn={{base: 'span 12', md: 'span 5'}}>
                    <Box
                        bg={{base: 'white', md: 'transparent'}}
                        mx={{base: '-17px', md: 0}}
                        p={{base: '16px', md: 0}}
                        pb={{base: '84px', md: 0}}
                    >
                        <Stack
                            spacing={'16px'}
                        >
                            <Heading as={'h1'} fontSize={43} textTransform={'uppercase'}
                                     letterSpacing={'0.01em'}> {product.name}</Heading>

                            <Text fontSize={'16px'}>
                                {product.description}
                            </Text>

                            <Link href={Routes.howItWorks} color={'primary.500'} textTransform={'uppercase'}
                                  letterSpacing={'0.07em'}>
                                <Text as={'span'} borderBottom={'1px solid'} borderColor={'primary.500'}>How to wear
                                    it?</Text>
                            </Link>
                        </Stack>

                        {ticket.status === 'NEW' && (
                            <Stack spacing={'16px'} mt={'30px'}>
                                <Text textTransform={'uppercase'}
                                      color={'basic.500'}
                                      fontWeight={'bold'}
                                      letterSpacing={'0.02em'}
                                >Upload your photo</Text>

                                <div {...getRootProps()} onClick={() => widget.open()}>
                                    <input {...getInputProps()} />

                                    <Flex justifyContent={'center'} px={'72px'} py={'21px'} border={'1px dashed'}
                                          borderColor={'primary.500'}>
                                        <Text textTransform={'uppercase'} letterSpacing={'0.02em'} fontSize={'16px'}
                                              color={'basic.500'}>
                                            upload up to 5 photos and We’LL choose the Best one for
                                            you

                                            <br/>

                                            <Link as={'span'}
                                                  color={'primary.500'}
                                                  textDecoration={'underline'}>click here</Link>
                                        </Text>
                                    </Flex>
                                </div>

                                <HStack spacing={'8px'}>
                                    {imageStore.images.map(img => {
                                        return (
                                            <Box key={img} position={'relative'}>
                                                <Image src={img} boxSize={'83px'}/>

                                                <Button
                                                    onClick={() => imageStore.remove(img)}
                                                    bg={'primary.500'}
                                                    height={'16px'}
                                                    width={'16px'}
                                                    variant={'square'}
                                                    position={'absolute'}
                                                    top={'8px'}
                                                    right={'8px'}>
                                                    <CloseIcon/>
                                                </Button>
                                            </Box>
                                        )
                                    })}
                                </HStack>

                                <Text>See our photo recommendations <Link href={Routes.howItWorks} as={'a'} color={'primary.500'}
                                                                          textDecoration={'underline'}>here</Link>.</Text>


                                <Button onClick={() => uploadResult()}>Redeem wear</Button>
                            </Stack>
                        )}
                    </Box>
                </GridItem>

                <GridItem gridColumn={'span 12'}>
                    {ticket.status !== 'NEW' && (
                        <Box>
                            <Heading letterSpacing={'0.01em'} color={'basic.500'} textTransform={'uppercase'}
                                     fontWeight={'bold'} fontSize={{base: 25, md: 43}}>Your photo</Heading>

                            {ticket.status === 'REJECTED' && (
                                <Text color={'alert'} mt={'16px'}>
                                    The photos you uploaded are not suitable. Try downloading others where there will be more light
                                </Text>
                            )}

                            <Grid templateColumns={'repeat(2, 1fr)'} mt={'24px'}>
                                <GridItem>
                                    <Text letterSpacing={'0.02em'} textTransform={'uppercase'} fontWeight={'bold'}
                                          color={'basic.500'} fontSize={16}>Uploaded photos</Text>
                                    <HStack mt={'8px'}>
                                        {ticket.sourceImageLinks.map(img => {
                                            return (
                                                <Box key={img} position={'relative'}>
                                                    <Image src={img} boxSize={'83px'}/>

                                                    {ticket.status === 'REJECTED' && (
                                                        <Box position={'absolute'} top={'0'} w={'100%'} h={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                                            <RefusedTip/>
                                                        </Box>
                                                    )}
                                                </Box>
                                            )
                                        })}
                                    </HStack>
                                </GridItem>

                                {/*<GridItem>*/}
                                {/*    <Text letterSpacing={'0.02em'} textTransform={'uppercase'} fontWeight={'bold'} fontSize={16}>Share a Link</Text>*/}
                                {/*    */}
                                {/*    <Link>*/}
                                {/*        <Flex></Flex>*/}
                                {/*    </Link>*/}
                                {/*</GridItem>*/}
                            </Grid>

                        </Box>
                    )}


                    {(ticket.status === 'DONE' || ticket.status === 'PROCESSING') && (
                        <Box mt={'36px'}>
                            <Flex>
                                <Heading letterSpacing={'0.01em'} color={'basic.500'} textTransform={'uppercase'}
                                         fontWeight={'bold'} fontSize={{base: 25, md: 43}}>Result</Heading>

                            </Flex>

                            {ticket.status === 'PROCESSING' && (
                                <Flex bg={'basic.100'} alignItems={'center'} flexDirection={'column'} py={'96px'}
                                      mt={'24px'}>
                                    <Image width={'156px'} src={'/processing.png'} mixBlendMode={'darken'}/>

                                    <Text mt={'24px'} textTransform={'uppercase'} letterSpacing={'0.02em'}
                                          color={'basic.500'}>photo is processing</Text>
                                </Flex>
                            )}

                            {ticket.status === 'DONE' && (
                                <Stack mt={'36px'}>
                                    {ticket.resultImageLinks.map(img => {
                                        return (
                                            <Box key={img} position={'relative'}>
                                                <Image src={img} width={{base: '100%', md: '350px'}}/>
                                            </Box>
                                        )
                                    })}
                                </Stack>
                            )}
                        </Box>
                    )}


                    {ticket.status === 'REJECTED' && (
                        <Box mt={'36px'}>
                            <Grid templateColumns={'repeat(2, 1fr)'}>
                                <GridItem>
                                    <Text textTransform={'uppercase'}
                                          color={'basic.500'}
                                          fontWeight={'bold'}
                                          mb={'16px'}
                                          letterSpacing={'0.02em'}
                                    >Upload new photos</Text>

                                    <UploadImages onAdd={image => imageStore.add(image)}/>

                                    <HStack spacing={'8px'} mt={'24px'}>
                                        {imageStore.images.map(img => {
                                            return (
                                                <Box key={img} position={'relative'}>
                                                    <Image src={img} boxSize={'83px'}/>

                                                    <Button
                                                        onClick={() => imageStore.remove(img)}
                                                        bg={'primary.500'}
                                                        height={'16px'}
                                                        width={'16px'}
                                                        variant={'square'}
                                                        position={'absolute'}
                                                        top={'8px'}
                                                        right={'8px'}>
                                                        <CloseIcon/>
                                                    </Button>
                                                </Box>
                                            )
                                        })}
                                    </HStack>

                                    <Text>See our photo recommendations <Link href={Routes.howItWorks} as={'a'} color={'primary.500'}
                                                                              textDecoration={'underline'}>here</Link>.</Text>

                                </GridItem>
                                <GridItem gridColumn={'span 2'}>

                                    <Flex w={'100%'} justifyContent={'center'}>

                                        <Button minW={'265px'} onClick={() => uploadResult()}>Redeem wear</Button>
                                    </Flex>

                                </GridItem>
                            </Grid>
                        </Box>
                    )}
                </GridItem>
            </Grid>
        </Box>
    );
});


function LinkIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12.0002 4.90683C12.9724 3.93455 14.1546 3.45947 15.5467 3.48156C16.9168 3.48156 18.0879 3.9677 19.0602 4.93997C20.0324 5.91224 20.5296 7.09444 20.5517 8.48655C20.5517 9.85657 20.0656 11.0277 19.0933 12L16.2428 14.8505L14.8838 13.4915L17.7344 10.641C18.331 10.0444 18.6293 9.32624 18.6293 8.48655C18.6293 7.60267 18.331 6.86242 17.7344 6.2658C17.1377 5.66918 16.4085 5.38191 15.5467 5.40401C14.685 5.38191 13.9557 5.66918 13.3591 6.2658L10.5086 9.11632L9.14963 7.75735L12.0002 4.90683ZM9.87884 15.5134L8.48672 14.1213L14.1215 8.48655L15.5136 9.87867L9.87884 15.5134ZM5.37103 15.5797C5.37103 16.4194 5.66934 17.1376 6.26596 17.7342C6.86258 18.3308 7.59179 18.6402 8.45357 18.6623C9.31536 18.6402 10.0446 18.3308 10.6412 17.7342L13.4917 14.8837L14.8507 16.2426L12.0002 19.0932C11.0279 20.0654 9.85674 20.5516 8.48672 20.5516C7.0946 20.5295 5.91241 20.0323 4.94014 19.06C3.96787 18.0877 3.48173 16.9166 3.48173 15.5466C3.45963 14.1545 3.93472 12.9723 4.90699 12L7.75752 9.14947L9.11649 10.5084L6.26596 13.359C5.66934 13.9556 5.37103 14.6958 5.37103 15.5797Z"
                fill="#523774"/>
        </svg>
    )
}

function CloseIcon() {
    return (
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M4.00033 3.44428L6.7781 0.666504L7.33366 1.22206L4.55588 3.99984L7.33366 6.77761L6.7781 7.33317L4.00032 4.55539L1.22255 7.33317L0.666992 6.77761L3.44477 3.99984L0.666992 1.22206L1.22255 0.666504L4.00033 3.44428Z"
                  fill="white"/>
        </svg>
    )
}

function RefusedTip() {
    return (
        <svg width="77" height="35" viewBox="0 0 77 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9257 1.16138C6.73755 3.46309 0.321902 15.5854 1.11557 24.1785C2.10766 34.9198 37.8228 34.1526 47.7436 33.3854C57.6645 32.6181 77.8369 30.3164 75.8527 21.4932C73.8686 12.6699 45.0981 -3.44205 17.3197 7.6829" stroke="#D63155" stroke-width="0.881627"/>
            <path d="M16.5166 17.0569H14.6206V19.9489H16.4686C16.9006 19.9489 17.2246 19.8089 17.4406 19.5289C17.6566 19.2409 17.7646 18.9009 17.7646 18.5089C17.7646 18.1169 17.6606 17.7769 17.4526 17.4889C17.2446 17.2009 16.9326 17.0569 16.5166 17.0569ZM16.9486 21.0649L19.1206 24.1489H17.5726L15.5086 21.1129H14.6206V24.1489H13.3366V15.8809H16.5646C17.3966 15.8809 18.0246 16.1369 18.4486 16.6489C18.8726 17.1609 19.0846 17.7809 19.0846 18.5089C19.0846 19.1729 18.9046 19.7449 18.5446 20.2249C18.1926 20.7049 17.6606 20.9849 16.9486 21.0649ZM21.0414 24.1489V15.8809H26.0214V17.0569H22.3134V19.5049H25.5534V20.6689H22.3134V22.9849H26.1414V24.1489H21.0414ZM28.09 24.1489V15.8809H32.998V17.0569H29.362V19.5049H32.242V20.6689H29.362V24.1489H28.09ZM36.3861 22.5529C36.7381 22.8809 37.1581 23.0449 37.6461 23.0449C38.1341 23.0449 38.5501 22.8809 38.8941 22.5529C39.2461 22.2249 39.4221 21.8009 39.4221 21.2809V15.8809H40.7061V21.2809C40.7061 22.1609 40.4061 22.8809 39.8061 23.4409C39.2141 23.9929 38.4941 24.2689 37.6461 24.2689C36.7901 24.2689 36.0621 23.9929 35.4621 23.4409C34.8701 22.8809 34.5741 22.1609 34.5741 21.2809V15.8809H35.8701V21.2809C35.8701 21.8009 36.0421 22.2249 36.3861 22.5529ZM42.5392 21.7489H43.8112C43.8272 22.1009 43.9872 22.4169 44.2912 22.6969C44.5952 22.9689 44.9832 23.1049 45.4552 23.1049C45.9192 23.1049 46.2832 22.9969 46.5472 22.7809C46.8112 22.5649 46.9672 22.2969 47.0152 21.9769C47.0552 21.2969 46.6192 20.8489 45.7072 20.6329L44.6632 20.3689C43.2952 20.0009 42.6112 19.2609 42.6112 18.1489C42.6112 17.4609 42.8792 16.8969 43.4152 16.4569C43.9512 16.0089 44.5912 15.7849 45.3352 15.7849C46.1112 15.7849 46.7512 16.0089 47.2552 16.4569C47.7672 16.8969 48.0232 17.4889 48.0232 18.2329H46.7512C46.7512 17.8569 46.6192 17.5569 46.3552 17.3329C46.0912 17.1009 45.7432 16.9849 45.3112 16.9849C44.9192 16.9849 44.5832 17.0929 44.3032 17.3089C44.0232 17.5169 43.8832 17.7889 43.8832 18.1249C43.8832 18.6529 44.2512 19.0129 44.9872 19.2049L46.0432 19.4809C46.8592 19.6969 47.4512 20.0289 47.8192 20.4769C48.1872 20.9169 48.3392 21.4409 48.2752 22.0489C48.2112 22.7049 47.9192 23.2409 47.3992 23.6569C46.8872 24.0649 46.2392 24.2689 45.4552 24.2689C44.6152 24.2689 43.9192 24.0209 43.3672 23.5249C42.8152 23.0289 42.5392 22.4369 42.5392 21.7489ZM50.1498 24.1489V15.8809H55.1298V17.0569H51.4218V19.5049H54.6618V20.6689H51.4218V22.9849H55.2498V24.1489H50.1498ZM58.4704 17.0689V22.9729H60.4144C61.1984 22.9729 61.8024 22.6969 62.2264 22.1449C62.6504 21.5929 62.8624 20.8889 62.8624 20.0329C62.8624 19.1689 62.6464 18.4609 62.2144 17.9089C61.7904 17.3489 61.1904 17.0689 60.4144 17.0689H58.4704ZM60.4144 24.1489H57.1984V15.8809H60.4144C61.5584 15.8809 62.4624 16.2729 63.1264 17.0569C63.7984 17.8329 64.1344 18.8249 64.1344 20.0329C64.1344 21.2329 63.8024 22.2209 63.1384 22.9969C62.4744 23.7649 61.5664 24.1489 60.4144 24.1489Z" fill="#D63155"/>
        </svg>

    )
}

function UploadImages(props: { onAdd: (image: any) => void }) {
    const {onAdd} = props


    const [widget] = React.useState((fn: (err, result) => void) => {
        // @ts-ignore
        return window.cloudinary.createUploadWidget(
            {
                cloudName: 'easychain-img',

                uploadPreset: 'default_upload_preset',
                sources: [
                    "local",
                    "url",
                    "camera",
                    "image_search",
                    "google_drive",
                    "facebook",
                    "dropbox",
                    "instagram",
                ],
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    // if (imageStore.images.length === 0) {
                    //     sendAmplitudeData('E_WEARING_REQUEST_STARTED')
                    // }

                    onAdd(result.info)
                    sendAmplitudeData('E_WEARING_REQUEST_PHOTO_ADDED')
                }
            }
        )
    })


    return (
        <div onClick={() => widget.open()}>
            <Flex justifyContent={'center'} px={'72px'} py={'21px'} border={'1px dashed'}
                  borderColor={'primary.500'}>
                <Text textTransform={'uppercase'} textAlign={'center'} letterSpacing={'0.02em'} fontSize={'16px'} color={'basic.500'}>
                    upload up to 5 photos and We’LL choose the Best one for
                    you

                    <br/>

                    <Link as={'span'}
                          color={'primary.500'}
                          textDecoration={'underline'}>click here</Link>
                </Text>
            </Flex>
        </div>
    )
}