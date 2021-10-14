import React, {useMemo, useRef, useState} from "react";

import {Box, Flex, Stack, VStack} from "@chakra-ui/react";
import {motion, useAnimation, useMotionValue} from "framer-motion";

export function percentage(x, y) {
    return 100 / (y / x)
}

const MotionFlex = motion(Stack);

const transitionProps = {
    stiffness: 400,
    type: "spring",
    damping: 60,
    mass: 3
};

export const ChakraCarousel = ({children, gap}) => {
    const [multiplier] = useState(0.1);
    const [constraint] = useState(1);

    const [trackIsActive, setTrackIsActive] = useState(false);
    const [activeItem, setActiveItem] = useState(0);

    const [itemsRef, setItemRefs] = React.useState([])

    const positions = useMemo(
        (...args) => children.map((_, index) => {
            if (itemsRef.length === 0) {
                return 0
            }

            const height = itemsRef[index].getBoundingClientRect().height

            return -Math.abs((height + gap) * index)
        }),
        [itemsRef]
    );

    const sliderProps = {
        setTrackIsActive,
        setActiveItem,
        activeItem,
        constraint,
        positions,
        gap
    };

    const trackProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        activeItem,
        constraint,
        multiplier,
        positions,
        gap
    };

    const itemProps = {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        activeItem,
        constraint,
        positions,
        gap,
    };

    return (
        <Slider {...sliderProps}>
            <Track {...trackProps}>
                {children.map((child, index) => (
                    <Item {...itemProps} ref={ref => {
                        itemsRef[index] = ref

                        setItemRefs(itemsRef)
                    }} index={index} key={index}>
                        {child}
                    </Item>
                ))}
            </Track>
        </Slider>
    );
};

const Slider = ({
                    setTrackIsActive,
                    setActiveItem,
                    activeItem,
                    constraint,

                    positions,
                    children,
                    gap
                }) => {

    const handleFocus = () => setTrackIsActive(true);

    const handleDecrementClick = () => {
        setTrackIsActive(true);
        !(activeItem === positions.length - positions.length) &&
        setActiveItem((prev) => prev - 1);
    };

    const handleIncrementClick = () => {
        setTrackIsActive(true);
        !(activeItem === positions.length - constraint) &&
        setActiveItem((prev) => prev + 1);
    };

    return (
        <>
            <Box
                maxH={'550px'}
                w={{base: "100%", md: `calc(100% + ${gap}px)`}}
                ml={{base: 0, md: `-${gap / 2}px`}}
                px={`${gap / 2}px`}
                position="relative"
                overflow="hidden"
                _before={{
                    bgGradient: "linear(to-r, base.d400, transparent)",
                    position: "absolute",
                    w: `${gap / 2}px`,
                    content: "''",
                    zIndex: 1,
                    h: "100%",
                    left: 0,
                    top: 0
                }}
                _after={{
                    bgGradient: "linear(to-l, base.d400, transparent)",
                    position: "absolute",
                    w: `${gap / 2}px`,
                    content: "''",
                    zIndex: 1,
                    h: "100%",
                    right: 0,
                    top: 0
                }}
            >
                {children}
            </Box>

            {/*<Flex w={`${itemWidth}px`} mt={`${gap / 2}px`} mx="auto">*/}
            {/*    <Button*/}
            {/*        onClick={handleDecrementClick}*/}
            {/*        onFocus={handleFocus}*/}
            {/*        mr={`${gap / 3}px`}*/}
            {/*        color="gray.200"*/}
            {/*        variant="link"*/}
            {/*        minW={0}*/}
            {/*    >*/}
            {/*        <ChevronLeftIcon boxSize={9}/>*/}
            {/*    </Button>*/}

            {/*    <Progress*/}
            {/*        value={percentage(activeItem, positions.length - constraint)}*/}
            {/*        alignSelf="center"*/}
            {/*        borderRadius="2px"*/}
            {/*        bg="base.d100"*/}
            {/*        flex={1}*/}
            {/*        h="3px"*/}
            {/*        sx={{*/}
            {/*            "> div": {*/}
            {/*                backgroundColor: "gray.400"*/}
            {/*            }*/}
            {/*        }}*/}
            {/*    />*/}

            {/*    <Button*/}
            {/*        onClick={handleIncrementClick}*/}
            {/*        onFocus={handleFocus}*/}
            {/*        ml={`${gap / 3}px`}*/}
            {/*        color="gray.200"*/}
            {/*        variant="link"*/}
            {/*        zIndex={2}*/}
            {/*        minW={0}*/}
            {/*    >*/}
            {/*        <ChevronRightIcon boxSize={9}/>*/}
            {/*    </Button>*/}
            {/*</Flex>*/}
        </>
    );
};

