import {
    Center,
    Box,
    FormControl,
    Stack,
    Button,
    Heading,
    Text,
    Flex,
    useColorModeValue
} from '@chakra-ui/react';

import { Auth } from 'aws-amplify';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import PinVerifyInput from '../components/validation/Validation';

const SignIn: NextPage = () => {
    const [confirmationCode, setConfirmationCode] = useState({ value: '', isValid: true});
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleConfirmUser = async () => {
        if (!confirmationCode) {
            setConfirmationCode({ value: '', isValid: false });
            return;
        }

        setIsLoading(true);
        if (typeof window === 'undefined') {
            return;
        }

        const email = localStorage.getItem('pending_verification_email');
        if (!email) {
            return;
        }

        try {
            await Auth.confirmSignUp(email, confirmationCode.value);
            localStorage.removeItem('pending_verification_email');
            router.push('/signin');
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    };

    const handleBack = async () => {
        router.push('/signup')
    }

    return (
        <Center w="full" minH='60vh'>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Confirm your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Check your email. We sent you a code.
                    </Text>
                </Stack>
                <Box p={8} bg={useColorModeValue('white', 'gray.700')} rounded={'lg'}>
                    <Stack spacing={4}>
                        <FormControl id="confirmation_code">
                            <PinVerifyInput
                                placeholder="•"
                                fieldStyle={{
                                    fontWeight: "bold",
                                    margin: "0 4px",
                                    padding: "30px 0.5ch",
                                    fontFamily: "monospace",
                                    fontSize: "2rem",
                                    width: "3ch"
                                }}
                                onChange={(value: any) => setConfirmationCode({value, isValid: true})}
                            />
                        </FormControl>
                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <Stack spacing={30}>
                                <Text
                                    fontSize={"sm"}
                                    color={'gray.500'}
                                    fontWeight={800}
                                    cursor={"pointer"}
                                    onClick={handleBack}
                                    textDecoration={'underline'}
                                >
                                    BACK
                                </Text>
                            </Stack>

                            <Stack spacing={10}>
                                <Button
                                    isLoading={isLoading}
                                    onClick={handleConfirmUser}
                                    bg={'#255DB1'}
                                    color={'white'}
                                    _hover={{ bg: '#3D7DD6' }}
                                >
                                    NEXT
                                </Button>
                            </Stack>
                        </Flex>
                    </Stack>
                </Box>
            </Stack>
        </Center>
    );
};

export default SignIn;
