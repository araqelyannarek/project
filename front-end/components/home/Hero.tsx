import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  chakra,
} from '@chakra-ui/react';
import {useRouter} from "next/router";
import React from "react";

export default function Hero() {
    const router = useRouter()
    const pricePage = async () => {
        router.push('/price')
    }

    const contactPage = async () => {
        router.push('/contact');
    }

    return (
        <Container maxW={{xl:'90rem', base: '100rem'}} pb={20}>
            <Flex
                alignItems={'center'}
                justifyContent={'space-between'}
                py={{base: 10, md: 10}}
                direction={{base: 'column', md: 'row'}}
            >
              <Stack>
                  <Heading
                    textAlign={{md: 'left', base: 'center'}}
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{base: '2xl', sm: '3xl', lg: '5xl'}}>
                    <Text
                      as={'span'}
                      position={'relative'}
                      _after={{
                        content: "''",
                        width: 'full',
                        height: '30%',
                        position: 'absolute',
                        bottom: 1,
                        left: 0,
                        bg: 'blue.400',
                        zIndex: -1,
                      }}>
                      Modernise IT resources
                    </Text>
                    <br/>
                    <Text as={'span'} color={'#255DB1'}>
                      while working remotely
                    </Text>
                  </Heading>

                  <chakra.h1
                    margin={'auto'}
                    mx={'auto'}
                    color={'gray.500'}>
                    Access
                    <chakra.strong margin={'0 6px'} color={'red.500'}>
                      enterprise applications on browser from
                    </chakra.strong>
                    anywhere, on any device and increase business agility while optimising cost.
                    <br/>
                    <br/>
                    Sign of for HQ Lite and try - it’s FREE !
                  </chakra.h1>
                  <Stack
                      margin={'10px'}
                      spacing={{base: 4, sm: 6}}
                      direction={{base: 'column', sm: 'row'}}>
                      <Button
                          size={'lg'}
                          fontWeight={'700'}
                          px={12}
                          colorScheme={'white'}
                          bg={'#255DB1'}
                          _hover={{ bg: '#3D7DD6' }}
                          onClick={pricePage}
                      >
                          Get started
                      </Button>
                      <Button
                          size={'lg'}
                          fontWeight={'700'}
                          px={12}
                          color={'#255DB1'}
                          onClick={contactPage}
                      >
                          Contact Us
                      </Button>
                  </Stack>
                </Stack>
                  <Image
                      alt={'Hero Image'}
                      fit={'cover'}
                      align={'center'}
                      width={{md: '70%', base: '100%'}}
                      src={
                          'https://cdn03.boxcdn.net/sites/default/files/styles/882xauto/public/2022-04/1-hero-fg-box-homepage_1764x1200.png?itok=XSOs9KJP'
                      }
                  />
            </Flex>
        </Container>
    );
}
