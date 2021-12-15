
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
import frame1 from '../public/assets/ck/Frame1.png'
import frame2 from '../public/assets/ck/Frame2.png'
import frame3 from '../public/assets/ck/Frame3.png'
import frame4 from '../public/assets/ck/Frame4.png'
import frame5 from '../public/assets/ck/Frame5.png'
import frame6 from '../public/assets/ck/Frame6.png'
import frame7 from '../public/assets/ck/Frame7.png'
import frame8 from '../public/assets/ck/Frame8.png'
import frame9 from '../public/assets/ck/Frame9.png'
import frame10 from '../public/assets/ck/Frame10.png'
import frame11 from '../public/assets/ck/Frame11.png'


//need Head - Title (seo)

export default function index() {


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
                            <ProjectTitle title="Email Campaign" subtitle="design, production" company="Credit Karma" location="Los Angeles" />
                        </Box>
                        <Flex display={['none', 'none', 'flex', 'flex']}>
                            <ReactPlayer url="assets/ck_notification.webm" playing loop width="100" height="100" />
                        </Flex>
                        <Flex display={['flex', 'flex', 'none', 'none']}>
                            <ReactPlayer controls playing='false' url="assets/ck_notification.webm" loop width="100" height="100" />
                        </Flex>
                    </Flex>
                    <Box>
                        <NextImage placeholder="blur" intrinsic priority src={frame1} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame2} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame3} alt="credit karma email image" />
                    </Box>
                    <Flex display={['none', 'none', 'flex', 'flex']}>
                        <ReactPlayer url="assets/checklist.webm" playing loop width="100" height="100" />
                    </Flex>
                    <Flex display={['flex', 'flex', 'none', 'none']}>
                        <ReactPlayer controls playing='false' url="assets/checklist.webm" loop width="100" height="100" />
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
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame7} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame8} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame9} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame10} alt="credit karma email image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame11} alt="credit karma email image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}
