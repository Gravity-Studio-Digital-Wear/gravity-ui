import * as React from 'react';
import {observer} from "mobx-react";
import {Box, chakra, Flex, HStack, Stack, useRadio, useRadioGroup, UseRadioProps} from "@chakra-ui/react";
import {ComingSoon} from "../../components/icons/ComingSoon";

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
        },
        _disabled: {
            cursor: 'initial',
            userSelect: 'none',
            color: 'basic.100',
            borderColor: 'basic.100',
        }
    }
})

function RadioButton(props: React.PropsWithChildren<UseRadioProps>) {
    const {getInputProps, getCheckboxProps} = useRadio(props)

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Stack as={'label'} position={'relative'}>
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
        <HStack justify={'center'} width={'100%'} spacing={0} position={'relative'}>
            <RadioButton {...getRadioProps({value: 'new'})}>
                {'new'}
            </RadioButton>

            <RadioButton  {...getRadioProps({value: 'resell'})} isDisabled={true}>
                {'resell'}

                <Box position={'absolute'} top={'-24px'} right={'-50%'}>
                    <ComingSoon/>
                </Box>
            </RadioButton>
        </HStack>
    )
})