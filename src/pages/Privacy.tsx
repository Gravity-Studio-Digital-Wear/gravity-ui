import * as React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import {Page} from "../core/Page";
import {BaseContainer} from "../components/containers/BaseContainer";
import {usePageLoader} from "../hooks/usePageLoader";

export const Privacy: Page = () => {
    const pageLoadingStore = usePageLoader({
        breakpoints: {
           all: 100
        }
    })

    React.useEffect(() => {
        pageLoadingStore.done('all')
    }, [])


    return (
        <Box px={{base: '17px', md: 0}}>
            <Heading textTransform={'uppercase'}>Privacy</Heading>

            <Text as={'p'} mt={6}>
                Gravity Layer LTD
                <br/>
                <br/>
                86-90 Paul Street, London, UK EC2A 4NE
                <br/>

                <br/>
                REPRESENTED BY <br/>
                Emily Rosa Shahaj<br/>
                <br/>


                CONTACT
                <br/>
                E-Mail: hello@gravitylayer.io<br/>
                Internet: https://gravitylayer.io
                <br/><br/>
                REGISTRATION
                <br/>
                Entry in Commercial register number 13351743<br/>
                <br/>
                This website is operated by Gravity Layer LTD. Throughout the site, the terms “we”, “us” and “our”
                refer to Gravity Layer LTD. Gravity Layer LTD offers this website, including all information,
                tools and services available from this site to you, the user, conditioned upon your acceptance of all
                terms, conditions, policies and notices stated here.
                <br/><br/>


                We receive, collect and store any information you enter on our website or provide us in any other way.
                In addition, we collect the Internet protocol (IP) address used to connect your computer to the
                Internet; login; e-mail address; password; computer and connection information and purchase history. We
                may use software tools to measure and collect session information, including page response times, length
                of visits to certain pages, page interaction information, and methods used to browse away from the page.
                We also collect personally identifiable information (including name, email, password, communications);
                payment details (including credit card information), and personal profile.

                <br/><br/>

                When you conduct a transaction on our website, as part of the process, we collect personal information
                you give us such as your name, address and email address. Your personal information will be used for the
                specific reasons stated above only.

                <br/><br/>

                We collect such Non-personal and Personal Information for the following purposes:<br/>

                To provide and operate the Services;<br/>

                To provide our Users with ongoing customer assistance and technical support;<br/>

                To be able to contact our Visitors and Users with general or personalized service-related notices and
                promotional messages;<br/>

                To create aggregated statistical data and other aggregated and/or inferred Non-personal Information,
                which we or our business partners may use to provide and improve our respective services;<br/>

                To comply with any applicable laws and regulations.<br/>

                <br/><br/>

                Our company is hosted on the Wix.com platform. Wix.com provides us with the online platform that allows
                us to sell our products and services to you. Your data may be stored through Wix.com’s data storage,
                databases and the general Wix.com applications. They store your data on secure servers behind a
                firewall.

            </Text>
        </Box>
    )
}


Privacy.getPageContainer = BaseContainer;