const Track = (props: any) => {
    const {
        setTrackIsActive,
        trackIsActive,
        setActiveItem,
        activeItem,
        constraint,
        multiplier,
        itemWidth,
        positions,
        children
    } = props;


    const [dragStartPosition, setDragStartPosition] = useState(0);
    const controls = useAnimation();
    const x = useMotionValue(0);
    const node = useRef(null);

    const handleDragStart = () => setDragStartPosition(positions[activeItem]);


    const handleDragEnd = (_, info) => {
        const distance = info.offset.y;
        const velocity = info.velocity.y * multiplier;
        const direction = velocity < 0 || distance < 0 ? 1 : -1;

        const extrapolatedPosition =
            dragStartPosition +
            (direction === 1
                ? Math.min(velocity, distance)
                : Math.max(velocity, distance));

        console.log(positions, extrapolatedPosition, dragStartPosition, velocity, distance, positions[activeItem])

        const closestPosition = positions.reduce((prev, curr) => {
            return Math.abs(curr - extrapolatedPosition) <
            Math.abs(prev - extrapolatedPosition)
                ? curr
                : prev;
        }, 0);

        if (!(closestPosition < positions[positions.length - constraint])) {
            setActiveItem(positions.indexOf(closestPosition));
            controls.start({
                y: closestPosition,
                transition: {
                    velocity: info.velocity.y,
                    ...transitionProps
                }
            });
        } else {
            setActiveItem(positions.length - constraint);
            controls.start({
                y: positions[positions.length - constraint],
                transition: {
                    velocity: info.velocity.y,
                    ...transitionProps
                }
            });
        }
    };

    // const handleResize = useCallback(
    //     () =>
    //         controls.start({
    //             x: positions[activeItem],
    //             transition: {
    //                 ...transitionProps
    //             }
    //         }),
    //     [activeItem, controls, positions]
    // );

    // const handleClick = useCallback(
    //     (event) =>
    //         node.current.contains(event.target)
    //             ? setTrackIsActive(true)
    //             : setTrackIsActive(false),
    //     [setTrackIsActive]
    // );

    // const handleKeyDown = useCallback(
    //     (event) => {
    //         if (trackIsActive) {
    //             if (activeItem < positions.length - constraint) {
    //                 if (event.key === "ArrowRight" || event.key === "ArrowUp") {
    //                     event.preventDefault();
    //                     setActiveItem((prev) => prev + 1);
    //                 }
    //             }
    //             if (activeItem > positions.length - positions.length) {
    //                 if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
    //                     event.preventDefault();
    //                     setActiveItem((prev) => prev - 1);
    //                 }
    //             }
    //         }
    //     },
    //     [trackIsActive, setActiveItem, activeItem, constraint, positions.length]
    // );

    // useEffect(() => {
    //     handleResize();
    //
    //     document.addEventListener("keydown", handleKeyDown);
    //     document.addEventListener("mousedown", handleClick);
    //     return () => {
    //         document.removeEventListener("keydown", handleKeyDown);
    //         document.removeEventListener("mousedown", handleClick);
    //     };
    // }, [handleClick, handleResize, handleKeyDown, positions]);

    return (
        <VStack ref={node} spacing={5}>
            <MotionFlex
                dragConstraints={node}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                animate={controls}

                drag="y"
                _active={{cursor: "grabbing"}}
                minWidth="min-content"
                flexWrap="nowrap"
                cursor="grab"
            >
                {children}
            </MotionFlex>
        </VStack>
    );
};

const Item = React.forwardRef((props: any, ref) => {
    const {
        setTrackIsActive,
        setActiveItem,
        activeItem,
        constraint,

        positions,
        children,
        index,
        gap
    } = props;

    const containerRef = React.useRef(null)

    const [userDidTab, setUserDidTab] = useState(false);


    React.useImperativeHandle(ref, () => (
        containerRef.current
    ))

    const handleFocus = () => setTrackIsActive(true);

    const handleBlur = () => {
        userDidTab && index + 1 === positions.length && setTrackIsActive(false);
        setUserDidTab(false);
    };

    const handleKeyUp = (event) =>
        event.key === "Tab" &&
        !(activeItem === positions.length - constraint) &&
        setActiveItem(index);

    const handleKeyDown = (event) => event.key === "Tab" && setUserDidTab(true);

    return (
        <Flex
            ref={containerRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            _notLast={{
                mb: `${gap}px`
            }}
        >
            {children}
        </Flex>
    );
});
