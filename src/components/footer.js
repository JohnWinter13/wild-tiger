import React from 'react'
import styled from 'styled-components'

import { FaInstagram, FaPinterest, FaTwitter, FaFacebookF, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const SocialLink = styled.a`
  color: #FFF;
  text-decoration: none;
  margin: 5px;
  display: inline;

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
      <SocialLink href="#"> <FaMapMarkerAlt/> </SocialLink>
      <Text>1825 SE 164th Ave #101, Vancouver, WA 98683, USA</Text>
      <br/>
      <SocialLink href="#"> <FaPhone/> </SocialLink>
      <Text>+1 360-882-8887</Text>
    </div>
    <SocialContainer>
      <SocialLink href="#"> <FaInstagram/> </SocialLink>
      <SocialLink href="#"> <FaPinterest/> </SocialLink>
      <SocialLink href="#"> <FaTwitter/> </SocialLink>
      <SocialLink href="#"> <FaFacebookF/> </SocialLink>
      <SocialLink href="#"> <FaEnvelope/> </SocialLink>
    </SocialContainer>
  </Foot>
)

export default Footer
