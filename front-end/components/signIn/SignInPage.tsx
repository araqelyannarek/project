import React, {useState, useEffect} from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text, useColorModeValue,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';

const SignIn = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState({ value: '', isValid: true });
    const [password, setPassword] = useState({ value: '', isValid: true });
    
    const [userToken, setUserToken] = useState('');

    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    
    useEffect(() => {
        localStorage.setItem("user_token", userToken);
        localStorage.setItem("user_name", userName);
        localStorage.setItem("user_email", email.value);
    }, [userToken]);

    
    
    const setInput =
        (setter: (inp: { value: string; isValid: boolean }) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
            setter({ value: e.target.value, isValid: true });
        };
    const fetchData = async() => {
        const data = {
            email: email.value,
            password: password.value
        }
        
        const JSONdata = JSON.stringify(data);
        const endpoint =`${process.env.API_URL}/api/auth/sign-in`;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        const result = await response.json();   
        
        if(result.status) {
            router.push('/user-profile')
        } else {
            setErrorMessage("Incorrect email and/or password");
        }

        if(result.data.token){
            setUserToken(result.data.token);
            setUserName(result.data.user.name);
        }
    }

    const handleSignIn = async () => {
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
    };

    return (
        <>
            <Stack spacing={8} mx={'auto'} width={'full'} maxW={'lg'} >
                <Stack align={'center'}>
                    <Heading textAlign={'center'} fontSize={'4xl'}>Sign in to your account</Heading>
                </Stack>
                <Box bg={useColorModeValue('white', 'gray.700')} rounded={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" value={email.value} onChange={setInput(setEmail)} isInvalid={!email.isValid} />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                value={password.value}
                                onChange={setInput(setPassword)}
                                isInvalid={!password.isValid}
                            />
                        </FormControl>children
                        <Stack spacing={10}>
                            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                            </Stack>
                            <Button
                                isLoading={isLoading}
                                onClick={handleSignIn}
                                bg={'#255DB1'}
                                color={'white'}
                                _hover={{ bg: '#3D7DD6' }}
                             >
                                Sign in
                            </Button>
                        </Stack>     
                        <Text align={'center'} color={'red.500'}>{errorMessage}</Text>
                    </Stack>
                </Box>
            </Stack>
        </>
    );

};

export default SignIn;
