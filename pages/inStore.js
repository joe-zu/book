
import Nav from "../components/Nav"
import ProjectTitle from "../components/ProjectTitle"
import React from 'react'
import ReactPlayer from 'react-player'
import {
    Text,
    Flex,
    Box,
    VStack,
    Heading
} from '@chakra-ui/react'
import NextImage from 'next/image'
import frame2 from '../public/assets/instore/frame2.jpg'
import frame3 from '../public/assets/instore/frame3.jpg'
import frame4 from '../public/assets/instore/frame4.jpg'
import frame5 from '../public/assets/instore/frame5.jpg'
import frame6 from '../public/assets/instore/frame6.jpg'
import frame7 from '../public/assets/instore/frame7.jpg'
import frame8 from '../public/assets/instore/frame8.jpg'

export default function inStore() {

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
                        <ProjectTitle title="Point of Purchase" subtitle="animation, design, environmental" company="Barrows" location="Los Angeles" />
                    </Box>
                    <Flex display={['none', 'none', 'flex', 'flex']}>
                        <ReactPlayer url="assets/cbd.webm" playing loop volume={0} muted width="100" height="100" />
                    </Flex>
                    <Box>
                        <NextImage placeholder="blur" intrinsic priority src={frame2} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame3} alt="credit karma email image" />
                    </Box>
                    <Flex display={['none', 'none', 'flex', 'flex']} h={['400px', '400px', '500px','600px']}>
                        <ReactPlayer url="assets/hearth.webm" playing loop volume={0} muted width="100" height="100" />
                    </Flex>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame4} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame5} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame6} alt="credit karma email image" />
                    </Box>
                    <Flex display={['none', 'none', 'flex', 'flex']}>
                        <ReactPlayer url="assets/jworld.webm" playing loop volume={0} muted width="100" height="100" />
                    </Flex>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame7} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame8} alt="credit karma email image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}