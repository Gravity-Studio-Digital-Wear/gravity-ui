import * as React from 'react';
import {Box, Grid, HStack, Image, Link, LinkBox, Stack, Text} from "@chakra-ui/react";
import {Centered} from "../../components/containers/elements/Centered";
import {ReactComponent as LinkedLogo} from '../../assets/linked-logo.svg';
import {PolygonBorder} from "../LandingV2/components/PolygonBorder";
import {sendAmplitudeData} from "../../utils/amplitude";
import {ReactComponent as RectangleShape} from "../LandingV2/assets/rectangle.svg";
import {ReactComponent as RectangleMobileShape} from "../LandingV2/assets/rectangle--mobile.svg";

function LinkedIn({link}: { link: string }) {
    return (
        <LinkBox as={HStack} mt={'20px'} spacing={'12px'} color={'rgba(212, 242, 63, 1)'}>
            <LinkedLogo/>
            <Link isExternal={true} href={link}>Linkedin</Link>
        </LinkBox>
    )
}

export const Team = () => {
    const joinWhitelist = () => {
        sendAmplitudeData('E_MINT-BTN_FOLLOW')
        window.open('https://www.premint.xyz/gravitylayer/ ', '_blank')
    }
    return (
        <Stack spacing={0} fontFamily={'Montserrat'} overflow={'hidden'}>
            <Centered zIndex={2} pb={'60px'}>
                <Text
                    fontFamily={'All Round Gothic'}
                    fontSize={{base: 34, xl: 54}}
                    color={'white'}
                    lineHeight={{base: '44px', xl: '68px'}}
                    position={'relative'}
                    mt={'90px'}
                >
                    Our Team
                    <Box as={'span'} position={'absolute'} top={'-24px'} left={'-24px'}
                         display={{base: 'none', xl: 'block'}}>
                        <RectangleShape/>
                    </Box>
                    <Box as={'span'} position={'absolute'} top={'-48px'} left={0}
                         display={{base: 'block', xl: 'none'}}>
                        <RectangleMobileShape/>
                    </Box>
                </Text>
                <Grid templateColumns={{base: '1fr', xl: 'repeat(3, 1fr)'}} gridColumnGap={'64px'}>
                    <Box>
                        <Image src={'/team/emily.png'}/>
                        <Text fontFamily={'All Round Gothic'} fontSize={24}>Emily Shahaj</Text>
                        <Text fontWeight={'400'} fontSize={17}>Co-Founder / CEO</Text>
                        <Text fontSize={16} mt={'16px'} height={'48px'}>Published researcher in virtual fashion and digital
                            identity</Text>
                        <LinkedIn link={'https://www.linkedin.com/in/emily-rosa-shahaj/'}/>
                    </Box>
                    <Box>
                        <Image src={'/team/julia.png'}/>
                        <Text fontFamily={'All Round Gothic'} fontSize={24}>Julia Palamarchuk</Text>
                        <Text fontWeight={'400'} fontSize={17}>Co-Founder / CPO</Text>
                        <Text fontSize={16} mt={'16px'} height={'48px'}>Winner of 22 blockchain hackathons</Text>
                        <LinkedIn link={'https://www.linkedin.com/in/julia-innovator/'}/>
                    </Box>
                    <Box>
                        <Image src={'/team/amy.png'}/>
                        <Text fontFamily={'All Round Gothic'} fontSize={24}>Amy Yu</Text>
                        <Text fontWeight={'400'} fontSize={17}>Head of Operations</Text>
                        <Text fontSize={16} mt={'16px'} height={'48px'}>Nominated eSports Woman of the Year 2017</Text>
                        <LinkedIn link={'https://www.linkedin.com/in/amytqyu/'}/>
                    </Box>
                </Grid>

                <Grid templateColumns={{base: '1fr', xl: 'repeat(4, 1fr)'}}
                      gridColumnGap={'64px'}
                      gridRowGap={{base: '32px', xl: '100px'}}
                      mt={{base: '32px', xl: '100px'}}
                >
                    <Box>
                        <Box height={'250px'} display={'flex'} justifyContent={'center'}>
                            <Image src={'/team/marina.png'}  height={'100%'}/>
                        </Box>
                        <Text fontFamily={'All Round Gothic'} mt={'32px'} fontSize={24}>Marina Gruzdova</Text>
                        <Text fontWeight={'400'} fontSize={17} height={'48px'}>3D Fashion Designer</Text>
                        <LinkedIn link={'https://www.linkedin.com/in/marina-gruzdova-0165a9107/ '}/>
                    </Box>
                    <Box>
                        <Box height={'250px'} display={'flex'} justifyContent={'center'}>
                            <Image src={'/team/sophia.png'}  height={'100%'}/>
                        </Box>
                        <Text fontFamily={'All Round Gothic'} mt={'32px'} fontSize={24}>Sophia Collins </Text>
                        <Text fontWeight={'400'} fontSize={17} height={'48px'}>Social Media Manager</Text>
                        <LinkedIn link={'https://www.linkedin.com/in/sophia-collins-b4b87790/ '}/>
                    </Box>
                    <Box>
                        <Box height={'250px'} display={'flex'} justifyContent={'center'}>
                            <Image src={'/team/jenn.png'}  height={'100%'}/>
                        </Box>

                        <Text fontFamily={'All Round Gothic'} mt={'32px'} fontSize={24}>Jenn Leung</Text>
                        <Text fontWeight={'400'} fontSize={17} height={'48px'}>Technical Artist</Text>
                        <LinkedIn link={'https://www.linkedin.com/in/jenn-leung-72442312b/'}/>
                    </Box>
                    <Box>
                        <Box height={'250px'} display={'flex'} justifyContent={'center'}>
                            <Image src={'/team/jack.png'} height={'100%'}/>
                        </Box>

                        <Text fontFamily={'All Round Gothic'} mt={'32px'} fontSize={24}>Jack Botvinovski</Text>
                        <Text fontWeight={'400'} fontSize={17} height={'48px'}>Game Engineer</Text>
                        <LinkedIn link={'https://www.linkedin.com/in/jbotvinovski/'}/>
                    </Box>
                    <Box>
                        <Box height={'250px'} display={'flex'} justifyContent={'center'}>
                            <Image src={'/team/aliya.png'} height={'100%'}/>
                        </Box>
                        <Text fontFamily={'All Round Gothic'} fontSize={24} mt={'32px'}>Aliya</Text>
                        <Text fontWeight={'400'} fontSize={17} height={'48px'}>UX/UI</Text>
                        <LinkedIn link={'https://www.linkedin.com/in/aliya-gaptulgazizova-831452237/'}/>
                    </Box>
                    <Box>
                        <Box height={'250px'} display={'flex'} justifyContent={'center'}>
                            <Image src={'/team/tim.png'} height={'100%'}/>
                        </Box>
                        <Text fontFamily={'All Round Gothic'} fontSize={24} mt={'32px'}>Timofey</Text>
                        <Text fontWeight={'400'} fontSize={17} height={'48px'}>Full Stack Developer</Text>
                        <LinkedIn link={'https://www.linkedin.com/in/tim-semenyuk-27618517b/'}/>
                    </Box>
                </Grid>
            </Centered>

            <Centered>
                <Box
                    color={'white'}
                    display={'flex'}
                    alignItems={{base: 'flex-start', xl: 'center'}}
                    flexDirection={'column'}
                    fontWeight={'normal'}
                    letterSpacing={'0.11em'}
                    fontSize={{base: 39, xl: 75}}
                    textTransform={'uppercase'}
                    mt={{base: '120px', xl: '300px'}}
                >
                    <Text fontFamily={'All Round Gothic'}>
                        Be who you want <br/> wherever you go
                    </Text>

                    <PolygonBorder mt={'40px'} w={'269px'} onClick={joinWhitelist}>
                        JOIN THE WHITELIST
                    </PolygonBorder>
                </Box>
            </Centered>
        </Stack>
    )
}