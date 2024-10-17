import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdVideoLibrary } from "react-icons/md";

function Header() {
  return (
    <div>
        <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1><MdVideoLibrary style={{color:'yellow'}} /> Media Player</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header