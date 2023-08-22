import {Box, chakra, Heading, HStack, Image, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from 'react-slick'

type SlideProps = {
    title: string;
    info: string;
    bgColor: string;
    image: string;
};

const Slide = ({ title, info, bgColor, image }: SlideProps) => {
    return (
        <HStack
            w="350px"
            h="400px"
            px={4}
            margin={'auto'}
            bg={bgColor}
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
                    src={image}
                    height={'120'}
                    width={'100'}
                    rounded={'xl'}
                />
            </Box>
            <Stack pt={10} align={'center'}>
                <Text color={'gray.500'} fontSize={'sm'}  textTransform={'uppercase'}>
                    {title}
                </Text>
                <Stack direction={'row'} align={'center'}>
                    <Text textAlign={'center'} fontWeight={400} fontSize={'xl'}>
                        {info}
                    </Text>
                </Stack>
            </Stack>
        </HStack>
    );
};

export default function ListHeadingSlider() {
    const slickSettings = {
        dots: true,
        arrows: false,
        speed: 1000,
        autoplay: true,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    // @ts-ignore
    return (
        <Box py={10} bg={useColorModeValue('gray.50', 'gray.900')}>
            <Box margin={'auto'}>
                <Stack py={4} color={'#255DB1'} spacing={0} align={'center'}>
                    <Stack spacing={0} align={'center'}>
                        <Heading textAlign={'center'}>
                            Benefits of using
                            <Text
                                as={'span'}
                                position={'relative'}
                                color={'black'}
                                mx={2}
                            >
                                Connect2HQ
                            </Text>
                            cloud Desktops
                        </Heading>
                    </Stack>
                </Stack>
                <chakra.h1
                    margin={'auto'}
                    width={'80%'}
                    mx={'auto'}
                    fontFamily={'Inter'}
                    fontWeight={'bold'}
                    fontSize={'lg'}
                    textAlign={'center'}
                    color={useColorModeValue('gray.500', 'gray.600')}>
                    We build a platform At
                    See why over{' '}
                    <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
                        Connect2HQ
                    </chakra.strong>
                    {' '}
                    on top of cloud technologies to run native applications in a way largerly indistinguishable from
                    running them locally.
                </chakra.h1>
            </Box>

            <Box mx={'auto'} px={{lg: 8, base: 4}} py={20}>
                <Box
                    sx={{
                        ".slick-dots": {
                            transform: "translateY(2rem)"
                        },
                        ".slick-dots li button": {
                            _before: {
                                height: '10px',
                                transition: "0.3s",
                                content: "''",
                                background: "blue.500"
                            }
                        }
                    }}
                >
                    <Slider {...slickSettings}>
                        <Slide title={"No IT skills required"} info={'Setup as easily as 1-2-3'} bgColor={'#9fbfda'} image={'https://vdeskworks.com/content/images/webp/ease-use-icon.webp'} />
                        <Slide title={"Optimise IT operating costs"} info={'Chose right plan as per usage and reduce cost'} bgColor={'#eadca8'} image={'https://vdeskworks.com/content/images/webp/security-icon-new.webp'} />
                        <Slide title={"Scalable and Flexible"} info={'Add unlimited users, departments, applications at will'} bgColor={'#84c3b3'} image={'https://vdeskworks.com/content/images/webp/mobility-icon.webp'} />
                        <Slide title={"Manage and Control"} info={'Easily manage users, access and applications securely'} bgColor={'#f19e9b'} image={'https://vdeskworks.com/content/images/webp/cost-saving-icon.webp'} />
                        <Slide title={"No hardware investment"} info={'Use existing device and get fast desktop experience'} bgColor={'#a6d8cb'} image={'https://vdeskworks.com/content/images/webp/instant-scalability-icon.webp'} />
                        <Slide title={"Increase productivity"} info={'No downtime for hardware or software upgrades'} bgColor={'#eeb66e'} image={'https://vdeskworks.com/content/images/webp/focus-strategy-icon.webp'} />
                        <Slide title={"Cloud enabled"} info={'Backup all data securely on cloud'} bgColor={'#a9cf96'} image={'https://vdeskworks.com/content/images/webp/personalized-experience-icon.webp'} />
                        <Slide title={"Support remote working"} info={'Connect from anywhere, anytime - always ON!'} bgColor={"#f0c995"} image={'https://vdeskworks.com/content/images/webp/pay-only-icon.webp  '} />
                    </Slider>
                </Box>
            </Box>
        </Box>
    );
}