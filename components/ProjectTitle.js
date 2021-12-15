
import React from 'react'
import {
  Text,
  IconButton,
  Flex,
  Box,
  Heading,
  Spacer
} from '@chakra-ui/react'

const ProjectTitle = (props) => {


  // direction={['column', 'column', 'row', 'row']} align={['', '', 'center', 'center']}

  return (
    <Flex direction='column'>
      <Heading as='h1' size='lg' >{props.title}</Heading>
      <Text fontSize="xl">{props.subtitle}</Text>
      <Text as='i' fontSize="xl" >{props.company}</Text>
      <Text fontSize="xl" >{props.location}</Text>

    </Flex>
  )
}
export default ProjectTitle