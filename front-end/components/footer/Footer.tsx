import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Input,
    IconButton,
    Text,
    Flex,
    Tag,
    VisuallyHidden,
    chakra,
    useColorModeValue,
    Button
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

import Image from 'next/image'
import logo from '../../asset/images/Transparent.png'
import {BiMailSend} from 'react-icons/bi';
import {FaFacebook, FaLinkedin} from 'react-icons/fa';
import {NextPage} from "next";
import {useRouter} from "next/router";

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            rounded={'10px'}
            color={'#255DB1'}
            bg={'white'}
            w={10}
            h={10}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{ bg: '#3D7DD6', color: 'white' }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const Footer: NextPage = () => {
    const router = useRouter();

    const handlePricing = async () => {
        router.push('/price')
    }

    const handleContact = async () => {
        router.push('/contact')
    }

    const handleAbout = async () => {
        router.push('/')
    }

    const handleTerms = async () => {
        router.push('/terms')
    }

    const handlePrivacy = async () => {
        router.push('/privacy')
    }

    return (
        <Box
            shadow={'md'}
            bg={useColorModeValue('gray.50', 'gray.900')}
            borderColor={useColorModeValue("blue.500", "gray.500")}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
                    <Stack align={'flex-start'}>
                        <Text
                            color={'gray.600'}
                            fontWeight={600}
                            fontSize={'lg'}
                        >
                            Company
                        </Text>
                        <Link onClick={handleAbout}>About</Link>
                        <Stack direction={'row'} onClick={handlePricing} align={'center'} spacing={2}>
                            <Link >Pricing</Link>
                            <Tag
                                size={'sm'}
                                bg={'#255DB1'}
                                ml={2}
                                color={'white'}>
                                New
                            </Tag>
                        </Stack>
                        <Link onClick={handleContact}>Contact Us</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Text
                            color={'gray.600'}
                            fontWeight={600}
                            fontSize={'lg'}
                        >
                            Legal
                        </Text>
                        <Flex  width={'full'} flexDirection={'column'}>
                            <Link onClick={handleTerms}>T&C</Link>
                            <Link onClick={handlePrivacy}>Privacy Policy</Link>
                        </Flex>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Text
                            color={'gray.600'}
                            fontWeight={600}
                            fontSize={'lg'}
                        >
                            Stay up to date
                        </Text>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                border={'2px solid'} borderColor={'#255DB1'} rounded={'lg'}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />

                            <IconButton
                                bg={'#255DB1'}
                                _hover={{ bg: '#3D7DD6' }}
                                color={useColorModeValue('white', '#255DB1')}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
            <Box py={10}>
                <Flex
                    align={'center'}
                    _before={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('blue.200', 'blue.700'),
                        flexGrow: 1,
                        mr: 8,
                    }}
                    _after={{
                        content: '""',
                        borderBottom: '1px solid',
                        borderColor: useColorModeValue('blue.200', 'blue.700'),
                        flexGrow: 1,
                        ml: 8,
                    }}>
                    <Button as="a" href="/" variant={"link"}>
                        <Image
                            width={300}
                            src={logo}
                            alt="Picture of the author"
                        />
                    </Button>
                </Flex>
                <Box>
                    <Container
                        as={Stack}
                        maxW={'6xl'}
                        py={4}
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                        justify={{ base: 'center', md: 'space-between' }}
                        align={{ base: 'center', md: 'center' }}>
                        <Text textAlign={{md: 'left', base: 'center'}} >
                            <Text
                                py={1}
                                px={2}
                                bg={'#255DB1'}
                                _hover={{ bg: '#3D7DD6' }}
                                as={'span'}
                                position={'relative'}
                                color={'white'}
                                mx={2}
                                fontSize={'18px'}
                                fontWeight={700}
                                rounded={'10px'}
                            >
                                ©
                            </Text>
                            {new Date().getFullYear()} Connect2HQ Templates. All rights reserved
                        </Text>

                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Facebook'} href={'#'}>
                                <FaFacebook />
                            </SocialButton>

                            <SocialButton label={'Linkedin'} href={'#'}>
                                <FaLinkedin/>
                            </SocialButton>
                        </Stack>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer