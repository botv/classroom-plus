import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import logo from '../assets/img/logo.png';

function TopNav() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/" className="mr-auto">Classroom Plus</NavbarBrand>
      <NavbarText>
        by&nbsp;
        <a
          href="https://benbotvinick.com"
          className="text-muted"
          onClick={() => chrome.tabs.create({ url: 'https://benbotvinick.com' })}
        >
          Ben Botvinick
        </a>
      </NavbarText>
    </Navbar>
  );
}

export default TopNav;