import SignUpPage from "../components/signUp/SignUpPage";
import { NextPage } from 'next';
import {Center} from "@chakra-ui/react";

const SignUp: NextPage = () => {
    return (
        <Center w='full' minH='70vh'>
            <SignUpPage/>
        </Center>
    );
};

export default SignUp;
