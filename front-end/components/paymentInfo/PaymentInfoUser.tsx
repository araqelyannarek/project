import {
    Box,
    IconButton,
    Table,
    Td,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react';

import React from 'react';
import {DeleteIcon} from "@chakra-ui/icons";
import priceData from "../../data";

const data = priceData[2]
const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

function PaymentInfoUser() {
    return (
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
                        <Th>Invoice Number</Th>
                        <Th>Order Date</Th>
                        <Th >Product name</Th>
                        <Th >Price</Th>
                        <Th >Actions</Th>
                    </Tr>
                </Thead>

                <Tr >
                    <Td>{data.id}</Td>
                    <Td>{date}</Td>
                    <Td>HQ {data.category}</Td>
                    <Td>{data.price} $</Td>
                    <Td>
                        <IconButton
                            color={'white'}
                            bg={'red.500'}
                            _hover={{bg: 'red.600'}}
                            aria-label="Subscribe"
                            icon={<DeleteIcon />}
                        />
                    </Td>
                </Tr>
            </Table>
        </Box>
    );
}

export default PaymentInfoUser;