
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
import frame1 from '../public/assets/yale/frame1.jpeg'
import frame2 from '../public/assets/yale/01-YJ.jpg'
import frame3 from '../public/assets/yale/02-YJ.jpg'
import frame4 from '../public/assets/yale/03-YJ.jpg'
import frame5 from '../public/assets/yale/04-YJ.jpg'
import frame6 from '../public/assets/yale/05-YJ.jpg'

export default function yale() {

    return (
        <Flex direction={['column', 'column', 'row', 'row']}>
            <Nav />
            <Box
                w={['100vw', '100vw', '70vw', '70vw']}
                py={2}
                px={8}
            >
                <Box mb={4} >
                    <Heading as='h2'>Web design // MadisonMott - Bridgeport, CT </Heading>
                </Box>
                <VStack spacing={4}>
                    <Box>
                        <NextImage src={frame1} alt="Yale Jackson website image" />
                    </Box>
                    <Box>
                        <NextImage src={frame2} alt="Yale Jackson website image" />
                    </Box>
                    <Box>
                        <NextImage src={frame3} alt="Yale Jackson website image" />
                    </Box>
                    <Box>
                        <NextImage src={frame4} alt="Yale Jackson website image" />
                    </Box>
                    <Box>
                        <NextImage src={frame5} alt="Yale Jackson website image" />
                    </Box>
                    <Box>
                        <NextImage src={frame6} alt="Yale Jackson website image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}