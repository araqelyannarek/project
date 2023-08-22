import React, {ReactNode} from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
    Button,
    useDisclosure,
    ModalOverlay
} from '@chakra-ui/react';

import {
    Modal,
    ModalHeader,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import {useRouter} from "next/router";
import ContactFormWithSocialButtons from "../contact/contact-us-popUp/ContactFormSend";

const Testimonial = ({ children }: { children: ReactNode }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const pricePage = async () => {
        router.push('/price');
    }

    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            p={8}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as={'h3'} fontSize={'xl'}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({
   src,
   name,
   title,
}: {
    src: string;
    name: string;
    title: string;
}) => {
    // @ts-ignore
  return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

export default function Possibility() {
    const router = useRouter()
    const handlePricing = async () => {
        router.push('/price')
    }
    const reload=()=>window.location.reload();

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Box>
            <Container maxW={'7xl'} py={20} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading textAlign={'center'}>
                        Ready to
                        <Text
                            as={'span'}
                            position={'relative'}
                            color={'#255DB1'}
                            mx={2}
                        >
                             modernise and optimise
                        </Text>
                        IT resources?
                    </Heading>
                </Stack>

                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={8}
                    direction={{base: 'column', sm: 'row'}}>
                    <Button
                        size={'lg'}
                        fontWeight={'700'}
                        px={12}
                        colorScheme={'white'}
                        bg={'#255DB1'}
                        _hover={{ bg: '#3D7DD6' }}
                        onClick={handlePricing}
                    >
                        Get started
                    </Button>
                    <Button
                        size={'lg'}
                        fontWeight={'700'}
                        px={12}
                        color={'#255DB1'}
                        onClick={() => onOpen()}
                    >
                        Contact Us
                    </Button>
                </Flex>

                <Box position="relative" >
                    <Modal onEsc={reload} isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader> Contact us here for a fast response </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <ContactFormWithSocialButtons/>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </Box>
            </Container>

        </Box>
    );
}