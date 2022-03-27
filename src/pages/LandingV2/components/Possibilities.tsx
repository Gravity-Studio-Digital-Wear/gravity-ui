import * as React from 'react';
import {
    Box,
    Button,
    ButtonProps,
    Flex,
    Grid,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure
} from "@chakra-ui/react";

const PolygonBorder = '0 28px, 28px 0 , 100% 0, 100% 100%, 0 100%'

const PlusButton = (props: ButtonProps) => {
    return (
        <Button
            bg={'#D4F23F'}
            w={'24px'}
            height={'24px'}
            px={0}
            py={0}
            borderRadius={'50%'}
            _hover={{bgColor: '#D9FF1D'}}
            {...props}
        >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.8865 5.74662L0.295264 5.74662L0.295264 7.33678L12.8865 7.33678L12.8865 5.74662ZM7.38595 12.8373L7.38595 0.246094L5.79579 0.246093L5.79579 12.8373L7.38595 12.8373Z"
                    fill="#39373E"/>
            </svg>
        </Button>
    )
}

export function Possibilities() {
    const {isOpen, onClose, onOpen} = useDisclosure();

    const [contentType, setContentType] = React.useState('');

    const open = (type: string) => () => {
        setContentType(type);
        onOpen();
    }


    return (
        <Stack spacing={'24px'} mt={{base: '60px', xl: '120px'}}>
            <Flex alignItems={'center'}>
                <Box position={'relative'}>
                    <Image
                        w={{base: '70px', xl: '84px'}}
                        h={{base: '70px', xl: '84px'}}
                        src={'/landing/voxelated.png'}
                    />

                    <PlusButton
                        position={'absolute'}
                        right={'0px'}
                        top={'0'}
                        onClick={open('voxelated')}
                    />
                </Box>


                <Text color={'white'} fontWeight={400} letterSpacing={'0.01em'} ml={'16px'} fontSize={'17px'}>
                    Voxelated worlds
                </Text>
            </Flex>

            <Flex alignItems={'center'}>
                <Box position={'relative'}>
                    <Image
                        w={{base: '70px', xl: '84px'}}
                        h={{base: '70px', xl: '84px'}}
                        src={'/landing/stylized.png'}
                    />
                    <PlusButton
                        position={'absolute'}
                        right={'0px'}
                        top={'0'}
                        onClick={open('stylized')}
                    />
                </Box>

                <Text color={'white'} fontWeight={400} letterSpacing={'0.01em'} ml={'16px'} fontSize={'17px'}>
                    Stylized worlds
                </Text>
            </Flex>

            <Flex alignItems={'center'}>
                <Box position={'relative'}>
                    <Image
                        w={{base: '70px', xl: '84px'}}
                        h={{base: '70px', xl: '84px'}}
                        src={'/landing/realistic.png'}
                    />
                    <PlusButton
                        position={'absolute'}
                        right={'0px'}
                        top={'0'}
                        onClick={open('realistic')}
                    />
                </Box>

                <Text color={'white'} fontWeight={400} letterSpacing={'0.01em'} ml={'16px'} fontSize={'17px'}>
                    Realistic worlds
                </Text>
            </Flex>

            <Flex alignItems={'center'}>
                <Box position={'relative'}>
                    <Image
                        w={{base: '70px', xl: '84px'}}
                        h={{base: '70px', xl: '84px'}}
                        src={'/landing/virtualphoto.png'}
                    />
                    <PlusButton
                        position={'absolute'}
                        right={'0px'}
                        top={'0'}
                        onClick={open('virtual-ph')}
                    />
                </Box>

                <Text color={'white'} fontWeight={400} letterSpacing={'0.01em'} ml={'16px'} fontSize={'17px'}>
                    Virtual photo tailoring
                </Text>
            </Flex>

            <Modal
                onClose={onClose}
                scrollBehavior={'inside'}
                isOpen={isOpen}
            >
                <ModalOverlay/>
                <ModalContent p={0} fontFamily={'Montserrat'} bg={'transparent'}>
                    <ModalHeader
                        bg={'#D4F23F'}

                        height={'66px'}
                        flexBasis={'66px'}

                        css={{
                            clipPath: `polygon(${PolygonBorder})`
                        }}
                    />
                    <ModalCloseButton top={'17px'}/>
                    <ModalBody bg={'white'} minHeight={'280px'}>
                        {contentType === 'voxelated' && <VoxelatedContent/>}
                        {contentType === 'stylized' && <StylizedContent/>}
                        {contentType === 'realistic' && <RealisticContent/>}
                        {contentType === 'virtual-ph' && <VirtualPhotoContent/>}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Stack>
    )
}


const VoxelatedContent = () => {
    return (
        <Flex py={'30px'}>
            <Box flexBasis={'40%'}>
                <Image src={'/landing/img-modal-voxalated.png'}/>
            </Box>

            <Box px={'16px'}>
                <Text fontSize={19} letterSpacing={'.01em'}>
                    Your look will appear this way in:
                </Text>

                <Image src={'/landing/sandbox-logo.svg'} mt={'16px'}/>
            </Box>
        </Flex>
    )
}

const StylizedContent = () => {
    return (
        <Flex py={'30px'}>
            <Box flexBasis={'40%'} flexGrow={1}>
                <Image src={'/landing/img-modal-stylized.png'}/>
            </Box>

            <Box px={'16px'} flexGrow={1}>
                <Text fontSize={19} letterSpacing={'.01em'}>
                    Your look will appear this way in:
                </Text>


                <Grid gridTemplateColumns={'1fr 1fr'}>
                    <Image src={'/landing/decentraland-logo.png'} mt={'16px'}/>
                    <Image src={'/landing/tcsg-logo.png'} mt={'16px'}/>
                    <Image src={'/landing/somnium-logo.png'} mt={'16px'}/>
                    <Image src={'/landing/rpm-logo.png'} mt={'16px'}/>
                    <Image src={'/landing/vrchat-logo.png'} mt={'16px'}/>
                </Grid>
            </Box>
        </Flex>
    )
}

const RealisticContent = () => {
    return (
        <Flex py={'30px'}>
            <Box flexBasis={'40%'} flexGrow={1}>
                <Image src={'/landing/img-modal-realistic.png'}/>
            </Box>

            <Box px={'16px'} flexGrow={1}>
                <Text fontSize={19} letterSpacing={'.01em'}>
                    Your look will appear this way in:
                </Text>


                <Flex justifyContent={'space-between'}>
                    <Image
                        w={'100px'}
                        height={'auto'}
                        src={'/landing/vault-hill-logo.png'}
                        mt={'16px'}
                    />

                    <Image

                        w={'120px'}
                        height={'auto'}
                        src={'/landing/ntvrk-logo.png'}
                        mt={'16px'}
                    />
                </Flex>
            </Box>
        </Flex>
    )
}


const VirtualPhotoContent = () => {
    return (
        <Stack py={'30px'}>
            <Text fontSize={19} letterSpacing={'.01em'}>
                Upload you photo, and get new photo with a digital clothing on in a minutes
            </Text>

            <Flex maxW={'100%'}>
                <Image
                    objectFit='cover'
                    w={'50%'}
                    height={'auto'}
                    src={'/landing/virtual-photo-before.png'}
                    mt={'16px'}
                />

                <Image
                    objectFit='cover'
                    w={'50%'}
                    height={'auto'}
                    src={'/landing/virtual-photo-after.png'}
                    mt={'16px'}
                />
            </Flex>
        </Stack>
    )
}