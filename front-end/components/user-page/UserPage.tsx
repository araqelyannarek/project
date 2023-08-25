import React from 'react';
import {Icon, Tab, TabList, TabPanels, TabPanel, Tabs, Text} from "@chakra-ui/react";
import PaymentInfoUser from "../paymentInfo/PaymentInfoUser";
import ManageAccount from "./ManageAccount";
import {IconType} from "react-icons";
import {FiHome} from "react-icons/fi";
import {MdPayment} from "react-icons/md";

interface LinkItemProps {
    name: string;
    icon: IconType;
    href?: string
}

const LinkItems: Array<LinkItemProps> = [
    {
        name: 'Manage Account',
        icon: FiHome,
        href: '#profile'
    },

    {
        name: 'Payment Info',
        icon: MdPayment,
        href: '#payment'
    }
];

function UserPage() {
    return (
        <Tabs>
            <TabList p={0}>
                {
                    LinkItems.map((linkItems, index) => {
                        return(
                            <Tab alignItems={'center'} p={{base: 4, ms: 2}} fontSize={{ base: '12px', md: '0.875rem' }} key={index}>
                                <Icon
                                    as={linkItems.icon}
                                    transition={"all .25s ease-in-out"}
                                    w={{base: 4, md: 6}}
                                    mr={2}
                                    h={6}
                                />
                                {linkItems.name}
                            </Tab>
                        )
                    })
                }
            </TabList>

            <TabPanels>
                <TabPanel>
                    <ManageAccount/>
                </TabPanel>

                <TabPanel>
                    <Text
                        textTransform={'uppercase'}
                        color={'#255DB1'}
                        fontWeight={'800'}
                        fontSize={'xl'}
                        my={6}
                        bg={'blue.50'}
                        p={2}
                        width={'200px'}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Payment Info
                    </Text>
                   <PaymentInfoUser/>
                </TabPanel>

            </TabPanels>
        </Tabs>
    );
}

export default UserPage;