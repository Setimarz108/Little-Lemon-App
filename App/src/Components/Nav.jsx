import React, { useState } from "react";
import { useMediaQuery, HStack, Flex, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, IconButton, Icon } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

function Nav(props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isMobile ? (
        <Flex justify="flex-end" p={2}>
          <IconButton
            icon={<Icon as={FiMenu} />}
            variant="ghost"
            onClick={handleDrawerOpen}
            aria-label="Open navigation menu"
          />
        </Flex>
      ) : (
        <nav>
          <Flex alignItems="center" gap="2">
            <HStack direction="row" spacing={100} w={"100%"}>
              {props.children}
            </HStack>
          </Flex>
        </nav>
      )}
      <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <Nav onClose={handleDrawerClose}>
              <Flex alignItems="center" gap="2">
                <HStack direction="row" spacing={100} w={"100%"}>
                  {props.children}
                </HStack>
              </Flex>
            </Nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Nav;




