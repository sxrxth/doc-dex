import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <Navbar className="bg-black" style={{height:"60px"}}>
        <Container>
          <Navbar.Brand >
            <Link to={'/'} className='fs-4' style={{textDecoration:"none",color:"white"}}>
            <i class="fa-brands fa-reddit-alien"></i>{' '}
            Doc Dex
            </Link>
         
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header