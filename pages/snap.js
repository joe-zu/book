
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
                <Box mb={4} >
                    <Heading as='h2'>Email Campaign — design, production // Credit Karma - Los Angeles</Heading>
                </Box>
                <VStack spacing={4} >

                    <Box w="300px">
                        <NextImage src={frame1} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <ReactPlayer url="assets/snap/snap1.webm" playing loop width="100%" height="100%" />
                    </Box>
                    <Box>
                        <NextImage src={frame3} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <ReactPlayer url="assets/snap/snap2.webm" playing loop width="100%" height="100%" />
                    </Box>
                    <Box>
                        <NextImage src={frame2} alt="credit karma email image" />
                    </Box>

                </VStack>
            </Box>
        </Flex>
    )
}
