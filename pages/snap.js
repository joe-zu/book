
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
import frame1 from '../public/assets/snap/frame1.png'
import frame2 from '../public/assets/snap/sparks.gif'
import frame3 from '../public/assets/snap/stax.gif'


//need Head - Title (seo)

export default function creditKarma() {


    return (
        <Flex direction={['column', 'column', 'row', 'row']}>
            <Nav />
            <Box
                w={['100vw', '100vw', '70vw', '70vw']}
                py={2}
                px={8}
            >

                <VStack spacing={8} >

                <Flex direction={['column', 'column', 'row', 'row']}>
                        <Box w='100%' mt={2} mb={4}>
                            <ProjectTitle title="Tax Season Filters" subtitle="animation, design, development" company="Credit Karma" location="Los Angeles" />
                        </Box>
                        <NextImage placeholder="blur" intrinsic priority src={frame1} alt="credit karma email image" />
                    </Flex>
                    <Flex display={['none', 'none', 'flex', 'flex']}>
                        <ReactPlayer url="assets/snap/snap1.webm" playing loop width="100" height="100" />
                    </Flex>
                    <Flex display={['flex', 'flex', 'none', 'none']}>
                        <ReactPlayer controls playing='false' url="assets/snap/snap1.webm" loop width="100" height="100" />
                    </Flex>
                    <Box>
                        <NextImage intrinsic src={frame3} alt="credit karma email image" />
                    </Box>
                    <Flex display={['none', 'none', 'flex', 'flex']}>
                        <ReactPlayer url="assets/snap/snap2.webm" playing loop width="100" height="100" />
                    </Flex>
                    <Flex display={['flex', 'flex', 'none', 'none']}>
                        <ReactPlayer controls playing='false' url="assets/snap/snap2.webm" loop width="100" height="100" />
                    </Flex>
                    <Box>
                        <NextImage intrinsic src={frame2} alt="credit karma email image" />
                    </Box>

                </VStack>
            </Box>
        </Flex>
    )
}
