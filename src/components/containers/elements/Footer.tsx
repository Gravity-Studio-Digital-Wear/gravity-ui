import * as React from 'react';
import {Box, Grid, GridItem, HStack, Link, LinkBox, Stack, Text} from "@chakra-ui/react";
import {ReactComponent as Logo} from "../../../pages/LandingV2/assets/logo.svg";
import {DiscordIcon, InstaIcon, MediumIcon, TelegramIcon, TwitterIcon, YouTubeIcon} from "../../icons/IconSocial";
import {Link as RouterLink} from "react-router-dom";
import {Routes} from "../../../app/routes";


export const Footer = () => {
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

                    <GridItem colSpan={2}>
                        <Grid templateColumns={{base: '1fr', xl: 'repeat(2, 1fr)'}}
                              fontSize={'14px'}
                              color={'white'}
                              textTransform={'uppercase'}
                              width={'100%'}
                              gridRowGap={'16px'}
                              display={'none'}
                              letterSpacing={'0.03em'}
                        >
                            <LinkBox>NFT Drop</LinkBox>
                            <LinkBox>for fashion brands</LinkBox>
                            <LinkBox>for metaverse developers</LinkBox>
                            <LinkBox>MEET THE TEAM</LinkBox>
                        </Grid>
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

                        <Stack textTransform={'uppercase'} color={'white'} spacing={'10px'} pt={'16px'}>
                            <Link _hover={{textDecoration: 'none'}} isExternal={true}
                                  href={'https://forms.gle/AvVvcJciKJFCLdfk6'}>
                                <Text as={'span'}
                                      borderBottom={'1px solid'}
                                      borderColor={'white'}>
                                    Contact us
                                </Text>
                            </Link>

                            <Link as={RouterLink} to={Routes.termsOfService} _hover={{textDecoration: 'none'}}>
                                <Text as={'span'}
                                      _hover={{textDecoration: 'none'}}
                                      borderBottom={'1px solid'}
                                      borderColor={'white'}>Terms
                                </Text>
                            </Link>
                            <Link as={RouterLink} to={Routes.privacy} _hover={{textDecoration: 'none'}}>
                                <Text as={'span'}
                                      borderBottom={'1px solid'}
                                      borderColor={'white'}>
                                    Privacy Policy
                                </Text>
                            </Link>
                        </Stack>
                    </Stack>
                </Grid>
            </Box>
        </>
    )
}