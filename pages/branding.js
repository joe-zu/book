
import Nav from "../components/Nav"
import ProjectTitle from "../components/ProjectTitle"
import React from 'react'
import {
    Flex,
    Box,
    VStack,
} from '@chakra-ui/react'
import NextImage from 'next/image'
import frame1 from '../public/assets/branding/frame1.jpg'
import frame2 from '../public/assets/branding/frame2.jpg'
import frame3 from '../public/assets/branding/frame3.jpg'
import frame4 from '../public/assets/branding/frame4.jpg'
import frame5 from '../public/assets/branding/frame5.jpg'
import frame6 from '../public/assets/branding/frame6.jpg'
import frame7 from '../public/assets/branding/frame7.jpg'
import frame8 from '../public/assets/branding/frame8.jpg'
import frame9 from '../public/assets/branding/frame9.jpg'
import frame10 from '../public/assets/branding/frame10.jpg'
import frame11 from '../public/assets/branding/frame11.jpg'
import frame12 from '../public/assets/branding/frame12.jpg'
import frame13 from '../public/assets/branding/frame13.jpg'
import frame14 from '../public/assets/branding/frame14.jpg'
import frame16 from '../public/assets/branding/frame16.jpg'
import frame17 from '../public/assets/branding/frame17.jpg'


export default function branding() {

    return (
        <Flex direction={['column', 'column', 'row', 'row']}>
            <Nav />
            <Box
                w={['100vw', '100vw', '70vw', '70vw']}
                py={2}
                px={8}
            >
                <Box w='100%' mb={4} mt={2}>
                    <ProjectTitle title="19Day" subtitle="logo, branding, web design " company="MadisonMott" location="Bridgeport, CT" />
                </Box>
                <VStack spacing={8}>
                    <Box>
                        <NextImage placeholder="blur" intrinsic priority src={frame1} alt="19Day image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame2} alt="19Day image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame3} alt="19Day image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame4} alt="19Day image" />
                    </Box>
                    <Box w='100%' mb={4} mt={2}>
                        <ProjectTitle title="Brookland Press" subtitle="logo, web design" company="MadisonMott" location="Bridgeport, CT" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame5} alt="Brookland Press image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame6} alt="Brookland Press image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame7} alt="Brookland Press image" />
                    </Box>
                    <Box w='100%' mb={4} mt={2}>
                        <ProjectTitle title="The Commons" subtitle="logo, branding" company="" location="Bridgeport, CT" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame8} alt="Commons image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame9} alt="Commons image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame10} alt="Commons image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame11} alt="Commons image" />
                    </Box>
                    <Box w='100%' mb={4} mt={2}>
                        <ProjectTitle title="Taylor Instruments" subtitle="photography, social media posts" company="MadisonMott" location="Bridgeport, CT" />
                    </Box>
                    <Box w="600px">
                        <NextImage placeholder="blur" intrinsic src={frame12} alt="Taylor image" />
                    </Box>
                    <Box w="600px">
                        <NextImage placeholder="blur" intrinsic src={frame13} alt="Taylor image" />
                    </Box>
                    <Box w="600px">
                        <NextImage placeholder="blur" intrinsic src={frame14} alt="Taylor image" />
                    </Box>
                    <Box w="600px">
                        <NextImage placeholder="blur" intrinsic src={frame16} alt="Taylor image" />
                    </Box>
                    <Box w="600px">
                        <NextImage placeholder="blur" intrinsic src={frame17} alt="Taylor image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}