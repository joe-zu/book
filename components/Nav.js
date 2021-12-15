import { useState } from "react";
import {
    Text,
    IconButton,
    Button,
    Flex,
    Box,
    Container,
    Kbd,
    Avatar,
    AvatarBadge,
    Spacer,
    Tooltip,
    Link,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react'
import { useDisclosure } from "@chakra-ui/react";
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Nav = ({ children }) => {

    // const [display, changeDisplay] = useState('none')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const StickNav = styled(Flex)`
            position: sticky;
            z-index: 10;
            top: 0;
            
        `

    return (
        <StickNav
            w={['100vw', '100vw', '30vw', '30vw']}
            h={['6em', '6em', '100vh', '100vh']}
            direction="column"
            bg="white"
            align={['', '', 'left', 'left']}
            pl={8}
        >
            <Flex my={6} >
                <NextLink href="/about" passHref>
                    <Flex>
                        <Avatar size='md' name="Joseph Giampaoli" src="assets/avatar.jpg">
                            <Tooltip hasArrow label="Open to work" aria-label="Open to work" bg="green.500" color="white">
                                <AvatarBadge boxSize='1.15em' bg='green.500' />
                            </Tooltip>
                        </Avatar>

                        <Flex direction="column" pl={6} justify='center'>
                            <Text fontSize={['lg', 'lg', 'xl', 'xl']} fontWeight='600' lineHeight='1em'>Joseph Giampaoli</Text>
                            <Text fontSize={['md', 'md', 'lg', 'lg']}>Graphic Designer</Text>
                        </Flex>
                    </Flex>
                </NextLink>
                <Spacer />
                <Flex display={['flex', 'flex', 'none', 'none']} pr={6}>
                    <IconButton
                        aria-label="Open Menu"
                        size="lg"
                        icon={<HamburgerIcon />}
                        display={['flex', 'flex', 'none', 'none']}
                        onClick={onOpen}
                    />
                </Flex>
            </Flex>
            <Divider />
            <Flex
                display={['none', 'none', 'flex', 'flex']}
                direction="column"
                mt={10}
                pl={[0, 0, 10, 20]}
            >
                <Text fontSize="md" fontWeight='900'>RECENT WORK</Text>
                <Flex direction="column" pl={[0, 0, 2, 8]}>
                    <Flex align='center' borderWidth='' borderRadius='md'>
                        <NextLink href="/" passHref ><Link fontSize='1.5em'>Credit Karma</Link></NextLink>
                    </Flex>
                    <Flex align='center'>
                        <NextLink href="/inStore" passHref ><Link fontSize='1.5em'>In Store</Link></NextLink>
                    </Flex>
                    <Flex align='center'>
                        <NextLink href="/botanic" passHref ><Link fontSize='1.5em'>Botanic</Link></NextLink>
                    </Flex>
                    <Flex align='center'>
                        <NextLink href="/yale" passHref ><Link fontSize='1.5em'>Yale Jackson</Link></NextLink>
                    </Flex>
                    <Flex align='center'>
                        <NextLink href="/wag" passHref ><Link fontSize='1.5em'>Wag Central</Link></NextLink>
                    </Flex>
                    <Flex align='center'>
                        <NextLink href="/snap" passHref ><Link fontSize='1.5em'>Snap</Link></NextLink>
                    </Flex>
                    <Flex align='center'>
                        <NextLink href="/branding" passHref ><Link fontSize='1.5em'>Branding</Link></NextLink>
                    </Flex>
                    <Flex align='center' borderWidth='' borderRadius='md' mt={10}>
                        <Link fontSize='1.5em' href='https://still-reef-35670.herokuapp.com/' isExternal>Web dev work</Link>
                    </Flex>
                    <Flex align='center' borderWidth='' borderRadius='md' mt={10}>
                        <NextLink href="/about" passHref ><Link fontSize='1.5em'>About me</Link></NextLink>
                    </Flex>
                    <Flex align='center' borderWidth='' borderRadius='md'>
                        <Link fontSize='1.5em' isExternal href='https://www.linkedin.com/in/joegiampaoli/'>LinkedIn</Link>
                    </Flex>
                    <Flex align='center' borderWidth='' borderRadius='md'>
                        <NextLink href="/about" passHref ><Link fontSize='1.5em'>Contact</Link></NextLink>
                    </Flex>
                </Flex>
            </Flex>




            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset='slideInBottom'
                size='sm'
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Flex direction="column" py={8} align='center'>
                            <Text mb={4} fontSize="md" fontWeight='900'>RECENT WORK</Text>
                            <Flex direction="column">
                                <Flex align='center'>
                                    <NextLink href="/" passHref ><Link fontSize='1.5em'>Credit Karma</Link></NextLink>
                                </Flex>
                                <Flex align='center'>
                                    <NextLink href="/inStore" passHref ><Link fontSize='1.5em'>In Store</Link></NextLink>
                                </Flex>
                                <Flex align='center'>
                                    <NextLink href="/botanic" passHref ><Link fontSize='1.5em'>Botanic</Link></NextLink>
                                </Flex>
                                <Flex align='center'>
                                    <NextLink href="/yale" passHref ><Link fontSize='1.5em'>Yale Jackson</Link></NextLink>
                                </Flex>
                                <Flex align='center'>
                                    <NextLink href="/wag" passHref ><Link fontSize='1.5em'>Wag Central</Link></NextLink>
                                </Flex>
                                <Flex align='center'>
                                    <NextLink href="/snap" passHref ><Link fontSize='1.5em'>Snap</Link></NextLink>
                                </Flex>
                                <Flex align='center'>
                                    <NextLink href="/branding" passHref ><Link fontSize='1.5em'>Branding</Link></NextLink>
                                </Flex>
                                <Flex align='center' borderWidth='' borderRadius='md' mt={6}>
                                    <Link fontSize='1.5em' href='https://still-reef-35670.herokuapp.com/' isExternal>Web dev work</Link>
                                </Flex>
                                <Flex align='center' borderWidth='' borderRadius='md' mt={6}>
                                    <NextLink href="/about" passHref ><Link fontSize='1.5em'>About me</Link></NextLink>
                                </Flex>
                                <Flex align='center' borderWidth='' borderRadius='md'>
                                    <Link fontSize='1.5em' isExternal href='https://www.linkedin.com/in/joegiampaoli/'>LinkedIn</Link>
                                </Flex>
                                <Flex align='center' borderWidth='' borderRadius='md'>
                                    <NextLink href="/about" passHref ><Link fontSize='1.5em'>Contact</Link></NextLink>
                                </Flex>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/* <Flex
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
            </Flex> */}

        </StickNav>
    )

}

export default Nav