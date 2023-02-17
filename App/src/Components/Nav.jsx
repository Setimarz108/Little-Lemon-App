import React from 'react'
import { Stack,Box,} from '@chakra-ui/react'

function Nav(props) {

  return (
    <nav>
        <Box bg="gray.200" p={4}>
      <Stack direction="row" spacing={4}>
        {props.children}
      </Stack>
    </Box>
    </nav>
  )
}

export default Nav