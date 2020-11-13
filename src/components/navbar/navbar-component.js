import React, {useState} from 'react';
// import Logo from './logo.svg';
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
 
function NavbarLight() {
  const [hidden, setHidden] = useState(true);
 
  return (
    <Navbar expandSm light>
      <Nav start>
        <NavbarLink light brand href="home">ADOPT A KITTY</NavbarLink>
        <Nav end>
          <Button
            light
            outline
            toggleCollapse
            expandSm
            onClick={() => setHidden(!hidden)}
          >
            <span>&#9776;</span>  
          </Button>
        </Nav>
      </Nav>
      <Nav start collapse expandSm hidden={hidden}>
        <NavbarLink light active href="contact" mlAuto>Contact</NavbarLink>
        <NavbarLink light href="about">About Us</NavbarLink>
        <NavbarLink light href="donate">Donate</NavbarLink>
      </Nav>
    </Navbar>
  );
};

export default NavbarLight;