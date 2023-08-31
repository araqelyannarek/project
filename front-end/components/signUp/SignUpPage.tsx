import '../../styles.module.css'
import {
    Center,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Checkbox
} from '@chakra-ui/react';

import React, {useEffect, useState, useRef } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = () => {
    const [displayName, setDisplayName] = useState({ value: '', isValid: true });
    const [email, setEmail] = useState({ value: '', isValid: true });
    const [password, setPassword] = useState({ value: '', isValid: true });
    const [errorMessage, setErrorMessage] = useState({
        displayNameError:"",
        emailError:"",
        passwordError:"",
        recaptchaError:""
    });

    const [userToken, setUserToken] = useState("");

    const recaptchaRef = useRef<ReCAPTCHA>(null);    

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        localStorage.setItem("user_token", userToken);
        localStorage.setItem("user_name", displayName.value);
        localStorage.setItem("user_email", email.value);
    }, [userToken]);
    
    const [checkedItems, setCheckedItems] = React.useState([false, false])

    const setInput = (setter: (inp: { value: string; isValid: boolean }) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setter({ value: e.target.value, isValid: true });
    }
    const fetchData = async() => {
        if(!recaptchaRef.current) return 

        const data = {
            name: displayName.value,
            email: email.value,
            password: password.value,
            "g-recaptcha-response": recaptchaRef.current.getValue(),
        }
        const apiUrl = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL_PROD : process.env.NEXT_PUBLIC_API_URL_LOCAL;
        const JSONdata = JSON.stringify(data);
        const endpoint =`${apiUrl}/api/auth/sign-up`;

        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        const result = await response.json();
        console.log(result, "result from SignUp");
        if(result.data.token){
            setUserToken(result.data.token)
        }
    }    
    const handleSignUp = async () => {        
        if (displayName.value.length<3) {
            setErrorMessage({...errorMessage, displayNameError: "Please enter at least 3 characters."})
            return;
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.value)) {
            setErrorMessage({...errorMessage, emailError: "Please enter a valid email address."})
            return;
        }

        if (password.value.length<5) {
            setErrorMessage({...errorMessage, passwordError: "Please enter a min 5 character"})
            return;
        }
        setIsLoading(true);
        await fetchData();    
        
        setIsLoading(false);
        router.push('/user-profile');

        localStorage.setItem("token", userToken)
    };
    
    
    const onReCAPTCHAChange = (captchaCode:any) => {
        if(!captchaCode) {
            return;
        }
    }

    const handleTerms = async () => {
        router.push('/terms')
    }

    const handlePrivacy = async () => {
        router.push('/privacy')
    }

    return (
        <>
            <Center w="full" minH='50vh'>
                <Stack spacing={8} mx={'auto'} width={'full'} maxW={'xl'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Register New Account
                        </Heading>
                    </Stack>
                    <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} p={8}>
                        <Stack spacing={4}>
                            <FormControl id="firstName" isRequired>
                                <FormLabel>Enter Your Name</FormLabel>
                                <Input
                                    type="text"
                                    value={displayName.value}
                                    onChange={setInput(setDisplayName)}
                                    isInvalid={!displayName.isValid}
                                />
                                <Text color={'red.500'}>{errorMessage.displayNameError}</Text>
                            </FormControl>
                             <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    value={email.value}
                                    onChange={setInput(setEmail)}
                                    isInvalid={!email.isValid}
                                />
                                <Text color={'red.500'}>{errorMessage.emailError}</Text>
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <InputGroup>
                                    <Input
                                        type="password"
                                        value={password.value}
                                        onChange={setInput(setPassword)}
                                        isInvalid={!password.isValid}
                                    />
                                </InputGroup>
                                {!password.value ? <Text color={'red.500'} fontSize={12}>This field is required</Text> : <Text ></Text> }
                                <Text color={'red.500'}>{errorMessage.passwordError}</Text>
                            </FormControl>

                            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                <Checkbox
                                    isChecked={checkedItems[0]}
                                    onChange={(e: any) => setCheckedItems([e.target.checked, checkedItems[1]])}
                                >
                                    I agree to the
                                    <Link
                                        onClick={handleTerms}
                                        marginLeft={'10px'}
                                        marginRight={'10px'}
                                        color={'#255DB1'}
                                    >
                                        Terms of Service
                                    </Link>
                                    and
                                    <Link
                                        onClick={handlePrivacy}
                                        marginLeft={'10px'}
                                        color={'#255DB1'}
                                    >
                                        Privacy Policy.
                                    </Link>
                                </Checkbox>
                            </Stack>
                            {/* <Recaptcha /> */}
                            <ReCAPTCHA
                                sitekey="6Le82LInAAAAABATfw250Pu4dasIKax2FS3pexn8"
                                ref={recaptchaRef}
                                onChange={onReCAPTCHAChange}
                            />

                            <Stack spacing={10} pt={2}>
                                <Button
                                    isLoading={isLoading}
                                    size="lg"
                                    bg={'#255DB1'}
                                    color={'white'}
                                    _hover={{ bg: '#3D7DD6' }}
                                    onClick={handleSignUp}
                                >
                                    Sign up
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    Already a user?{' '}
                                    <NextLink href="/signin">
                                        <Link color={'#255DB1'}>Login</Link>
                                    </NextLink>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Center>
        </>

    );
};

export default SignUp;
