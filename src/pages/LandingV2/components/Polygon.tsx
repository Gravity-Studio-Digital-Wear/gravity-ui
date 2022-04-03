import {toPath} from "svg-points";
import {observer} from "mobx-react";
import {Box, BoxProps} from "@chakra-ui/react";
import * as React from "react";

type TPoint = [number, number]

type TPolygonProps = {
    config?: Partial<{
        h: number
        w: number;
        offset: { x: number, y: number };
        edges: TPoint[]
    }>;

    children: ({path}: { path: string }) => React.ReactNode
}


const defaultEdges: TPoint[] = [[0, 0], [0, 0], [0, 0], [0, 0]];


function polygon(edges: TPoint[], w, h, offset: { x: number, y: number }) {
    const baseEdges = [[0, 0], [w, 0], [w, h], [0, h]];

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


export const Polygon = observer((props: BoxProps & TPolygonProps) => {
    const {config, children} = props;

    const ref = React.useRef()
    const [data, set] = React.useState(null);

    React.useLayoutEffect(() => {
        const resizeObserver = new window.ResizeObserver((entries) => {
            entries.map((entry, index) => {
                const w = entry.contentRect.width
                const h = entry.contentRect.height

                const edges = config?.edges || defaultEdges;

                set({
                    path: polygon(edges, w, h, {x: 0, y: 0}),
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
                    {children(data)}
                </svg>
            )}
        </Box>
    );
})