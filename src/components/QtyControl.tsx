import * as React from 'react';
import {Box, chakra, Flex, FormControl, HStack, Input} from "@chakra-ui/react";
import {useForm} from "react-hook-form";

const ControlWrapper = chakra(Box, {
    baseStyle: {
        color: 'primary.500',
        _hover: {
            color: 'alert',
        }
    }
});

export function QtyControl(props: { max: number ,value: number, onChange: (v: number) => void }) {
    const {value, onChange, max = 100} = props;

    const {register, handleSubmit, watch, formState: {errors}, setValue, getValues, control} = useForm({
        defaultValues: {
            qty: value
        }
    });

    React.useEffect(() => {
        if (value !== getValues('qty')) {
            setValue('qty', value)
        }
    }, [value])

    const qty = watch('qty');

    React.useEffect(() => {
        if (!errors.qty) {
            onChange(qty)
        }
    }, [qty])

    const inc = () => {
        setValue("qty", Math.min(qty + 1, max));
    }

    const dec = () => {
        setValue("qty", Math.max(qty - 1, 0))
    }

    return (
        <Flex alignItems={'center'}>
            <ControlWrapper mr={'12px'} cursor={'pointer'} onClick={() => dec()}>
                <chakra.svg width={{base: '44px', md: '36px'}}  viewBox="0 0 36 36" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="34" height="34" rx="17" fill="currentColor"/>
                    <path
                        d="M18.5625 17.3125H24.1875V18.6875H18.5625L17.4375 18.6875H11.8125V17.3125H17.4375H18.5625Z"
                        fill="white"/>
                    <rect x="1" y="1" width="34" height="34" rx="17" stroke="#39373E"/>
                </chakra.svg>
            </ControlWrapper>

            <FormControl flex={{ base: '1 0', md: 'none'}} width={'74px'}>
                <Input
                    type={'number'}
                    borderRadius={0}
                    bg={'white'}
                    border={'1px solid'}
                    borderColor={'basic.500'}
                    textAlign={'center'}
                    max={max}
                    height={{base: '44px', md: '50px'}}

                    {...register("qty", {
                        valueAsNumber: true,
                        min: 0,
                        max: max
                    })}
                />
            </FormControl>

            <ControlWrapper ml={'12px'} cursor={'pointer'} onClick={() => inc()}>
                <chakra.svg width={{base: '44px', md: '36px'}} viewBox="0 0 36 36" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="34" height="34" rx="17" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M17.3125 17.3125V10.4375H18.6875V17.3125H25.5625V18.6875H18.6875V25.5625H17.3125V18.6875H10.4375V17.3125H17.3125Z"
                          fill="white"/>
                    <rect x="1" y="1" width="34" height="34" rx="17" stroke="#39373E"/>
                </chakra.svg>
            </ControlWrapper>
        </Flex>
    )
}