import { useState } from "react";
import {
    Text,
    IconButton,
    Button,
    Flex,
    Box,
    Container,
    VStack,
    Avatar,
    Spacer,
    StackDivider
} from '@chakra-ui/react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Nav = ({ children }) => {

    const [display, changeDisplay] = useState('none')


    return (
        <Flex 
        w={['100vw', '100vw', '36vw', '36vw']}
        h={['7em','7em', '100vh', '100vh']}
         direction="column" 
         bgColor='gray.100'>
            <Flex p={8}>
                <Flex align="center">
                    <Avatar size="lg" name="Joseph Giampaoli" src=""> </Avatar>
                    <Flex direction="column" pl={4}>
                    <Text fontSize="xl"><Link href="/" passHref>Joseph Giampaoli</Link></Text>
                    <Text fontSize="xl"><Link href="/" passHref>Graphic Designer</Link></Text>
                    </Flex>
                </Flex>
                <Spacer />
                <Flex>
                    <IconButton
                        aria-label="Open Menu"
                        size="lg"
                        icon={<HamburgerIcon />}
                        display={['flex', 'flex', 'none', 'none']}
                        onClick={() => changeDisplay('flex')}
                    />
                </Flex>
            </Flex>

            <Flex
                display={['none', 'none', 'flex', 'flex']}
                direction="column"
                ml={10}
                my={4}
            >
                <Text fontSize="xl">Recent Work</Text>
                <VStack
                    mt={2}
                    ml={8}
                    spacing={2}
                    align="left"
                >
                    <Text fontSize="xl"><Link href="/" passHref >Credit Karma</Link></Text>
                    <Text fontSize="xl"><Link href="/" passHref color="red.500">eCommerce</Link></Text>
                </VStack>

            </Flex>

            <Flex
                w='100vw'
                h='100vh'
                bgColor='gray.50'
                zIndex={20}
                pos='fixed'
                top='0'
                left='0'
                overflowY='auto'
                flexDir='column'
                display={display}
            >
                <Flex justify="flex-end">
                    <IconButton
                        aria-label="close Menu"
                        mt={2}
                        mr={2}
                        size="lg"
                        icon={<CloseIcon />}
                        onClick={() => changeDisplay('none')}
                    />
                </Flex>
            </Flex>

        </Flex>
    )

}

export default Nav