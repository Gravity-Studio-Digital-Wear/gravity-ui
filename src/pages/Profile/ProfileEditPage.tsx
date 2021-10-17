import * as React from 'react'
import {observer} from "mobx-react";
import {Box, Button, Flex, FormControl, FormErrorMessage, Heading, Input, Link, Stack, Text} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import {useService} from "../../core/decorators/service";
import {ProfileService} from "../../services/ProfileService";
import {IProfile} from "../../interfaces";
import {IconBack} from "../../components/icons/IconBack";
import {Link as RouterLink} from "react-router-dom";
import {Routes} from "../../app/routes";
import {PageSpinner} from "../../components/PageSpinner";
import {toJS} from "mobx";
import {AuthService} from "../../services/AuthService";

const socialLinks = ['Instagram', 'TikTok', 'Twitter', 'Facebook']

export const ProfileEditPage = observer(function ProfileEditPage() {
    const profileService = useService(ProfileService)
    const authService = useService(AuthService)


    function onSubmit(values: Partial<IProfile>) {
        return profileService.updateProfile(values)
    }

    if (authService.authStatus !== 'success' || profileService.requestStatus !== 'success') {
        return <PageSpinner/>
    }

    return (
        <Box>
            <Flex>
                <Link as={RouterLink} to={Routes.profile} fontSize={18} textTransform={'uppercase'}
                      textDecoration={'none'} display={'flex'} alignItems={'center'}>
                    <IconBack/>
                    <Text as={'span'} ml={'12px'}>Back</Text>
                </Link>
            </Flex>

            <ProfileEditForm profile={toJS(profileService.profile)} onSubmit={onSubmit}/>
        </Box>
    )
})


function ProfileEditForm(props: { profile: IProfile, onSubmit: (profile: Partial<IProfile>) => Promise<IProfile> }) {
    const {
        profile,
        onSubmit
    } = props;

    const {
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: profile
    });


    console.log(profile)


    return (
        <Flex justify={'center'}>
            <Stack maxW={'365px'} spacing={30}>
                <Heading textTransform={'uppercase'} fontSize={70} fontWeight={'bold'}>Edit Profile</Heading>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={30}>
                        <FormControl isInvalid={!!errors.name}>
                            <Input
                                id="name"
                                variant={'profile'}
                                placeholder="Name"
                                {...register("name", {
                                    required: "This is required",
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={!!errors.email}>
                            <Input
                                id="email"
                                variant={'profile'}
                                placeholder="Email"
                                {...register("email", {
                                    required: "This is required",
                                })}
                            />
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>

                        {socialLinks.map((linkName: string) => {
                            const fieldName = linkName.toLowerCase() + 'Link'

                            return (
                                <FormControl isInvalid={!!errors[fieldName]}>
                                    <Input
                                        variant={'profile'}
                                        id={fieldName}
                                        placeholder={linkName}
                                        {...register(fieldName as any, {})}
                                    />
                                    <FormErrorMessage>
                                        {errors[fieldName] && errors[fieldName].message}
                                    </FormErrorMessage>
                                </FormControl>
                            )
                        })}

                        <Button isLoading={isSubmitting} type="submit">
                            Save
                        </Button>
                    </Stack>
                </form>

            </Stack>
        </Flex>
    )
}