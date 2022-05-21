import {Centered} from "../components/Common";
import {OurPartners} from "../components/OurPartners";
import {Block} from "../components/Block";
import * as React from "react";
import {OurInvestors} from "../components/OurInvestors";

export const Block6 = () => {
    return (
        <Block>
            <Centered>
                <OurPartners/>
            </Centered>


            <Centered>
                <OurInvestors/>
            </Centered>
        </Block>
    )
}