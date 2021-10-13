import * as React from 'react';
import {observer} from "mobx-react";
import {chakra, Flex, HStack, Stack, useRadio, useRadioGroup, UseRadioProps} from "@chakra-ui/react";

const RadioButtonBase = chakra(Flex, {
    baseStyle: {
        fontSize: 20,
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        transition: 'all .3s',
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'primary.500',
        color: 'primary.500',
        cursor: 'pointer',
        px: 6,
        py: 7.5,
        w:'132px',
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
        <Stack as={'label'}>
            <input {...input} />
            <RadioButtonBase {...checkbox} children={props.children}/>
        </Stack>
    );
}

export const Navigation = observer(function Navigation() {
    const options = ["new", "resell"]

    const {getRootProps, getRadioProps} = useRadioGroup({
        name: "category",
        defaultValue: "new",
        onChange: console.log,
    })

    return (
        <HStack justify={'center'} width={'100%'} spacing={0}>
            {options.map((value) => {
                const radio = getRadioProps({value})
                return (
                    <RadioButton key={value} {...radio}>
                        {value}
                    </RadioButton>
                )
            })}
        </HStack>
    )
})