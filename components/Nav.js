import { useState } from "react";
import {
    Text,
    IconButton,
    Button,
    Flex,
    Box,
    Container,
    Stack,
    Avatar,
    AvatarBadge,
    Spacer,
    Tooltip,
    Link,
    Wrap,
    Divider
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Nav = ({ children }) => {

    const [display, changeDisplay] = useState('none')

    const StickNav = styled(Flex)`
            position: sticky;
            z-index: 10;
            top: 0;
            
        `

    return (
        <StickNav
            w={['100vw', '100vw', '36vw', '36vw']}
            h={['6em', '6em', '100vh', '100vh']}
            direction="column"
            bg="white"
            align={['', '', 'left', 'left']}
            px={8}
        >
            <Flex mb={6} mt={6} >
                <Flex>
                    <Avatar size='md' name="Joseph Giampaoli" src="">
                        <Tooltip hasArrow label="Open to work" aria-label="Open to work" bg="green.500" color="white">
                            <AvatarBadge boxSize='1.15em' bg='green.500' />
                        </Tooltip>
                    </Avatar>
                    <Flex direction="column" pl={6} justify='center'>
                        <Text fontSize={['lg', 'lg', 'xl', 'xl']} fontWeight='600' lineHeight='1em'>Joseph Giampaoli</Text>
                        <Text fontSize={['md', 'md', 'lg', 'lg']}>Graphic Designer</Text>
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
            <Divider />
            <Flex
                display={['none', 'none', 'flex', 'flex']}
                direction="column"
                mt={10}
            >
                {/* <Text fontSize="md" fontWeight='900'>RECENT WORK</Text> */}
                <Wrap>
                <Text fontSize="md" fontWeight='900'>RECENT WORK</Text>
                    <Link fontSize='2em'><NextLink href="/creditKarma">Credit Karma</NextLink></Link>
                    <Link fontSize='2em'><NextLink href="/creditKarma">asdas</NextLink></Link>
                    <Link fontSize='2em'><NextLink href="/creditKarma">aa33</NextLink></Link>

                    


                </Wrap>

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

        </StickNav>
    )

}

export default Nav