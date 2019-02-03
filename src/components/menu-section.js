import React from 'react'
import styled from 'styled-components'

import Fab from './fab'

import { FaUtensils } from 'react-icons/fa'

import './fonts.css'

const Title = styled.h1`
  font-family: Pacifico;
  color: #333;
  display: inline;
`

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const Icon = styled.div`
  display: inline-block;
  background-color: #333; 
  color: #D79922;
  border-radius: 60px;
  box-shadow: 0px 0px 2px #888;
  padding: 0.5em 0.6em;
  margin: 15px;
`

const MenuSection = () => (
  <Card>
    <Fab/>
    <div style={{padding: '2px 16px'}}>
      <Icon><FaUtensils size={42} style={{paddingTop: '5px'}}/></Icon>
      <Title>Appetizers</Title>
      <br/>
      <br/>
    </div>
  </Card>
)

export default MenuSection