import { NextPage } from 'next';
import SignInPage from "../components/signIn/SignInPage";
import { Center } from '@chakra-ui/react';

const SignIn: NextPage = () => {    
    return (
        <Center w='full' minH='70vh'>
            <SignInPage/>
        </Center>
    );
};

export default SignIn;
