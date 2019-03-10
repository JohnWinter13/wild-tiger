import React from 'react'
import styled from 'styled-components'

import FoodLogo from '../images/foodtogo.png'

const Container = styled.div`
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 30px;
  margin: 15px;
`

const Text = styled.h4`
  color: #FFF;
  margin: 0;
`

const FoodToGo = () => (
  <Container>
    <img src={FoodLogo} alt='Food To Go'/>
    <Text>We also offer food pickups!</Text>
    <Text>Give us a call when you are ready to order for pick up.</Text>
  </Container>
)

export default FoodToGo