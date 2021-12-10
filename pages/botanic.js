
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
import frame1 from '../public/assets/botanic/frame1.jpg'
import frame2 from '../public/assets/botanic/frame2.jpg'
import frame3 from '../public/assets/botanic/frame3.jpg'
import frame4 from '../public/assets/botanic/frame4.jpg'
import frame5 from '../public/assets/botanic/frame5.jpg'
import frame6 from '../public/assets/botanic/frame6.jpg'
import frame7 from '../public/assets/botanic/frame7.jpg'
import frame8 from '../public/assets/botanic/frame8.jpg'
import frame9 from '../public/assets/botanic/frame9.jpg'
import frame10 from '../public/assets/botanic/frame10.jpg'

export default function botanic() {

    return (
        <Flex direction={['column', 'column', 'row', 'row']}>
            <Nav />
            <Box
                w={['100vw', '100vw', '70vw', '70vw']}
                py={2}
                px={8}
            >
                <Box mb={4} >
                    <Heading as='h2'>UI UX Design — product design, identity</Heading>
                </Box>
                <VStack spacing={4}>
                    <Box>
                        <NextImage src={frame1} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage src={frame2} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage src={frame3} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage src={frame4} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage src={frame5} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage src={frame6} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage src={frame7} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage src={frame8} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage src={frame9} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage src={frame10} alt="Botanic UI UX image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}