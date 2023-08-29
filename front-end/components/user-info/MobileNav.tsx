import {
    Avatar,
    AvatarBadge,
    Box,
    Flex,
    FlexProps,
    HStack,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    VStack
} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {FiChevronDown} from "react-icons/fi";
import React, {useState, useEffect} from 'react';

interface MobileProps extends FlexProps {
    onOpen: () => void;
    userInfo: string;
}

const MobileNav = ({ onOpen, userInfo, ...rest }: MobileProps) => {
    const router = useRouter();
    const [username, setUsername] = useState<string | null>(null);  

    useEffect(() => {
        let user = localStorage.getItem("user_name");
            setUsername(user);
    }, [router]);  

    const signOut = () => {
        localStorage.clear()
        router.push('/')
    }

    const signProfile = () => {
        router.push('/user-profile')
    }

    const signInPage = async () => {
        router.push('/signin');
    }

    const signUpPage = async () => {
        router.push('/signup');
    }

    return (
        <Flex
            ml={{base: 0, md: 60}}
            px={{base: 4, md: 4}}
            height="20"
        >
            <HStack spacing={{base: '0', md: '6'}}>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{boxShadow: 'none'}}>
                            <HStack>
                                <Avatar
                                    name={userInfo}
                                    color={'white'}
                                    fontWeight={700}
                                    bg={'#3D7DD6'}
                                    src='https://bit.ly/broken-link'
                                >
                                    <AvatarBadge boxSize='1.25em' bg='green.500'/>
                                </Avatar>
                                <VStack
                                    display={{base: 'none', md: 'flex'}}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text textAlign={'left'} fontSize="sm">{userInfo}</Text>
                                    <Text fontSize="xs" color="#255DB1">
                                        User
                                    </Text>
                                </VStack>
                                <Box display={{base: 'none', md: 'flex'}}>
                                    <FiChevronDown/>
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem onClick={signProfile}>Profile</MenuItem>
                            <MenuDivider/>
                            <MenuItem onClick={signOut}> Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );

};

export default MobileNav