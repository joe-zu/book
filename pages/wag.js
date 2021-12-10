
import Nav from "../components/Nav"
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
                <Box mb={4} >
                    <Heading as='h2'>Wag Central — identity, web design, branding // MadisonMott - Bridgeport, CT </Heading>
                </Box>
                <VStack spacing={4}>
                    <Box>
                        <NextImage src={frame1} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage src={frame2} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage src={frame3} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage src={frame4} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage src={frame5} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage src={frame6} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage src={frame7} alt="Wag central image" />
                    </Box>
                    <Box>
                        <NextImage src={frame8} alt="Wag central image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}