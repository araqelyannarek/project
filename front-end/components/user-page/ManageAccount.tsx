import React, {useEffect} from 'react';
import {
    Stack,
    Input,
    useColorModeValue,
    Text,
    Container,
    Flex, StackDivider, Button,
} from '@chakra-ui/react';

export default function ManageAccount() {

    useEffect(() => {
        // getUser();
    }, []);

    return (
        <Container maxW={'8xl'} mx={'auto'}>
            <Stack spacing={4}>
                <Text
                    textTransform={'uppercase'}
                    color={'#255DB1'}
                    fontWeight={'800'}
                    fontSize={'xl'}
                    my={6}
                    bg={useColorModeValue('blue.50', 'blue.900')}
                    p={2}
                    width={'200px'}
                    alignSelf={'flex-start'}
                    rounded={'md'}>
                    My Profile
                </Text>

                <Stack
                    px={2} border={'1px solid'} borderColor={useColorModeValue('white', 'gray.700')} rounded={'lg'}
                    spacing={4}
                    maxWidth={'600px'}
                    divider={
                        <StackDivider
                            borderColor={useColorModeValue('blue.400', 'gray.800')}
                        />
                    }>

                    <Flex
                        alignItems={"center"}
                        px={{md: '20px', base: 0}}
                        justifyContent={'space-between'}
                    >
                        <Text
                            color={'#255DB1'}
                            fontWeight={600}
                            fontSize={'sm'}
                        >
                            ID
                        </Text>

                        {/* <Text
                            color={'#255DB1'}
                            fontWeight={600}
                            fontSize={'sm'}
                        >
                            {userInfo?.id}
                        </Text> */}
                    </Flex>

                    <Flex alignItems={"center"} px={{md: '20px', base: 0}} justifyContent={'space-between'}>
                        <Text
                            color={'#255DB1'}
                            fontWeight={600}
                            fontSize={'sm'}
                        >
                           Name
                        </Text>
                        {/* <Input width={''} type="text" value={userInfo?.username}/> */}
                    </Flex>
                </Stack>

                <Flex alignItems={"center"} px={'20px'} justifyContent={'flex-end'} maxWidth={'600px'} >
                    <Button
                        color={'white'}
                        bg={'green.500'}
                        _hover={{bg: 'green.600'}}
                    >
                        Save
                    </Button>
                </Flex>

            </Stack>
        </Container>
    );
}