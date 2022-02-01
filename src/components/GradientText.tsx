import * as React from "react";
import {chakra, PropsOf, Text} from "@chakra-ui/react";


const BgGradientTextCmp = chakra(Text, {
    baseStyle: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
});

type BgGradientProps = PropsOf<typeof BgGradientTextCmp>;

export const BgGradientText = (props: BgGradientProps) => {
    return (
        <BgGradientTextCmp style={{'WebkitBackgroundClip': 'text'}} {...props}/>
    )
}