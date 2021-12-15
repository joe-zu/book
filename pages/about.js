
import Nav from "../components/Nav"
import ProjectTitle from "../components/ProjectTitle"
import React from 'react'
import ReactPlayer from 'react-player'
import {
    Text,
    Flex,
    Box,
    Grid,
    GridItem,
    Link
} from '@chakra-ui/react'
import NextImage from 'next/image'


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

                <Grid templateColumns='repeat(6, 1fr)' gap={2} pt={2} pr={['', '', '4em', '4em']}>
                    <GridItem colSpan={6} mb={8}>
                        <Flex>
                            <ProjectTitle title='About' />
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={6} bg='' mb={10}>
                        <Text fontSize="2xl" mb={8}>
                            Hi! — I am Joseph Giampaoli, a graphic designer and web developer in Los Angeles, CA. I design strategic creative for brands, products, + tech. I focus on creating visual experiences that are accessible and engaging for all.
                        </Text>
                        <Text fontSize="2xl">
                            I hold a BFA in Graphic Design from the Shintaro Akatsu School of Design : University of Bridgeport —
                            and I recently completed the Full Stack web development boot camp with UCLA Extension.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Flex direction='column'>
                            <Text as='u' fontWeight={900}>CONTACT</Text>
                            <Text>giampaoli.joe@gmail.com</Text>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Flex direction='column'>
                            <Text as='u' fontWeight={900}>SOCIAL</Text>
                            <Link fontSize='1.5em' isExternal href='https://www.linkedin.com/in/joegiampaoli/'>LinkedIn</Link>
                            <Link fontSize='1.5em' isExternal href='https://github.com/joe-zu/'>Github</Link>
                            <Link fontSize='1.5em' isExternal href='https://www.instagram.com/joe.zu/'>Instagram</Link>
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </Flex>
    )
}
