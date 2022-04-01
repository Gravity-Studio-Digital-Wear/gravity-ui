import * as React from 'react';
import {Stack} from "@chakra-ui/react";
import {Block1} from "./blocks/Block1";
import {Block2} from "./blocks/Block2";
import {Block3} from "./blocks/Block3";
import {Block4} from "./blocks/Block4";
import {Block5} from "./blocks/Block5";
import {Block6} from "./blocks/Block6";
import {Block7} from "./blocks/Block7";

const Landing = () => {
    return (
        <Stack spacing={0} fontFamily={'Montserrat'} overflow={'hidden'}>
            <Block1/>
            <Block2/>
            <Block3/>
            <Block4/>
            <Block5/>
            <Block6/>
            <Block7/>
        </Stack>
    )
}

export default Landing




