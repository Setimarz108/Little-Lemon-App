import React from "react";
import Nav from "./Nav";
import {Link} from "react-router-dom"
import { Image, Flex, Spacer, HStack } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <Nav>
        <Image src="./src/assets/logo.png" alt="Logo" width={"10rem"} />
        <div className="Links" style={{marginTop:"1rem"}}>
          <Link to="/">Home</Link>
          <Link href="">About</Link>
          <Link href="">Menu</Link>
          <Link to="/reservation">Reservations</Link>
          <Link href="">Order Online</Link>
          <Link href="">Login</Link>
        </div>
      </Nav>
    </header>
  );
}

export default Header;
