import React from "react";
import Nav from "./Nav";
import { Link, Image, Flex, Spacer, HStack } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <Nav>
        <Image src="./src/assets/logo.png" alt="Logo" width={"10rem"} />
        <div className="Links">
          <Link href="">Home</Link>
          <Link href="">About</Link>
          <Link href="">Menu</Link>
          <Link href="">Reservations</Link>
          <Link href="">Order Online</Link>
          <Link href="">Login</Link>
        </div>
      </Nav>
    </header>
  );
}

export default Header;
