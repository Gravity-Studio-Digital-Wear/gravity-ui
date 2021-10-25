import * as React from 'react';
import {Box, Grid, HStack, Stack, Text} from "@chakra-ui/react";
import {IProduct} from "../../../interfaces";
import {processImgUrl} from "../../../utils/imageUrl";


export const Wrapper = (props: React.PropsWithChildren<{}>) => {
    return (
        <Stack spacing={'42px'}>
            {props.children}
        </Stack>
    )
}


export function Card(props: IProduct & { onClickCard: () => void, onClickAdd: () => void }) {
    const videoRef = React.useRef<HTMLVideoElement>(null)

    const onMouseOver = () => {
        videoRef.current && videoRef.current.play();
    }

    const onMouseOut = (e) => {
        videoRef.current.pause()
        videoRef.current.currentTime = 0;
    }

    return (
        <Box display={'flex'}
             justifyContent={'flex-end'}
             position={'relative'}
             cursor={'pointer'}
             className={'g-card'}
             onClick={props.onClickCard}
             onMouseOver={onMouseOver}
             onMouseOut={onMouseOut}
        >
            <figure>
                <video ref={videoRef} playsInline muted>
                    <source src={processImgUrl(props.images[0])} type="video/webm"/>
                </video>
            </figure>

            <Stack position={'absolute'} left={0} bottom={'10px'} spacing={0}>
                <Text textTransform={'uppercase'}
                      fontWeight={'bold'}
                      fontSize={25}
                      letterSpacing={'0.02em'}
                >
                    {props.name}
                </Text>

                <Text textTransform={'uppercase'}>
                    <HStack as={'span'} spacing={'11px'} alignItems={'flex-end'}>
                        <Text as={'span'}
                              fontSize={'15px'}
                              lineHeight={1}
                              textDecoration={'line-through'}>
                            {Math.round(props.priceUSD + (props.priceUSD * 0.5)) / 100} $
                        </Text>
                        <Text as={'span'}
                              fontSize={'21px'}
                              lineHeight={1}
                              color={'alert'}>
                            {props.priceUSD / 100} $
                        </Text>
                    </HStack>
                </Text>

                <Text fontSize={12}
                      letterSpacing={'0.07em'}
                      color={'alert'}
                      textTransform={'uppercase'}>
                    {+props.__supply.remaningSupply || +props.__supply.maxSupply} pieces left
                </Text>
            </Stack>

            <Box
                position={'absolute'}
                opacity={0}
                right={'5px'}
                bottom={'10px'}
                transition={'opacity .3s ease-in'}
                onClick={(e) => {
                    e.stopPropagation()
                    props.onClickAdd()
                }}
                sx={
                    {
                        '.g-card &': {
                            opacity: 1
                        }
                    }
                }
            >
                <AddCartIcon/>
            </Box>
        </Box>
    )
}

function AddCartIcon() {
    return (
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.9584 10.9584C15.1786 6.73818 20.4353 3.70322 26.2002 2.15852C31.965 0.613825 38.035 0.613827 43.7999 2.15852C49.5647 3.70322 54.8214 6.73819 59.0416 10.9584C63.2618 15.1786 66.2968 20.4353 67.8415 26.2002"
                stroke="#523774" strokeWidth="2"/>
            <path
                d="M59.0416 59.0416C54.8214 63.2618 49.5647 66.2968 43.7998 67.8415C38.035 69.3862 31.965 69.3862 26.2001 67.8415C20.4353 66.2968 15.1786 63.2618 10.9584 59.0416C6.73818 54.8214 3.70321 49.5647 2.15852 43.7998"
                stroke="#523774" strokeWidth="2"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M31.8465 27.1215H38.3972C38.3972 25.3126 36.9307 23.8462 35.1218 23.8462C33.3129 23.8462 31.8465 25.3126 31.8465 27.1215ZM29.8465 27.1215H26.9474C25.9283 27.1215 25.0722 27.8878 24.9596 28.9006L23.0595 46.0021C22.9278 47.1868 23.8552 48.2229 25.0472 48.2229H45.1965C46.3885 48.2229 47.3159 47.1868 47.1843 46.0021L45.2841 28.9006C45.1716 27.8878 44.3155 27.1215 43.2964 27.1215H40.3972C40.3972 24.208 38.0353 21.8462 35.1218 21.8462C32.2084 21.8462 29.8465 24.208 29.8465 27.1215Z"
                  fill="#523774"/>
            <path
                d="M40.7593 38.0467C40.7593 41.1456 38.2471 43.6578 35.1481 43.6578C32.0492 43.6578 29.537 41.1456 29.537 38.0467C29.537 34.9477 32.0492 32.4355 35.1481 32.4355C38.2471 32.4355 40.7593 34.9477 40.7593 38.0467Z"
                stroke="#FFF8F5"/>
            <path d="M35.1481 34.9912V41.1023M38.2037 38.0468L32.0925 38.0468" stroke="white"/>
            <path d="M60.1481 35.0002L63.2592 37.3335L63.2592 32.6668L60.1481 35.0002Z" fill="#523774"
                  stroke="#523774"/>
            <path d="M35.2592 59.8892L32.9259 63.0003L37.5926 63.0003L35.2592 59.8892Z" fill="#523774"
                  stroke="#523774"/>
            <path d="M10.3704 35.0003L7.25925 32.667L7.25925 37.3337L10.3704 35.0003Z" fill="#523774"
                  stroke="#523774"/>
            <path d="M35.2592 10.1113L37.5925 7.00022L32.9259 7.00022L35.2592 10.1113Z" fill="#523774"
                  stroke="#523774"/>
        </svg>
    )
}


export const MobileListView = {Wrapper, Card};