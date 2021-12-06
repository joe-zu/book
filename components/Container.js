import React from "react";
import {
    useColorMode,
    Button,
    Flex,
    Box,
} from '@chakra-ui/react'
import Link from 'next/link'
import styled from '@emotion/styled'
import DarkModeSwitch from "./DarkModeSwitch";

const Container = ({ children }) => {

    const {colorMode} = useColorMode();

    const navBg = {
        light: 'white',
        dark: 'gray.700'
    }

    return (
    <Flex bg={navBg[colorMode]}>
        <Flex p='10'>
            <DarkModeSwitch></DarkModeSwitch>
        </Flex>
        
    </Flex>
    )

}

export default Container