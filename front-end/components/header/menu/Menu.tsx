import {
    Box,
    Flex,
    Popover,
    PopoverTrigger,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";

import MobileNavItem from "./MobileNavItem";
import Link from 'next/link'

const DesktopNav = () => {
    const popoverContentBgColor = useColorModeValue("white", "blue.800")
    return (
        <Stack direction={"row"} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={"hover"} placement={"bottom-start"}>
                        <PopoverTrigger>
                            <Link href={navItem.href}>
                                <Text
                                    fontSize={"lg"}
                                    fontFamily={'Serif'}
                                    fontWeight={700}
                                    color={'gray.600'}
                                    textDecoration={'none'}
                                    _hover={{
                                        borderBottom: "2px solid #3D7DD6",
                                        textDecoration: "none",
                                        color: '#3D7DD6',
                                    }}
                                >
                                    {navItem.label}
                                </Text>
                            </Link>
                        </PopoverTrigger>
                    </Popover>
                </Box>
            ))}
        </Stack>
    )
}


const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue("white", "blue.800")} p={4} display={{ md: "none" }} >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
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
        href: 'about'
    },
    {
        label: "Pricing",
        href: "price",
    },
    {
        label: "Contact us",
        href: "contact",
    },
]

export default DesktopNav
