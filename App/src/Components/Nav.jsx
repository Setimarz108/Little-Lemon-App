import React from 'react'
import { HStack,Box,Flex} from '@chakra-ui/react'

function Nav(props) {

  return (
    <nav>
        <Flex   alignItems='center' gap='2'>
                  
      <HStack direction="row" spacing={100} w={"100%"}>
        {props.children}
      </HStack>
   
    </Flex>
    </nav>
  )
}

export default Nav