
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
import frame15 from '../public/assets/branding/frame15.jpg'
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
                <Box mb={4} >
                    <Heading as='h2'>Brand design — logo, web, photography, direction // Bridgeport, CT </Heading>
                </Box>
                <VStack spacing={4}>
                    <Box>
                        <NextImage src={frame1} alt="19Day image" />
                    </Box>
                    <Box>
                        <NextImage src={frame2} alt="19Day image" />
                    </Box>
                    <Box>
                        <NextImage src={frame3} alt="19Day image" />
                    </Box>
                    <Box>
                        <NextImage src={frame4} alt="19Day image" />
                    </Box>
                    <Box>
                        <NextImage src={frame5} alt="Brookland Press image" />
                    </Box>
                    <Box>
                        <NextImage src={frame6} alt="Brookland Press image" />
                    </Box>
                    <Box>
                        <NextImage src={frame7} alt="Brookland Press image" />
                    </Box>
                    <Box>
                        <NextImage src={frame8} alt="Commons image" />
                    </Box>
                    <Box>
                        <NextImage src={frame9} alt="Commons image" />
                    </Box>
                    <Box>
                        <NextImage src={frame10} alt="Commons image" />
                    </Box>
                    <Box>
                        <NextImage src={frame11} alt="Commons image" />
                    </Box>
                    <Box>
                        <NextImage src={frame12} alt="Taylor image" />
                    </Box>
                    <Box>
                        <NextImage src={frame13} alt="Taylor image" />
                    </Box>
                    <Box>
                        <NextImage src={frame14} alt="Taylor image" />
                    </Box>
                    <Box>
                        <NextImage src={frame15} alt="Taylor image" />
                    </Box>
                    <Box>
                        <NextImage src={frame16} alt="Taylor image" />
                    </Box>
                    <Box>
                        <NextImage src={frame17} alt="Taylor image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}