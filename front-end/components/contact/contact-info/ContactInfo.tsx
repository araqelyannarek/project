import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    useColorModeValue,
    Stack,
    StackDivider,
} from '@chakra-ui/react';

import {FaLinkedin, FaFacebook} from "react-icons/fa";
import React from "react";
import ContactFormSend from '../contact-us-popUp/ContactFormSend';

export default function contact() {
    return (
        <Container maxW="full" centerContent overflow="hidden">
            <VStack spacing={2} pt={8} mt={8} textAlign="center">
                <Heading as="h1" color={'#255DB1'} fontSize="2xl">
                    Contact Us
                </Heading>
            </VStack>
            <Flex>
                <Box
                    bg={useColorModeValue('white', 'gray.700')}
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 8 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <Stack spacing={4}>
                                            <Text
                                                textTransform={'uppercase'}
                                                color={'#255DB1'}
                                                fontWeight={'800'}
                                                fontSize={'xl'}
                                                bg={useColorModeValue('blue.50', 'blue.900')}
                                                p={2}
                                                alignSelf={'flex-start'}
                                                rounded={'md'}>
                                                Our Contacts
                                            </Text>
                                            <Text
                                                textTransform={'uppercase'}
                                                fontWeight={600}
                                                fontSize={'lg'}
                                                color={'gray.500'}
                                            >
                                                Email us
                                            </Text>
                                            <Stack
                                                py={4} px={2} rounded={'lg'}
                                                spacing={4}
                                                divider={
                                                    <StackDivider
                                                        borderColor={useColorModeValue('gray.400', 'gray.800')}
                                                    />
                                                }>
                                                <Flex alignItems={"center"} px={'20px'} >
                                                    <Text
                                                        color={'blue.500'}
                                                        fontWeight={600}
                                                        fontSize={'sm'}
                                                    >
                                                        For support
                                                    </Text>

                                                    <Flex alignItems={'center'} ml={10} gap={'10px'}>
                                                        <Text color={'gray.500'} fontSize={'12px'}>
                                                            email us at
                                                        </Text>

                                                        <Text
                                                            color={'blue.400'}
                                                            fontWeight={600}
                                                            fontSize={'14px'}
                                                            cursor={'pointer'}
                                                        >
                                                            support@connect2hq.com
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                            </Stack> 
                                        </Stack>
                                    </Box>
                                </Box>
                            </WrapItem>
                            <ContactFormSend/>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}