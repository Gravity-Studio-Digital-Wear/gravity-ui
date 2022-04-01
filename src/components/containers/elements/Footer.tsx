import * as React from 'react';
import {Box, Grid, GridItem, HStack, Input, Link, LinkBox, Stack, Text} from "@chakra-ui/react";
import {ReactComponent as Logo} from "../../../pages/LandingV2/assets/logo.svg";
import {DiscordIcon, InstaIcon, MediumIcon, TelegramIcon, TwitterIcon, YouTubeIcon} from "../../icons/IconSocial";
import {useForm} from "react-hook-form";
import {PolygonBorder} from "../../../pages/LandingV2/components/PolygonBorder";
import {Routes} from "../../../app/routes";

import {Link as RouterLink} from 'react-router-dom'
import {http} from "../../../core/transport/http";
import {observer} from "mobx-react";
import {useService} from "../../../core/decorators/service";
import {GravityApplication} from "../../../app/Application";
import {runInAction} from "mobx";

const sendEmail = (email: string) => {
    return http.post('/api/hubspot/contacts', {
        email
    })
}


export const Footer = observer(() => {
    const app = useService(GravityApplication);

    const {
        handleSubmit,
        register,
        getValues,
        watch,
        setValue,
        formState: {errors, isSubmitting},
        setError,
        clearErrors
    } = useForm();


    const isSubscribed = app.isSubscribedEmail;

    const submitFn = ({email}) => {
        clearErrors();

        sendEmail(email)
            .then(() => {
               app.persistSubscribe();
            })
            .catch((err) => {
                console.error(err.message)

                setError('email', {message: err.message});
            })
    }

    return (
        <>
            <Box height={'1px'} w={'100%'} bgColor={'white'} mt={{base: '60px', xl: '160px'}}/>

            <Box mt={'60px'}>
                <Grid
                    templateColumns={{base: '1fr', xl: 'repeat(4, 1fr)'}}
                    gridRowGap={'30px'}
                >
                    <Box>
                        <Logo/>
                    </Box>

                    <GridItem colSpan={2} position={'relative'}>
                        <Grid templateColumns={{base: '1fr', xl: 'repeat(1, 1fr)'}}
                              fontSize={'14px'}
                              color={'white'}
                              textTransform={'uppercase'}
                              width={'100%'}
                              gridRowGap={'16px'}
                              letterSpacing={'0.03em'}
                              pb={'64px'}
                        >
                            <LinkBox>
                                <Link>
                                    <RouterLink to={Routes.news}>Blog</RouterLink>
                                </Link>
                            </LinkBox>
                            <LinkBox>
                                <Link isExternal={true} href={'https://forms.gle/AvVvcJciKJFCLdfk6'}>Contact Us</Link>
                            </LinkBox>
                        </Grid>
                        <HStack spacing={'12px'} position={'absolute'} bottom={0} letterSpacing={'0.03em'}>
                            <Link as={RouterLink} to={Routes.termsOfService} _hover={{textDecoration: 'none'}}>
                                <Text as={'span'}
                                      _hover={{textDecoration: 'none'}}

                                      borderColor={'white'}>Terms
                                </Text>
                            </Link>
                            <Link as={RouterLink} to={Routes.privacy} _hover={{textDecoration: 'none'}}>
                                <Text as={'span'}
                                      borderColor={'white'}>
                                    Privacy Policy
                                </Text>
                            </Link>
                        </HStack>
                    </GridItem>


                    <Stack spacing={'16px'}>
                        <Text color={'white'} letterSpacing={'0.03em'}>FOLLOW US</Text>

                        <HStack
                            spacing={'10px'}
                            sx={{
                                '--social-icon-fill': '#39373E'
                            }}
                        >
                            <Link href={'https://t.me/gravitythestudiogroup'} isExternal>
                                <TelegramIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                            </Link>
                            <Link href={'https://discord.gg/Ejh4jEPRDC'} isExternal>
                                <DiscordIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                            </Link>
                            <Link href="https://www.instagram.com/gravitythestudio/" isExternal>
                                <InstaIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCKrbhUFFqg-Q2nyrfxN9xjQ" isExternal>
                                <YouTubeIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                            </Link>
                            <Link href="https://twitter.com/GravitytheStud" isExternal>
                                <TwitterIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                            </Link>

                            <Link href="https://medium.com/@gravitythestudio" isExternal>
                                <MediumIcon color={'#D4F23F'} _hover={{color: '#D9FF1D'}}/>
                            </Link>
                        </HStack>


                        {!isSubscribed && (
                            <Stack spacing={'10px'} pt={'16px'}>
                                <Text textTransform={'uppercase'} color={'white'} letterSpacing={'0.03em'}>
                                    Subscribe
                                </Text>

                                <Text textTransform={'none'} color={'white'} letterSpacing={'0.03em'}>
                                    Subscribe to newsletters and special offers
                                </Text>


                                <Stack as={'form'} onSubmit={handleSubmit(submitFn)} spacing={'12px'} maxW={'241px'}
                                       mt={'16px'}>
                                    <Input
                                        variant={'profile'}
                                        borderColor={'white'}
                                        sx={{
                                            "&::placeholder": {
                                                color: '#523774',
                                                fontWeight: 500
                                            },
                                            backdropFilter: 'blur(4px)'
                                        }}
                                        color={'#523774'}
                                        bg={'rgba(255, 255, 255, 0.3);'}
                                        id={'email'}
                                        placeholder={'Enter your email'}
                                        {...register('email' as any, {})}
                                    />

                                    {errors.email && <Text>{errors.email.message}</Text>}

                                    <PolygonBorder width={'241px'} type={'submit'}> Subscribe</PolygonBorder>
                                </Stack>
                            </Stack>
                        )}
                    </Stack>
                </Grid>
            </Box>
        </>
    )
})