import React from "react";
import {motion, SVGMotionProps, Transition} from "framer-motion";



interface Props extends SVGMotionProps<HTMLOrSVGElement> {
    isOpen?: boolean;
    color?: string;
    strokeWidth?: string | number;
    transition?: Transition;
    lineProps?: any;
}

export const BurgerButton = (burgerProps: Props) => {
    let {
        isOpen = false,
        width = 24,
        height = 24,
        strokeWidth = 2,
        color = "#000",
        transition = null,
        lineProps: baseLineProps,
        ...props
    } = burgerProps;

    const variant = isOpen ? "opened" : "closed";

    const top = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: 45,
            translateY: 1.75
        }
    };
    const center = {
        closed: {
            opacity: 1
        },
        opened: {
            opacity: 0
        }
    };
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0
        },
        opened: {
            rotate: -45,
            translateY: -1.75
        }
    };

    const lineProps = {
        stroke: color,
        strokeWidth: strokeWidth as number,
        vectorEffect: "non-scaling-stroke",
        initial: "closed",
        animate: variant,
        transition,
        ...baseLineProps
    };
    const unitHeight = 4;
    const unitWidth = (unitHeight * (width as number)) / (height as number);

    return (
        <motion.svg
            viewBox={`0 0 ${unitWidth} ${unitHeight}`}
            overflow="visible"
            preserveAspectRatio="none"
            width={width}
            height={height}
            {...props}
        >
            <motion.line
                x1="0"
                x2={unitWidth}
                y1="0"
                y2="0"
                variants={top}
                {...lineProps}
            />
            <motion.line
                x1="0"
                x2={unitWidth}
                y1="1.75"
                y2="1.75"
                variants={center}
                {...lineProps}
            />
            <motion.line
                x1="0"
                x2={unitWidth}
                y1="3.5"
                y2="3.5"
                variants={bottom}
                {...lineProps}
            />
        </motion.svg>
    );
};