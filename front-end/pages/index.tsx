import React, { useState, useEffect } from 'react';
import WelcomeUser from "../components/user-info/WelcomeUser";
import { Center, Spinner } from '@chakra-ui/react';

export default function Index() {
    const [username, setUsername] = useState<string|null>("");
    useEffect(() => {
        let user = localStorage.getItem("user_token");
        setUsername(user)
    }, []);
    
    // if (getUserError) {
    //     console.error(getUserError);
    //     return (
    //         <Center w="100vw" h="100vh">
    //             <Spinner
    //                 thickness='4px'
    //                 speed='0.65s'
    //                 emptyColor='blue.200'
    //                 color='blue.500'
    //                 size='xl'
    //             />
    //         </Center>
    //     );
    // }

    if (!username) {
        return (
            <Center w="100vw" h="100vh">
                <Spinner thickness="4px" speed="0.65s" emptyColor="blue.200" color="blue.500" size="xl" />
            </Center>
        );
    }

    return (
        <>
            <WelcomeUser userInfo={""}/>
        </>
    );
}