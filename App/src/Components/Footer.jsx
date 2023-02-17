import { VStack, HStack, Container, Image, Link } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <footer>
      <Container backgroundColor={"#495E57"}>
        <HStack justifyContent={"space-between"}>
          <VStack>
            <Image src="./src/assets/logo.png" alt="Logo" width={"10rem"} />
          </VStack>
          <VStack>
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Menu</Link>
            <Link href="">Reservations</Link>
            <Link href="">Order Online</Link>
            <Link href="">Login</Link>
          </VStack>
          <VStack>
            <Link href="">Address</Link>
            <Link href="">+23 23423422</Link>
            <Link href="">littlelemon@gmail.com</Link>
          </VStack>
          <VStack>
            <Link href="">
              <Image  boxSize='40px' src="./src/assets/isnta.png" alt="insta" srcset="" />
            </Link>
          </VStack>
        </HStack>
      </Container>
    </footer>
  );
}

export default Footer;
