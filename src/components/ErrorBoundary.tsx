import * as React from 'react';
import {Box, Text} from "@chakra-ui/react";


export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {error: ""};
    }

    componentDidCatch(error) {
        this.setState({error: `${error.name}: ${error.message}`});
    }

    render() {
        // @ts-ignore
        const {error} = this.state;
        if (error) {
            return (
                <Box w={'100vw'}
                     height={'100vh'}
                     display={"flex"}
                     justifyContent={'center'}
                     alignItems={'center'}
                     bg={'conic-gradient(from 54.26deg at 31.74% 21.24%, #F2EDFF -144.13deg, #FFF8F5 33.04deg, #F2EDFF 215.87deg, #FFF8F5 393.04deg)'}>
                    <Text color={'#000000'}>
                        {'Sorry, something went wrong.'}
                    </Text>

                    <div>{error}</div>
                </Box>
            );
        } else {
            return <>{this.props.children}</>;
        }
    }
}