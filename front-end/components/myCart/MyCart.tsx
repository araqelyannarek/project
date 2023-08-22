import {
    Box,
    Button,
    IconButton,
    Stack,
    Table,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';

import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import { DeleteIcon } from '@chakra-ui/icons';

function MyCart({data}) {
    const [newData, setNewData] = useState({})
    useEffect(() => {
        setNewData(data)
    })
    const router = useRouter()
    const handleSign = async () => {
        router.push('/signin')
    }

    return (
        <div style={{minHeight: "50vh"}}>
            <Text
                textTransform={'uppercase'}
                color={'blue.400'}
                fontWeight={'800'}
                width={'200px'}
                fontSize={'xl'}
                bg={useColorModeValue('blue.50', 'blue.900')}
                p={2}
                mt={10}
                mx={'auto'}
                textAlign={'center'}
                rounded={'md'}>
                My Cart
            </Text>

            <Box
                overflowX="scroll"
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '16px',
                        borderRadius: '8px',
                        backgroundColor: `gray.50`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: '8px',
                        backgroundColor: `#255DB1`,
                    },
                }}
            >
                <Table overflowX={'scroll'} colorScheme="cyan" variant='simple'>
                    <Thead>
                        <Tr>
                            <Th> Product ID </Th>
                            <Th> Product name </Th>
                            <Th> Individual Price </Th>
                            <Th> Actions </Th>
                        </Tr>
                    </Thead>

                    <Tr >
                        <Td>{data.id}</Td>
                        <Td>HQ {data.category}</Td>
                        <Td>{data.price} $</Td>
                        <Td>
                            <IconButton
                                bg={'red.500'}
                                _hover={{bg: 'red.600'}}
                                aria-label="Subscribe"
                                icon={<DeleteIcon />}
                            />
                        </Td>
                    </Tr>
                </Table>
            </Box>

            <Text textAlign={'center'}>
                In order to complete your purchase, you'll need to login or create an account. Don't worry, it won't take long!
            </Text>
            <Stack spacing={0} align={'center'}>
                <Button
                    my={8}
                    px={8}
                    textTransform={'uppercase'}
                    size={'lg'}
                    fontWeight={'normal'}
                    colorScheme={'blue'}
                    bg={'blue.400'}
                    onClick={handleSign}
                >
                    create an account or login
                </Button>
            </Stack>
        </div>
    );
}

export default MyCart;