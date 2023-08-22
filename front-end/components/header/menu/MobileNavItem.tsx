import {Collapse, Flex, Icon, Link, Stack, Text, useColorModeValue, useDisclosure} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {ChevronDownIcon} from "@chakra-ui/icons";

const MobileNav = () => {
    return (
      <Stack bg={useColorModeValue("white", "blue.800")} p={4} display={{md: "none"}}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
      </Stack>
    )
}

const MobileNavItem = ({label, children, href}: NavItem) => {
    const {isOpen, onToggle} = useDisclosure()
    const route = useRouter()

    const clickHref = async (href: any) => {
        route.push(href)
    }

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? "#"}
                justify={"space-between"}
                align={"center"}
                _hover={{
                    textDecoration: "none",
                }}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue("blue.600", "blue.200")}
                >
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={"all .25s ease-in-out"}
                        transform={isOpen ? "rotate(180deg)" : ""}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={"solid"}
                    borderColor={useColorModeValue("blue.200", "blue.700")}
                    align={"start"}
                >
                    {children &&
                    children.map((child) => (
                        <Link
                            onClick={() => clickHref(child.href)}
                            key={child.label}
                            py={2}
                        >
                            {child.label}
                        </Link>
                    ))}
                </Stack>
            </Collapse>
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

export default MobileNavItem