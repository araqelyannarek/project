import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";

import {
    IconButton,
    Box,
    Flex,
    useDisclosure,
    Button,
    Collapse,
    Stack
} from '@chakra-ui/react';

import logo from '../../asset/images/Transparent.png'
import Image from "next/image";
import MobileNav from "../user-info/MobileNav"
import DesktopNav from "../header/menu/Menu";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import MobileNavItem from "../header/menu/MobileNavItem";

export default function Navbar() {
    const routerState = useRouter();

    const { isOpen, onToggle, onOpen } = useDisclosure();

    const [username, setUsername] = useState<string | null>(null);  


    useEffect(() => {
        let user = localStorage.getItem("user_name");
            setUsername(user);
    }, [routerState]);
   
    const router = useRouter();
    const signInPage = () => {
        router.push('/signin');
    }

    const signUpPage = () => {
        router.push('/signup');
    }

    return (
        <Box>
            <Flex
                shadow={'md'}
                bg={'gray.50'}
                color={"purple.900"}
                minH={"60px"}
                px={{ base: 4, md: 20, lg: 16 }}
                borderBottom={1}
                borderStyle={"solid"}
                borderColor={"blue.100"}
                align={"center"}
            >
                <Flex
                    flex={{ base: 1, md: "auto" }}
                    ml={{ base: -2 }}
                    display={{ base: "flex", md: "none" }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5}/>}
                        variant={"ghost"}
                        aria-label={"Toggle Navigation"}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
                    <Button as="a" href="/" variant={"link"}>
                        <Image
                            width={350}
                            src={logo}
                            alt="Picture of the author"
                        />
                    </Button>

                    <Flex display={{ base: "none", md: "flex"}}  alignItems='center' ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                {
                  username ?
                  (<Stack
                    mr={4}
                    flex={{base: 1, md: 0}}
                    justify={"flex-end"}
                    direction={"row"}
                    spacing={6}
                  >
                      <MobileNav onOpen={onOpen} userInfo={username}/>
                  </Stack>) :
                  (<Stack
                        mr={4}
                        flex={{base: 1, md: 0}}
                        justify={"flex-end"}
                        direction={"row"}
                        spacing={6}
                  >
                      <Button
                        as={"a"}
                        color={'gray.600'}
                        fontWeight={600}
                        fontSize={'lg'}
                        variant={"link"}
                        cursor={"pointer"}
                        onClick={signInPage}
                      >
                          Sign In
                      </Button>
                      <Button
                        as={"a"}
                        display={{base: "none", md: "inline-flex"}}
                        fontSize={"sm"}
                        cursor={"pointer"}
                        fontWeight={600}
                        color={"white"}
                        onClick={signUpPage}
                        bg={'#255DB1'}
                        _hover={{bg: '#3D7DD6'}}
                      >
                          Sign Up
                      </Button>
                  </Stack>)
                }
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <Stack bg={"white"} p={4} display={{ md: "none" }} >
                    {NAV_ITEMS.map((navItem) => (
                        <MobileNavItem key={navItem.label} {...navItem} />
                    ))}
                </Stack>
            </Collapse>
        </Box>
    )
}

interface NavItem {
    label: string
    subLabel?: string
    children?: Array<NavItem>
    href?: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "About",
        href: '/about',
    },

    {
        label: "Pricing",
        href: "/price",
    },

    {
        label: "Contact us",
        href: "/contact",
    },
]

