
import Nav from "../components/Nav"
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
                <Box mb={4} >
                    <Heading as='h2'>Point of Purchase — animation, design, environmental // Barrows - Los Angeles</Heading>
                </Box>
                <VStack spacing={4}>
                    <Box >
                        <ReactPlayer url="assets/cbd.webm" playing loop width="100%" height="100%" />
                    </Box>
                    <Box>
                        <NextImage src={frame2} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame3} alt="credit karma email image" />
                    </Box>
                    <Box h={['400', '480px', '620px', '620px']} >
                        <ReactPlayer url="assets/hearth.webm" playing loop width="100%" height="100%" />
                    </Box>
                    <Box>
                        <NextImage src={frame4} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame5} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame6} alt="credit karma email image" />
                    </Box>
                    <Box h={['400', '480px', '520px', '520px']} >
                        <ReactPlayer url="assets/jworld.webm" playing loop width="100%" height="100%" />
                    </Box>
                    <Box>
                        <NextImage src={frame7} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame8} alt="credit karma email image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}