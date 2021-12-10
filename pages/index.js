
import Nav from "../components/Nav"
import { useState } from "react";
import {
  Text,
  IconButton,
  Button,
  Flex,
  Box,
  Center,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Home() {
  return (
    <Flex direction={['column', 'column', 'row', 'row']}>
      <Nav />
      <Box
        w={['100vw', '100vw', '64vw', '64vw']}
      >
        <Center 
        bg='green.200'
        h='14em'
        >
          <Text>INDEX</Text>
        </Center>

      </Box>
    </Flex>
  )
}
