import React from "react";
import {
  useMediaQuery,
  Flex,
  HStack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
  Image,
  VStack
} from "@chakra-ui/react";

import { Bars3Icon } from "@heroicons/react/24/solid";

function Nav(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  
  

  return (
    <>
      {isMobile ? (
        <>
        <Flex justifyContent={"space-between"}>
          <Image src="./src/assets/logo.png" alt="Logo" width={"10rem"} />
          <Bars3Icon
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            width={"60px"}
            
          ></Bars3Icon>
          </Flex>
          <Flex flexDirection={"column"}>
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
          
              <VStack><DrawerBody>{props.children}</DrawerBody></VStack>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue">Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          </Flex>
        </>
      ) : (
         <nav>
          <Flex alignItems="center" gap="2">
            <VStack direction="row" spacing={100} w={"100%"}>
              {props.children}
            </VStack>
          </Flex>
        </nav>
      )}
    </>
  );
}

export default Nav;
