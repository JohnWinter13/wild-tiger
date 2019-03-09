import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

import TigerLogo from '../images/tiger_icon.png'

import './drawer.css'

const Text = styled.h3`
  color: #FFF;
  text-align: left;
  margin: 20px 10px;

  :hover {
    color: #D79922;
  }
`

const MenuContainer = styled.div`
  @media (min-width: 1080px) {
    display: none;
  }
`

const MenuItem = ({text, link}) => (
  <Link to={link} style={{textDecoration: 'none'}}>
    <Text>{text}</Text>
  </Link>
)

const Drawer = () => (
  <MenuContainer>
    <Menu>
      <img src={TigerLogo} alt="Logo"></img>
      <MenuItem text="Home" link="/"/>
      <MenuItem text="Menu" link="/menu"/>
      <MenuItem text="Reservations" link="/reservations"/>
      <MenuItem text="Contact Us" link="/"/>
      <MenuItem text="About Us" link="/"/>
    </Menu>  
  </MenuContainer>
)   

export default Drawer
