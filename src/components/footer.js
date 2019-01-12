import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPinterest, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
  position: fixed;
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
      <SocialLink href="#"> <FontAwesomeIcon icon={faMapMarkerAlt} /></SocialLink>
      <Text>1825 SE 164th Ave #101, Vancouver, WA 98683, USA</Text>
      <br/>
      <SocialLink href="#"> <FontAwesomeIcon icon={faPhone} /></SocialLink>
      <Text>+1 360-882-8887</Text>
    </div>
    <SocialContainer>
      <SocialLink href="#"> <FontAwesomeIcon icon={faInstagram} /></SocialLink>
      <SocialLink href="#"> <FontAwesomeIcon icon={faPinterest} /></SocialLink>
      <SocialLink href="#"> <FontAwesomeIcon icon={faTwitter} /></SocialLink>
      <SocialLink href="#"> <FontAwesomeIcon icon={faFacebookF} /></SocialLink>
      <SocialLink href="#"> <FontAwesomeIcon icon={faEnvelope} /></SocialLink>
    </SocialContainer>
  </Foot>
)

export default Footer
