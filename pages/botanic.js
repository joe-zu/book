
import Nav from "../components/Nav"
import ProjectTitle from "../components/ProjectTitle"
import React from 'react'
import ReactPlayer from 'react-player'
import {
    Text,
    Flex,
    Box,
    VStack,
    Heading,
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
                <Box w='100%' mb={4} mt={2}>
                    <ProjectTitle title="UI UX Design" subtitle="product design, identity" company="" location="" />
                </Box>
                <VStack spacing={8}>
                    <Box>
                        <NextImage placeholder="blur" intrinsic priority src={frame1} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame2} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame3} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame4} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame5} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame6} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame7} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame8} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame9} alt="Botanic UI UX image" />
                    </Box>
                    <Box>
                        <NextImage placeholder="blur" intrinsic src={frame10} alt="Botanic UI UX image" />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}