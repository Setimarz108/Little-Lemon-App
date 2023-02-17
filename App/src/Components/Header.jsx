import React from 'react'
import Nav from './Nav'
import { Link} from '@chakra-ui/react'

function Header() {
  return (
    <header>
      <Nav> 
        <Link href="">Home</Link>
        <Link href="">About</Link>
        <Link href="">Menu</Link>
        <Link href="">Reservations</Link>
        <Link href="">Order Online</Link>
        <Link href="">Login</Link>
        
      </Nav>
      </header>
  )
}

export default Header