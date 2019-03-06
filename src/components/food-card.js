import React from 'react'
import styled from 'styled-components'
import Image from '../images/back.jpg'

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const FoodCard = ({title, desc}) => (
  <Card>
    <img src={Image} alt="Food" style={{width: '100%', height: '200px', borderRadius: '5px 5px 0 0'}}/>
    <div style={{padding: '2px 16px'}}>
      <h4><b>{title}</b></h4>
      <p>{desc}</p>
    </div>
  </Card>
)

export default FoodCard