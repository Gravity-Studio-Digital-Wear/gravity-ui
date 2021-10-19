import * as React from 'react'
import {observer} from "mobx-react";
import {
    Box,
    Button,
    Circle,
    Flex,
    FormControl,
    FormErrorMessage,
    Heading,
    Image,
    Input,
    Link,
    Stack,
    Text
} from "@chakra-ui/react";
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
import {NoAvatar} from "./NoAvatar";
import {processUploadImgUrl} from "../../utils/imageUrl";

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
        getValues,
        watch,
        setValue,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: profile
    });

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
                    setValue('avatar', processUploadImgUrl(result.info.url))
                }
            }
        )
    })

    const avatarValue = watch('avatar')

    return (
        <Flex justify={'center'}>
            <Stack maxW={'365px'} spacing={30}>
                <Heading textTransform={'uppercase'} fontSize={70} fontWeight={'bold'}>Edit Profile</Heading>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={30}>
                        <FormControl isInvalid={!!errors.avatar}>
                            <Flex justify={'center'}>
                                <Box position={'relative'}>
                                    <Circle width={'40px'}
                                            height={'40px'}
                                            as={Button}
                                            onClick={() => widget.open()}
                                            px={0}
                                            position={'absolute'}
                                            bottom={0} right={0}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.2656 3.85938L13.7422 5.38281L10.6172 2.25781L12.1406 0.734375C12.2969 0.578125 12.4922 0.5 12.7266 0.5C12.9609 0.5 13.1562 0.578125 13.3125 0.734375L15.2656 2.6875C15.4219 2.84375 15.5 3.03906 15.5 3.27344C15.5 3.50781 15.4219 3.70312 15.2656 3.85938ZM0.5 12.375L9.71875 3.15625L12.8438 6.28125L3.625 15.5H0.5V12.375Z"
                                                fill="white"/>
                                        </svg>
                                    </Circle>

                                    {avatarValue
                                        ? <Image
                                            borderRadius="full"
                                            boxSize="132px"
                                            src={avatarValue}
                                        />
                                        : <NoAvatar/>
                                    }
                                </Box>
                            </Flex>


                            <Input
                                id="name"
                                variant={'profile'}
                                placeholder="Name"
                                type={'hidden'}
                                {...register("avatar")}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>


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

