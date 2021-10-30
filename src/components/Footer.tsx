import * as React from 'react'
import {Box, Flex, HStack, Link, Stack, Text} from "@chakra-ui/react";
import {DiscordIcon, InstaIcon, TelegramIcon, TwitterIcon, YouTubeIcon} from "./icons/IconSocial";
import {Link as RouterLink} from 'react-router-dom';
import {Routes} from "../app/routes";

export function Footer() {
    return (
        <Box bg={'white'} height={{md: '228px'}} pb={{base: '32px', md: 0}}>
            <Flex maxW={'1160px'} marginLeft={'auto'} marginRight={'auto'} position={'relative'}
                  direction={{base: 'column', md: 'row'}}>
                <Box position={'absolute'}>
                    <FooterLogo/>
                </Box>

                <Stack
                    direction={{base: 'column', md: 'row'}}
                    textTransform={'uppercase'}
                    spacing={{base: '10px', md: '85px'}}
                    ml={'120px'}
                    alignItems={'flex-start'}
                    mt={'42px'}>
                    <Stack spacing={'10px'}>
                        <Link as={RouterLink} to={Routes.main}>Shop</Link>
                        <Link as={RouterLink} to={Routes.howItWorks}>How it works</Link>
                        <Link as={RouterLink} to={Routes.sustainability}>Sustainability</Link>
                    </Stack>

                    <Stack spacing={'10px'}>
                        <Link href="https://forms.gle/AvVvcJciKJFCLdfk6" isExternal>Contact us</Link>
                        <Link href="https://drive.google.com/file/d/13lQTANmVz4lrjMMBuB2a77p-iU_TsJfG" isExternal>White paper</Link>
                    </Stack>
                </Stack>

                <Stack marginLeft={{base: '120px', md: 'auto'}} mt={'42px'} spacing={{base: '32px', md: '46px'}}>
                    <HStack spacing={'10px'}>
                        <Link href={'https://t.me/gravitythestudiogroup'} isExternal>
                            <TelegramIcon/>
                        </Link>

                        <Link href={'https://discord.gg/DkqaUdY5'} isExternal>
                            <DiscordIcon/>
                        </Link>

                        <Link href="https://www.instagram.com/gravitythestudio/" isExternal>
                            <InstaIcon/>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCKrbhUFFqg-Q2nyrfxN9xjQ" isExternal>
                            <YouTubeIcon/>
                        </Link>
                        <Link href="https://twitter.com/GravitytheStud" isExternal>
                            <TwitterIcon/>
                        </Link>
                    </HStack>

                    <Stack textTransform={'uppercase'}>
                        <Link as={RouterLink} to={Routes.termsOfService}>
                            <Text as={'span'}
                                  _hover={{textDecoration: 'none'}}
                                  borderBottom={'1px solid'}
                                  borderColor={'primary.500'}>Terms
                            </Text>
                        </Link>
                        <Link as={RouterLink} to={Routes.privacy}>
                            <Text as={'span'}
                                  _hover={{textDecoration: 'none'}}
                                  borderBottom={'1px solid'}
                                  borderColor={'primary.500'}>
                                Privacy Policy
                            </Text>
                        </Link>
                    </Stack>
                </Stack>
            </Flex>
        </Box>
    )
}


function FooterLogo() {
    return (
        <svg width="87" height="228" viewBox="0 0 87 228" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="87" height="228" fill="url(#patternFooterLogo)"/>
            <defs>
                <pattern id="patternFooterLogo" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#footerLogo" transform="translate(-0.000423101) scale(0.00200973 0.000766871)"/>
                </pattern>
                <image id="footerLogo" width="498" height="1304"
                       xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    )
}


