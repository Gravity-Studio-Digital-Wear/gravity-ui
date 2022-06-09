import {Centered} from "../components/Common";
import {Box, Grid, Text} from "@chakra-ui/react";
import {ReactComponent as SlashesShape} from "../assets/slashes.svg";
import {TransparentVideo} from "../../../components/TransparentVideo";
import {Possibilities} from "../components/Possibilities";
import {Block} from "../components/Block";
import * as React from "react";

export const Block2 = () => {
    return (
        <Block>
            <Centered>
                <Text
                    fontFamily={'All Round Gothic'}
                    fontSize={{base: 34, xl: 54}}
                    color={'white'}
                    lineHeight={{base: '44px', xl: '68px'}}
                    position={'relative'}
                    mt={{base: '0px', xl: '300px'}}
                >
                    Buy once, wear everywhere

                    <Box as={'span'} position={'absolute'} bottom={'-100px'}>

                        <SlashesShape/>
                    </Box>
                </Text>

                <Grid templateColumns={{base: '1fr', xl: '1fr 1fr 1fr'}} gridColumnGap={'30px'}
                      position={'relative'}>
                    <Box as={'span'}>
                        <Text fontFamily={'All Round Gothic'} color={'white'} fontSize={24} mt={'145px'}>
                            Metaverse interoperability is happening
                        </Text>

                        <Text maxW={'350px'} color={'white'} fontSize={{base: 16, xl: 17}} mt={'16px'}
                              letterSpacing={'0.01em'}>
                            Seamlessly wear your digital fashion on avatars across any virtual world. Keep it going with rare artist-collaborated ornament add-ons and exclusive community bonuses.
                        </Text>
                    </Box>

                    <Box position={'relative'} display={{base: 'flex', xl: 'block'}} justifyContent={'center'}>
                        <Box width={{base: '300px', xl: '100%'}}
                             left={0}
                             mt={{xl: '90px'}}

                        >
                            <TransparentVideo
                                videoUrl={'https://res.cloudinary.com/dxgophqoh/video/upload/c_crop,h_1080,w_870,x_520,y_130/v1648204264/output_pw9auv.webm'}
                                imageUrl={'/landing/coat.png'}
                                infinite={true}
                            />
                        </Box>
                    </Box>

                    <Possibilities/>
                </Grid>
            </Centered>
        </Block>
    )
}