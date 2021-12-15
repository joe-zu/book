
import Nav from "../components/Nav"
import ProjectTitle from "../components/ProjectTitle"
import React from 'react'
import {
    Text,
    Flex,
    Box,
    VStack,
    Heading
} from '@chakra-ui/react'
import NextImage from 'next/image'
import frame1 from '../public/assets/wag/frame1.jpg'
import frame2 from '../public/assets/wag/frame2.jpg'
import frame3 from '../public/assets/wag/frame3.jpg'
import frame4 from '../public/assets/wag/frame4.jpg'
import frame5 from '../public/assets/wag/frame5.jpg'
import frame6 from '../public/assets/wag/frame6.jpg'
import frame7 from '../public/assets/wag/frame7.jpg'
import frame8 from '../public/assets/wag/frame8.jpg'

export default function wag() {

    return (
        <Flex direction={['column', 'column', 'row', 'row']}>
            <Nav />
            <Box
                w={['100vw', '100vw', '70vw', '70vw']}
                py={2}
                px={8}
            >
                <VStack spacing={8}>
                    <Box w='100%' mt={2} mb={4}>
                        <ProjectTitle title="Wag Central" subtitle="branding, web design" company="MadisonMott" location="Bridgeport, CT" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic priority src={frame1} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame2} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame3} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame4} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame5} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame6} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame7} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame8} alt="Wag central image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}