
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
import frame1 from '../public/assets/ck/frame1.png'
import frame2 from '../public/assets/ck/frame2.png'
import frame3 from '../public/assets/ck/frame3.png'
import frame4 from '../public/assets/ck/frame4.png'
import frame5 from '../public/assets/ck/frame5.png'
import frame6 from '../public/assets/ck/frame6.png'
import frame7 from '../public/assets/ck/frame7.png'
import frame8 from '../public/assets/ck/frame8.png'
import frame9 from '../public/assets/ck/frame9.png'
import frame10 from '../public/assets/ck/frame10.png'
import frame11 from '../public/assets/ck/frame11.png'


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
                    <Box h={['400', '480px', '520px', '520px']} >
                        <ReactPlayer url="assets/ck_notification.webm" playing loop width="100%" height="100%" />
                    </Box>
                    <Box>
                        <NextImage src={frame1} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame2} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame3} alt="credit karma email image" />
                    </Box>
                    <Box h={['400', '480px', '520px', '520px']} >
                        <ReactPlayer url="assets/checklist.webm" playing loop width="100%" height="100%" />
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
                    <Box>
                        <NextImage src={frame7} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame8} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame9} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame10} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage src={frame11} alt="credit karma email image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}
