import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import './fonts.css'

const Head = styled.div`
  background: rgba(0, 0, 0, 0.6);
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;

  @media (max-width: 1080px) {
    padding: 10px 0 5px 0;
  }
`

const Text = styled.h3`
  color: #FFF;
  display: inline;
  text-align: right;
  margin: 15px;
  cursor: pointer;

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
  padding: 0 50px 0 20px;
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

const H1 = styled.h1`
  font-family: Rancho;
  font-size: 60px;


  @media (min-width: 1080px) {
    display: inline;
  }
`
const Title = () => (
  <H1 className='font-effect-fire'>
    <Link
      to="/"
      style={{
        opacity: '1',
        color: `#222`,
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
      <Title/>       
    </MenuContainer>       
    <NavContainer>
      <Title/>
      <NavLinkContainer>
        <NavLink link="/" text="Home"/>
        <NavLink link="/menu" text="Menu"/>
        <NavLink link="/bar" text="Bar"/>
        <NavLink link="/reservations" text="Reservations"/>
      </NavLinkContainer>
    </NavContainer>
  </Head>
)

export default Header
