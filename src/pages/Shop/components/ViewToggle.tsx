import * as React from 'react';
import {observer} from "mobx-react";
import {chakra, Flex, HStack, Stack, Text, useRadio, useRadioGroup, UseRadioProps} from "@chakra-ui/react";

type ViewType = 'grid' | 'chess';

const VIEW_TYPE: Record<ViewType, React.FC> = {
    chess: ChessSvg,
    grid: GridSvg
};

const RadioButtonBase = chakra(Flex, {
    baseStyle: {
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        transition: 'all .3s',
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'basic.500',
        color: 'basic.500',
        cursor: 'pointer',
        px: '11px',
        py: '11px',
        mt: '0',
        w: '44px',
        justifyContent: 'center',
        marginLeftStart: '0',
        _checked: {
            bg: 'primary.500',
            color: "white",
        },
        _focus: {
            boxShadow: "none",
        }
    }
})

function RadioButton(props: React.PropsWithChildren<UseRadioProps>) {
    const {getInputProps, getCheckboxProps} = useRadio(props)

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Stack as={'label'} spacing={0}>
            <input {...input}/>
            <RadioButtonBase {...checkbox} children={props.children}/>
        </Stack>
    );
}

export const ViewToggle = observer(function ViewToggle() {
    const options: ViewType[] = ["chess", "grid"]

    const {getRootProps, getRadioProps} = useRadioGroup({
        name: "view",
        defaultValue: "chess",
        onChange: console.log,
    })

    return (
        <HStack spacing={'12px'}>
            <Text as={'span'} whiteSpace={'nowrap'} textTransform={'uppercase'}>View</Text>

            <HStack justify={'center'} width={'100%'} spacing={0}>
                {options.map((value) => {
                    const radio = getRadioProps({value})
                    const TypeIcon = VIEW_TYPE[value];

                    return (
                        <RadioButton key={value} {...radio}>
                            <TypeIcon/>
                        </RadioButton>
                    )
                })}
            </HStack>
        </HStack>
    )
})

function ChessSvg() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="4" transform="matrix(-1 0 0 1 4 4)" fill="currentColor"/>
            <circle r="4" transform="matrix(-1 0 0 1 18 18)" fill="currentColor"/>
        </svg>
    )
}

function GridSvg() {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="4" transform="matrix(-1 0 0 1 18 4)" fill="currentColor"/>
            <circle r="4" transform="matrix(-1 0 0 1 4 18)" fill="currentColor"/>
            <circle r="4" transform="matrix(-1 0 0 1 18 18)" fill="currentColor"/>
            <circle r="4" transform="matrix(-1 0 0 1 4 4)" fill="currentColor"/>
        </svg>
    )
}