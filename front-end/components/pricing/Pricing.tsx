import React, {ReactNode, useEffect, useState} from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
    Flex,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import {NextPage} from "next";
import styles from "../../styles.module.css"
import {useRouter} from "next/router";
import priceData from '../../data.js'
import {checkout} from '../../checkout'

function PriceWrapper({ children }: { children: ReactNode }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

const Pricing: NextPage = () => {
    const [value, setValue] = useState(false);
    const [info, setInfo] = useState("");
    const percent = 17;
    const router = useRouter();
    const { success, canceled } = router.query;

    useEffect(() => {
        if (success !== undefined || canceled !== undefined) {
            if (success) {
                console.log(
                    'Order placed! You will receive an email confirmation.'
                );
            }

            if (canceled) {
                console.log(
                    'Order canceled -- continue to shop around and checkout when you’re ready.'
                );
            }
        }
    }, [success, canceled]);

    const handleSubmit = () => {
        setValue(!value)
        setInfo('You save ' + percent + '% annually!')
    }

    const handleSubmitButton = (id) => {
        router.push({
            pathname: '/my-cart/',
            query: { id: id },
        })
    }

    return (
        <Box py={20}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="2xl">
                    Connect2HQ Pricing Plans
                </Heading>
                <Text fontSize="4xl" color={'gray.500'}>
                    Plans that fit your need
                </Text>
            </VStack>

            <Flex justifyContent={'center'} my={4} alignItems={'center'}>
                <Heading mr={4} as="h1" fontSize="xl">
                    Monthly
                </Heading>
                <input
                    checked={value}
                    onChange={handleSubmit}
                    className={styles.reactSwitchCheckbox}
                    id={`react-switch-new`}
                    type="checkbox"
                />
                <label
                    style={{ background: value && 'white' }}
                    className={styles.reactSwitchLabel}
                    htmlFor={`react-switch-new`}
                >
                    <span className={styles.reactSwitchButton} />
                </label>
                <Heading ml={4} as="h1" fontSize="xl">
                    Yearly
                </Heading>
            </Flex>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>

                {
                    priceData.map((priceInfo, index) => {
                        return (
                            <PriceWrapper
                                key={index}
                                bg={useColorModeValue('white', 'gray.800')}
                                boxShadow={'2xl'}
                                rounded={'md'}
                                overflow={'hidden'}
                            >
                                <Box py={4} px={12} >
                                    <Text
                                        my={4}
                                        mx={'auto'}
                                        width={'200px'}
                                        fontSize={'lg'}
                                        fontWeight={700}
                                        rounded={'10px'}
                                        bg={useColorModeValue('blue.50', 'blue.900')}
                                        p={2}
                                        color={'#255DB1'}
                                    >
                                        HQ {priceInfo.category}
                                    </Text>
                                    <HStack justifyContent="center">
                                        <Text fontSize="3xl" fontWeight="600">
                                            $
                                        </Text>
                                        <Text fontSize="5xl" fontWeight="900">
                                            {priceInfo.price}
                                        </Text>
                                        <Text fontSize="3xl" color="gray.500">
                                            /month
                                        </Text>
                                    </HStack>

                                    {/*<Text fontSize="lg" color="green.500">*/}
                                    {/*    {info}*/}
                                    {/*</Text>*/}
                                </Box>
                                <VStack
                                    width={'400px'}
                                    bg={useColorModeValue('gray.50', 'gray.700')}
                                    py={4}
                                    borderBottomRadius={'xl'}>
                                    <List spacing={3} textAlign="start" py={4} px={12}>
                                        <Text fontSize="1xl" fontWeight="400">
                                            {priceInfo.info}
                                        </Text>

                                        <ListItem>
                                            {
                                                priceInfo.description.map((info, index) => {
                                                    return(
                                                        <>
                                                            <ListIcon as={FaCheckCircle} color="blue.300" />
                                                            {info.title}
                                                            <div key={info.id} style={{marginLeft: "25px", padding: '10px', textAlign: "left"}}>
                                                                {
                                                                    info.text.map(event => {
                                                                        return <p key={event.id}>{event.info}</p>
                                                                    })
                                                                }
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }

                                        </ListItem>
                                    </List>
                                    <Box w="80%" pt={7}>
                                        <Button
                                            my={4}
                                            py={6}
                                            w={'full'}
                                            rounded={'10px'}
                                            colorScheme={'blue'}
                                            bg={'#255DB1'}
                                            _hover={{bg: 'blue.500'}}
                                            boxShadow={'0 5px 20px 0px (blue.400) / 43%)'}
                                            _focus={{
                                                bg: 'green.500',
                                            }}
                                            onClick={(() => {
                                                checkout({
                                                    lineItems: [
                                                        {
                                                            price: 'price_1MmFahHwK7R2NiyVMUiia4xN',
                                                            quantity: 1
                                                        }
                                                    ]
                                                })
                                            })}
                                            // onClick={() => handleSubmitButton(priceInfo.id)}
                                        >
                                            Start trial
                                        </Button>
                                    </Box>

                                </VStack>
                            </PriceWrapper>
                        )
                    })
                }
            </Stack>
        </Box>
    );
}

export default Pricing