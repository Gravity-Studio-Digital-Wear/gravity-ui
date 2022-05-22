import {Flex} from "@chakra-ui/react";
import {Block} from "../components/Block";
import * as React from "react";
import {Centered} from "../components/Common";

export const Block4 = () => {
    const ref = React.useRef<HTMLDivElement>();

    const [fw, setFw] = React.useState(1134)
    const [fh, setFh] = React.useState(600)


    React.useEffect(() => {
        const width = ref.current.getBoundingClientRect().width

        const w = width * 1134 / 600;
        const h = width * 600 / 1134

        setFw(w);
        setFh(h)
    }, [ref])
    return (
        <Block>
            <Centered>
                <Flex justifyContent={'center'} mt={'64px'} position={'relative'} ref={ref}>
                    <iframe
                        width={fw}
                        height={fh}
                        src={`https://www.youtube.com/embed/p9cLZkwdzxQ`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />
                </Flex>
            </Centered>
        </Block>
    )
}