import React from 'react';
import {
    Box,
    Text,
    Stack,
    Heading,
    Container
} from '@chakra-ui/react';
import UserPage from "../user-page/UserPage";

interface userInterface {
  userInfo?: string | null
}

function WelcomeUser({userInfo}:userInterface) {
    return (
        <div>
            <Container maxW={'5xl'}>
                <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 10, md: 28 }}>
                     <Heading fontWeight={600} fontSize={{ base: '1xl', sm: '2xl', md: '4xl' }} lineHeight={'110%'}>
                         Welcome
                        <Text as={'span'} mx="2" color={'#255DB1'}>
                            {userInfo && userInfo}
                         </Text>
                         manage your Connect2HQ Account
                    </Heading>
                    <UserPage/>
               </Stack>
            </Container>
        </div>
    );
}

export default WelcomeUser;
