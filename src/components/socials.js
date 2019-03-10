import React from 'react'
import styled from 'styled-components'

import { FaInstagram, FaPinterest, FaFacebookF, FaEnvelope, FaYelp } from 'react-icons/fa';

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
    <SocialLink href='https://www.yelp.ca/biz/wild-tiger-vancouver' target='_blank' rel='noopener noreferrer'>
      <FaYelp size={iconSize}/> 
    </SocialLink>
    <SocialLink href='https://www.facebook.com/Wild-Tiger-Thai-Restaurant-and-Bar-1725468634361251/' target='_blank' rel='noopener noreferrer'>
      <FaFacebookF size={iconSize}/> 
    </SocialLink>
    <SocialLink href="#"> <FaEnvelope size={iconSize}/> </SocialLink>
  </div>
)

export default Socials
