
import Nav from "../components/Nav"
import { useState } from "react";
import {
    Text,
    IconButton,
    Button,
    Flex,
    Box,
    Center,
    VStack,
    Heading
} from '@chakra-ui/react'
import Image from 'next/image'

//need Head - Title (seo)

export default function creditKarma() {
    return (
        <Flex direction={['column', 'column', 'row', 'row']}>
            <Nav />
            <Box
                w={['100vw', '100vw', '64vw', '64vw']}
                p={8}
            >
                <VStack spacing={4}>
                    <Box>
                        <Heading as='h2'>Email Campaign — Credit Karma</Heading>
                    </Box>

                    <Box w='40px' h='40px' bg='yellow.200'>
                        1
                    </Box>
                    <Box w='40px' h='40px' bg='tomato'>
                        2
                    </Box>
                    <Box w='40px' h='40px' bg='pink.100'>
                        3
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}
