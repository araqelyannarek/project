import React from "react";
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
    InputLeftElement
} from '@chakra-ui/react';
import {  MdOutlineEmail } from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { useForm } from 'react-hook-form'


const Contact = () =>  {

    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            name: '',
            businesName: '',
            email: '',
            message: '',
        },
    })

    const onSubmit = (data: any) => {
        console.log(data); 
    };

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <Flex gap={4}>
                                <FormControl id="name">
                                    <FormLabel>Name</FormLabel>
                                    <InputGroup >
                                        <InputLeftElement pointerEvents="none">
                                            <BsPerson color="gray.800" />
                                        </InputLeftElement>

                                        <Input {...register('name')} type="text" size="md"/>
                                        
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="email">
                                    <FormLabel>Email Adress</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement pointerEvents="none">
                                            <MdOutlineEmail color="gray.800" />
                                        </InputLeftElement>

                                        <Input {...register('email')} type="text" size="md"/>
                                    </InputGroup>
                                </FormControl>
                            </Flex>
                            <FormControl id="businesName">
                                <FormLabel>Business Name</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement pointerEvents="none" >
                                        <BsPerson color="gray.800" />
                                    </InputLeftElement>

                                    <Input {...register('businesName')} type="text" size="md" />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="message">
                                <FormLabel>Message</FormLabel>
                                <Input
                                    {...register('message')}
                                    borderColor="gray.300"
                                    _hover={{ borderRadius: 'gray.300'}}
                                    placeholder="message"
                                    type="textarea"                             
                                />
                            </FormControl>
                            <FormControl id="name" textAlign={'right'} float="right">
                                <Button
                                    type="submit"
                                    variant="solid"
                                    bg="#255DB1"
                                    color="white"
                                    _hover={{bg: "blue.600"}}
                            >
                                    Send Message
                                </Button>
                            </FormControl>
                            </form>
                        </VStack>
                    </Box>
                </Box>
            </WrapItem>
        </Box>
    );
}

export default  Contact; 