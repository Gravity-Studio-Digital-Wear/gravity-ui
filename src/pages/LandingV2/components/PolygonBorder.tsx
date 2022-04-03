import * as React from 'react';
import {Box, BoxProps, Button, ButtonProps} from "@chakra-ui/react";
import {toPath} from 'svg-points'
import {observer} from "mobx-react";
import {useService} from "../../../core/decorators/service";
import {PageLoadingStore} from "../../../stores/PageLoadingStore";


function polygon(w, h, offset: { x: number, y: number }) {
    const baseEdges = [[0, 0], [w, 0], [w, h], [0, h]];
    const edges = [[0, 0], [18, 23], [8, 9], [8, 9],]

    let edgesCoords = [];

    for (let i = 0; i < baseEdges.length; i++) {
        const [x0, y0] = baseEdges[i];
        const [dx, dy] = edges[i];

        if (dx === 0 && dy === 0) {
            edgesCoords.push({x: x0, y: y0});

            continue;
        }


        const ddx = {
            x: x0 === 0 ? dx : x0 - dx,
            y: y0,
        };

        const ddy = {
            x: x0,
            y: y0 === 0 ? dy : y0 - dy,
        };

        if (i % 2 === 0) {

            edgesCoords.push(ddy, ddx)
        } else {
            edgesCoords.push(ddx, ddy)
        }
    }

    edgesCoords[0].moveTo = true;


    return toPath(edgesCoords)
}


const Polygon = observer((props: BoxProps) => {
    const ref = React.useRef()

    const [data, set] = React.useState(null);

    React.useLayoutEffect(() => {
        const resizeObserver = new window.ResizeObserver((entries) => {
            entries.map((entry, index) => {
                const w = entry.contentRect.width
                const h = entry.contentRect.height


                set({
                    path: polygon(w, h - 6, {x: 0, y: 0}),
                    w,
                    h
                })
            })
        })

        resizeObserver.observe(ref.current);

        return () => resizeObserver.unobserve(ref.current);
    }, [])

    return (
        <Box ref={ref} {...props}>
            {(data !== null) && (
                <svg viewBox={`0 0 ${data.w} ${data.h}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className={'gr-polygon-btn-outline'}
                        d={data.path + 'Z'}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth={'2px'}
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />

                    <path
                        className={'gr-polygon-btn-fill'}
                        d={data.path + 'Z'}
                        fill="#D4F23F"
                        stroke="#E7F4A5"
                        strokeWidth={'2px'}
                        fillRule="evenodd"
                        clipRule="evenodd"/>
                </svg>
            )}
        </Box>
    );
})


export function PolygonBorder({children, ...props}: ButtonProps) {
    return (
        <Button
            bg={'transparent'}
            height={'56px'}
            _hover={{bg: 'transparent'}}
            px={0}
            sx={{
                cursor: 'pointer',
                '.gr-polygon-btn-outline, .gr-polygon-btn-base, .gr-polygon-btn-fill': {
                    transitionDelay: '300ms',
                    transition: 'all ease-out 100ms',
                },
                '&:hover .gr-polygon-btn-outline': {
                    transform: 'translateY(2.5px)'
                },

                '&:hover .gr-polygon-btn-fill': {
                    transform: 'translateY(3.5px)',
                    fill: '#D9FF1D'
                },

                '&:hover .gr-polygon-btn-base': {
                    transform: 'translateY(-2.5px)',
                },

                '.gr-polygon-btn-fill': {
                    height: '50px',
                    transform: 'translateY(6px)'
                },
                '&:focus': {
                    outline: 'none',
                    boxShadow: 'none'
                },
                '&:focus .gr-polygon-btn-base': {
                    color: '#fff',
                },
                '&:focus .gr-polygon-btn-fill': {
                    transform: 'translateY(3.5px)',
                    fill: '#39373E'
                },
            }}

            {...props}
        >
            <Polygon className={'gr-polygon-btn__bg'} w={'100%'} height={'100%'}/>

            <Box position={'absolute'}

                 bottom={0}
                 height={'50px'}
                 color={'basic.500'}
                 className={'gr-polygon-btn-base'}
                 zIndex={2}
                 fontWeight={600}
                 letterSpacing={'0.08em'}
                 display={'flex'}
                 justifyContent={'center'}
                 alignItems={'center'}
            >
                {children}
            </Box>
        </Button>
    )
}


