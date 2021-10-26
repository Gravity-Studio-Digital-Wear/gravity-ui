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
    Text, useMediaQuery, useToken
} from "@chakra-ui/react";
import {formatPrice} from "../../utils/price";
import {useDropzone} from "react-dropzone";
import {WaredrobeService} from "../../services/WaredrobeService";
import {TicketStatus} from "./TicketStatus";
import {Routes} from "../../app/routes";
import {IconBack} from "../../components/icons/IconBack";
import {processImgUrl, processUploadImgUrl} from "../../utils/imageUrl";
import SwiperCore, {Mousewheel, Pagination, Navigation, Keyboard} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {sendAmplitudeData} from '../../utils/amplitude'

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
            {product.images.map((image: string) => {
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
                         maxH={{ base: '380px', md: '700px'}}
                         overflow={'hidden'}
                         sx={{
                             '.swiper-container': {position: 'initial'},
                             '.swiper-pagination-bullets': {
                                 left: 0,
                                 right: 'auto'
                             },
                             '.swiper-pagination-bullet': {
                                 w: isLargerThanMd ? '6px' :  '24px',
                                 h: isLargerThanMd ? '24px' :  '6px',
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

                            <Link color={'primary.500'} textTransform={'uppercase'} letterSpacing={'0.07em'}>
                                <Text as={'span'} borderBottom={'1px solid'} borderColor={'primary.500'}>How to wear it?</Text>
                            </Link>

                            {/*<Flex w={'100%'} alignItems={'flex-end'}>*/}
                            {/*    <Stack grow={1} spacing={'0'} alignItems={'flex-start'} textTransform={'uppercase'}>*/}
                            {/*        <Text as={'span'}*/}
                            {/*              fontSize={'15px'}*/}
                            {/*              color={'alert'}*/}
                            {/*              lineHeight={1}*/}
                            {/*              textDecoration={'line-through'}>*/}
                            {/*            {formatPrice(product.priceUSD * 1.5)} $*/}
                            {/*        </Text>*/}
                            {/*        <Text as={'span'}*/}
                            {/*              fontSize={'25px'}*/}
                            {/*              fontWeight={'bold'}*/}
                            {/*              letterSpacing={'0.02em'}*/}
                            {/*              lineHeight={1}*/}
                            {/*              color={'basic.500'}>*/}
                            {/*            {formatPrice(product.priceUSD)} $*/}
                            {/*        </Text>*/}
                            {/*    </Stack>*/}

                            {/*    <Box marginLeft={'auto'}>*/}
                            {/*        <Button*/}
                            {/*            isDisabled={true}*/}
                            {/*            variant={'outline'}*/}
                            {/*            colorScheme={'primary'}*/}
                            {/*            textTransform={'uppercase'}*/}

                            {/*            w={'265px'}>*/}
                            {/*            Resell*/}
                            {/*        </Button>*/}
                            {/*    </Box>*/}
                            {/*</Flex>*/}
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
                                            you Drag and Drop or <Link as={'span'} color={'primary.500'}
                                                                       textDecoration={'underline'}>click
                                            here</Link>
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


                                <Text>See our photo recommendations <Link as={'span'} color={'primary.500'}
                                                                          textDecoration={'underline'}>here</Link>.</Text>


                                <Text textTransform={'uppercase'} color={'basic.500'} fontWeight={'bold'}
                                      letterSpacing={'0.02em'}>...
                                    or share a link</Text>

                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<LinkIcon/>}
                                        />
                                        <Input
                                            id="link"

                                            placeholder="Paste link here"
                                        />
                                    </InputGroup>
                                </FormControl>

                                <Button onClick={() => uploadResult()}>Redeem wear</Button>
                            </Stack>
                        )}
                    </Box>
                </GridItem>

                <GridItem gridColumn={'span 12'}>
                    {ticket.status !== 'NEW' && (
                        <Box>
                            <Heading letterSpacing={'0.01em'} color={'basic.500'} textTransform={'uppercase'}
                                     fontWeight={'bold'} fontSize={{base: 25, md:43}}>Your photo</Heading>

                            <Grid templateColumns={'repeat(2, 1fr)'} mt={'24px'}>
                                <GridItem>
                                    <Text letterSpacing={'0.02em'} textTransform={'uppercase'} fontWeight={'bold'}
                                          color={'basic.500'} fontSize={16}>Uploaded photos</Text>
                                    <HStack mt={'8px'}>
                                        {ticket.sourceImageLinks.map(img => {
                                            return (
                                                <Box key={img} position={'relative'}>
                                                    <Image src={img} boxSize={'83px'}/>
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
                                         fontWeight={'bold'} fontSize={{base: 25, md:43}}>Result</Heading>


                                {/*<Button isDisabled={true} marginLeft={'auto'}>By more wears</Button>*/}
                            </Flex>

                            <Stack mt={'36px'}>
                                {ticket.resultImageLinks.map(img => {
                                    return (
                                        <Box key={img} position={'relative'}>
                                            <Image src={img} width={{base: '100%', md: '350px'}}/>
                                        </Box>
                                    )
                                })}
                            </Stack>
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