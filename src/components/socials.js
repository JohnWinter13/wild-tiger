import React from 'react'
import styled from 'styled-components'

import { FaInstagram, FaPinterest, FaTwitter, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const SocialLink = styled.a`
  color: #FFF;
  text-decoration: none;
  margin: 5px;
  display: inline;

  :hover {
    color: #D79922;
  }
`

const Socials = ({iconSize}) => (
  <div>
    <SocialLink href="#"> <FaInstagram size={iconSize}/> </SocialLink>
    <SocialLink href="#"> <FaPinterest size={iconSize}/> </SocialLink>
    <SocialLink href="#"> <FaTwitter size={iconSize}/> </SocialLink>
    <SocialLink href="#"> <FaFacebookF size={iconSize}/> </SocialLink>
    <SocialLink href="#"> <FaEnvelope size={iconSize}/> </SocialLink>
  </div>
)

export default Socials
