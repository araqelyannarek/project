import React, { useRef } from "react";
import {
    Flex,
    Box,
    Button,
    VStack,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import {  MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import Amplify, {Auth} from "aws-amplify";
import amplifyConfig from "../../../deployment/amplify-config";
import GraphQLRequest, { API } from 'aws-amplify';
import {getCognitoUser} from "../../../graphql/queries";
import {gql, useLazyQuery, useQuery} from "@apollo/client";

Amplify.configure(amplifyConfig);

export default function contact() {
    const inputsRef: any = useRef({});

    const resetContactForm = () => {
        const {name, bname ,email, message} = inputsRef.current;
        email.value = "";
        bname.value = "";
        name.value = "";
        message.value = "";
    }

    async function submitNewContact() {
        const {
            name,
            bname,
            email,
            message,
        } = inputsRef.current;

        const data = await API.graphql({
            query: getCognitoUser,
            variables: {
                name: name.value,
                bname: bname.value,
                email: email.value,
                message: message.value
            },
        });
        console.log('data ', data);
    }

    async function submitNewContact2() {
        const {
            name,
            bname,
            email,
            message,
        } = inputsRef.current;

        const { loading, error, data } = useQuery<any>(gql(getCognitoUser));
        console.log(loading, error, data, 'data');
    }

    return (
        <Box
            border="2px solid"
            shadow='md'
            color="white"
            borderRadius="lg"
        >
            <WrapItem>
                <Box p={4} bg="white" width={'full'} borderRadius="lg">
                    <Box my={8} width={'full'} color="#0B0E3F">
                        <VStack spacing={5}>
                            <Flex gap={4}>
                                <FormControl id="name">
                                    <FormLabel>Name</FormLabel>
                                    <InputGroup >
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<BsPerson color="gray.800" />}
                                        />
                                        <Input type="text" size="md" ref={(ref) => inputsRef.current.name = ref}/>
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel>Email Adress</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<MdOutlineEmail color="gray.800" />}
                                        />
                                        <Input
                                            ref={(ref) => inputsRef.current.email = ref}
                                            type="text"
                                            size="md"
                                        />
                                    </InputGroup>
                                </FormControl>
                            </Flex>
                            <FormControl id="name">
                                <FormLabel>Business Name</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<BsPerson color="gray.800" />}
                                    />
                                    <Input
                                        ref={(ref) => inputsRef.current.bname = ref}
                                        type="text"
                                        size="md"
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                                <FormLabel>Message</FormLabel>
                                <Textarea
                                    borderColor="gray.300"
                                    _hover={{ borderRadius: 'gray.300'}}
                                    placeholder="message"
                                    ref={(ref) => inputsRef.current.message = ref}
                                />
                            </FormControl>
                            <FormControl id="name" textAlign={'right'} float="right">
                                <Button
                                    variant="solid"
                                    bg="#255DB1"
                                    color="white"
                                    _hover={{bg: "blue.600"}}
                                    // onClick={submitNewContact}
                                    onClick={submitNewContact2}
                            >
                                    Send Message
                                </Button>
                            </FormControl>
                        </VStack>
                    </Box>
                </Box>
            </WrapItem>
        </Box>
    );
}