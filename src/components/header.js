import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { MdMenu } from 'react-icons/md'

const Head = styled.div`
  background: rgba(0, 0, 0, 0.6);
  marginBottom: 1.45rem;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;

  @media (max-width: 1080px) {
    padding: 15px 0;
  }
`

const Text = styled.h3`
  color: #FFF;
  display: inline;
  text-align: right;
  margin: 15px;

  :hover {
    color: #D79922;
  }
`
const NavLink = ({link, text}) => (
  <Link style={{textDecoration: 'none'}} to={link}>
    <Text>{text}</Text>
  </Link>
)

const NavContainer = styled.div`
  @media (max-width: 1080px) {
    display: none;
  }
`
const NavLinkContainer = styled.div`
  float: right;
  margin-top: 10px;
`

const MenuContainer = styled.div`
  text-align: center;
  display: inline;
  @media (min-width: 1080px) {
    display: none;
  }
`
const MenuIcon = styled.div`
  color: #FFF;
  display: inline;
  cursor: pointer;
  float: left;
  margin: 10px;
  padding-left: 10px;   
`

const H1 = styled.h1`
  @media (max-width: 1080px) {
    margin-right: 20px;
  }

  @media (min-width: 1080px) {
    display: inline;
  }
`
const Title = () => (
  <H1>
    <Link
      to="/"
      style={{
        opacity: '1',
        color: `white`,
        textDecoration: `none`,
      }}
    >
      Wild Tiger Thai
    </Link>
  </H1>
)

const Header = () => (
  <Head>
    <MenuContainer>
      <MenuIcon><MdMenu size={24}/></MenuIcon>
      <Title/>
    </MenuContainer>
    <NavContainer>
      <Title/>
      <NavLinkContainer>
        <NavLink link="/" text="Home"/>
        <NavLink link="/" text="Menu"/>
        <NavLink link="/" text="Reservations"/>
        <NavLink link="/" text="Contact Us"/>
        <NavLink link="/" text="About Us"/>
      </NavLinkContainer>
    </NavContainer>
  </Head>
)

export default Header
