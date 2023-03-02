import React from "react";
import { useMediaQuery, Flex, HStack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button, useDisclosure } from "@chakra-ui/react";

import { Bars3Icon } from '@heroicons/react/24/solid'

function Nav(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (

    <>
      {isMobile? (
        <>
<Bars3Icon ref={btnRef} colorScheme='teal' onClick={onOpen} width={"60px"}>
</Bars3Icon>
<Drawer
isOpen={isOpen}
placement='right'
onClose={onClose}
finalFocusRef={btnRef}
>
<DrawerOverlay />
<DrawerContent>
  <DrawerCloseButton />
  <DrawerHeader>Create your account</DrawerHeader>

  <DrawerBody>
    {props.children}
  </DrawerBody>

  <DrawerFooter>
    <Button variant='outline' mr={3} onClick={onClose}>
      Cancel
    </Button>
    <Button colorScheme='blue'>Save</Button>
  </DrawerFooter>
</DrawerContent>
</Drawer></>


      ) : ( 

        <nav>
        <Flex alignItems="center" gap="2">
          <HStack direction="row" spacing={100} w={"100%"}>
            {props.children}
          </HStack>
        </Flex>
      </nav>
      )}
     
     
    </>
  )
}

export default Nav;




