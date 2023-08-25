import {Box, Flex, Heading, HStack, Image, Stack, Text} from "@chakra-ui/react";

export default function SliderImage() {
    return (
        <Box py={10} px={30}>
            <Stack py={8} color={'#255DB1'} spacing={0} align={'center'}>
                <Heading textAlign={'center'}> Why use Hosted Desktop Solutions? </Heading>
            </Stack>
            <Flex mx={'auto'} gap={12} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
                <HStack
                    w="300px"
                    h="400px"
                    px={8}
                    bg={'blue.200'}
                    pt="16"
                    flexDirection={'column'}
                    border="cyan.700"
                >
                    <Box
                        rounded={'full'}
                        mt={0}
                        mx={'auto'}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}
                    >
                        <Image
                            bg={'blue.200'}
                            height={'120'}
                            width={'100'}
                            rounded={'xl'}
                            src={'https://vdeskworks.com/content/images/webp/support-legacy-apps-icon.webp'}                            
                            alt=""
                        />
                    </Box>
                    <Stack pt={20} align={'center'}>
                        <Text color={'gray.600'} textAlign={'center'} fontSize={'xl'} fontWeight={700} textTransform={'uppercase'}>
                            No IT skills required
                        </Text>
                        <Stack direction={'row'} align={'center'}>
                            <Text textAlign={'center'} color={'white'} fontWeight={400} fontSize={'sm'}>
                                Save on IT department costs.
                            </Text>
                        </Stack>
                    </Stack>
                </HStack>

                <HStack
                    w="300px"
                    h="400px"
                    px={8}
                    bg={'white'}
                    pt="16"
                    flexDirection={'column'}
                    border="cyan.700"
                >
                    <Box
                        rounded={'full'}
                        mt={0}
                        mx={'auto'}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}
                    >
                        <Image
                            bg={'white'}
                            height={'120'}
                            width={'100'}
                            rounded={'xl'}
                            src={'https://icons-for-free.com/iconfiles/icns/512/layers-1320567789544724344.icns'}                            
                            alt=""
                        />
                    </Box>
                    <Stack pt={20} align={'center'}>
                        <Text color={'gray.600'} textAlign={'center'} fontSize={'xl'} fontWeight={700} textTransform={'uppercase'}>
                            Simple or complex
                        </Text>
                        <Stack direction={'row'} align={'center'}>
                            <Text textAlign={'center'} color={'black'} fontWeight={400} fontSize={'sm'}>
                                Basic desktop or multy-tiered systems.
                            </Text>
                        </Stack>
                    </Stack>
                </HStack>

                <HStack
                    w="300px"
                    h="400px"
                    px={8}
                    bg={'blue.200'}
                    pt="16"
                    flexDirection={'column'}
                    border="cyan.700"
                >
                    <Box
                        rounded={'full'}
                        mt={0}
                        mx={'auto'}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}
                    >
                        <Image
                            bg={'blue.200'}
                            height={'120'}
                            width={'100'}
                            rounded={'xl'}
                            src={'https://vdeskworks.com/content/images/webp/cloud-icon.webp'}                            
                            alt=""
                        />
                    </Box>
                    <Stack pt={20} align={'center'}>
                        <Text color={'gray.600'} textAlign={'center'} fontSize={'xl'} fontWeight={700} textTransform={'uppercase'}>
                            Fully scalable totally flexible
                        </Text>
                        <Stack direction={'row'} align={'center'}>
                            <Text textAlign={'center'} color={'white'} fontWeight={400} fontSize={'sm'}>
                                From one to thousands of users.
                            </Text>
                        </Stack>
                    </Stack>
                </HStack>

                <HStack
                    w="300px"
                    h="400px"
                    px={8}
                    bg={'white'}
                    pt="16"
                    flexDirection={'column'}
                    border="cyan.700"
                >
                    <Box
                        rounded={'full'}
                        mt={0}
                        mx={'auto'}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}
                    >
                        <Image
                            bg={'white'}
                            height={'120'}
                            width={'100'}
                            rounded={'xl'}
                            src={'https://icones.pro/wp-content/uploads/2021/05/symbole-du-globe-gris.png'}
                            alt=""
                        />
                    </Box>
                    <Stack pt={20} align={'center'}>
                        <Text color={'gray.600'} textAlign={'center'} fontSize={'xl'} fontWeight={700} textTransform={'uppercase'}>
                            Fully secure and resiliant
                        </Text>
                        <Stack direction={'row'} align={'center'}>
                            <Text textAlign={'center'} color={'black'} fontWeight={400} fontSize={'sm'}>
                                ISO 27001 Certified for peace of mind.
                            </Text>
                        </Stack>
                    </Stack>
                </HStack>
            </Flex>
        </Box>
    );
}