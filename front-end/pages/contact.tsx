import {NextPage} from "next";
import ContactInfo from "../components/contact/contact-info/ContactInfo";
import React from "react";
import { Center } from "@chakra-ui/react";

const Contact: NextPage = () => {
    return (
        <Center w='full' minH='70vh'>
            <ContactInfo/>
        </Center>
    )
}

export default Contact;