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
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
//import Recaptcha from "../reCAPTCHA/Recaptcha";
import ReCAPTCHA from "react-google-recaptcha";

const SignUp = () => {
    const [displayName, setDisplayName] = useState({ value: '', isValid: true });
    const [email, setEmail] = useState({ value: '', isValid: true });
    const [password, setPassword] = useState({ value: '', isValid: true });
    const [userToken, setUserToken] = useState("");

    const recaptchaRef = useRef(null);    

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

    const handleSignUp = async () => {
        if (!displayName.value) {
            setDisplayName({ value: '', isValid: false });
            return;
        }

        if (!email.value) {
            setEmail({ value: '', isValid: false });
            return;
        }

        if (!password.value) {
            setPassword({ value: '', isValid: false });
            return;
        }        
        setIsLoading(true);
        await fetchData();    
        
        setIsLoading(false);
        router.push('/user-profile');
        localStorage.setItem("token", userToken)
    };
    
    const fetchData = async() => {
        if(!recaptchaRef.current) return 

        const data = {
            name: displayName.value,
            email: email.value,
            password: password.value,
            "g-recaptcha-response": recaptchaRef.current.getValue(),
        }
        
        const JSONdata = JSON.stringify(data);
        const endpoint ='http://localhost:5000/api/auth/sign-up';

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

    const onReCAPTCHAChange = (captchaCode) => {
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
                                {!displayName.value ? <Text color={'red.500'} fontSize={12}>This field is required</Text> : <Text ></Text> }
                            </FormControl>
                             <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type="email"
                                    value={email.value}
                                    onChange={setInput(setEmail)}
                                    isInvalid={!email.isValid}
                                />
                                 {!email.value ? <Text color={'red.500'} fontSize={12}>This field is required</Text> : <Text ></Text> }
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
                            </FormControl>

                            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                <Checkbox
                                    isChecked={checkedItems[0]}
                                    onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
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
