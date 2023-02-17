import React from 'react'
import  Header from './Header'
import  Footer from './Footer'
import  Main from './Main'
import {Box} from '@chakra-ui/react'

function Layout(props) {
  return (
      <Box display="flex" flexDirection="column" minHeight="100vh" mx={"10%"}
       >
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
        {props.children}
        </Box>
  )
}

export default Layout