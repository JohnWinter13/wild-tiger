import React from 'react'
import styled from 'styled-components'

import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import Socials from '../components/socials'

const SocialLink = styled.a`
  color: #FFF;
  text-decoration: none;

  :hover {
    color: #D79922;
  }
`
const Text = styled.h6`
  color: #FFF;
  display: inline;
  margin: 5px;
`

const Foot = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 5px 10%;
  background-color: #1c1b1b;
`
const SocialContainer = styled.div`
  position: absolute;
  bottom: 20px;

  @media (max-width: 700px) {
    position: relative;
    bottom: 0px;
    text-align: center;
    margin-top: 10px;
  }
`

const Footer = () => (
  <Foot>
    <div style={{textAlign: 'right'}}>
      <SocialLink href='https://www.google.com/maps/@45.6104283,-122.5002156,15z' target='_blank' rel='noopener noreferrer'> <FaMapMarkerAlt/> </SocialLink>
      <Text>1825 SE 164th Ave #101, Vancouver, WA 98683, USA</Text>
      <br/>
      <SocialLink href='tel:3608828887'> <FaPhone/> </SocialLink>
      <Text>+1 360-882-8887</Text>
    </div>
    <SocialContainer>
      <Socials/>
    </SocialContainer>
  </Foot>
)

export default Footer
